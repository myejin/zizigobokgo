import Button from "@/common/button";
import Tabs from "./common/tab";
import type { JSX } from "react";

enum WeddingHostType {
  RIGHT = 'right',
  RIGHT_RIGHT = 'right_right',
  RIGHT_LEFT = 'right_left',
  LEFT = 'left',
  LEFT_RIGHT = 'left_right',
  LEFT_LEFT = 'left_left',
}

interface WeddingHost {
  type: WeddingHostType | string;
  name: string;
  phone: string;
}

const ContactItem = (hosts: WeddingHost[], type: WeddingHostType.LEFT | WeddingHostType.RIGHT): JSX.Element => {
  const findNamesByType = (hosts: WeddingHost[], type: string) => {
    return hosts.find((host) => host.type === type)?.name ?? ''
  }
  const names = [
    findNamesByType(hosts, type),
    findNamesByType(hosts, `${type}_left`),
    findNamesByType(hosts, `${type}_right`),
  ]

  return (
    <div className="px-6 py-4 bg-white rounded-md shadow-2xl">
      {names.map((name, idx) => (
        <div className="my-1 flex justify-between" key={idx}>
          <div className="w-35">{name}</div>
          <div className="flex gap-x-1">
            <div className="text-gray-400">•••</div>
            <Button 
              type="mini"
              text={"📞"} 
              className="bg-white"
              onClick={() => console.log('hello')} // TODO
            />
            <Button 
              type="mini"
              text={"💬"} 
              onClick={() => console.log('hello')} // TODO
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export const Contact = () => {
  const weddingHosts: WeddingHost[] = [
    {
      type: 'left',
      name: '김OO',
      phone: '010-1234-5678',
    },
    {
      type: 'left_left',
      name: '아부지',
      phone: '010-1234-5678',
    },
    {
      type: 'left_right',
      name: '신랑맘',
      phone: '010-1234-5678',
    },
    {
      type: 'right',
      name: '이OO',
      phone: '010-1234-5678',
    },
    {
      type: 'right_left',
      name: '신부아빠',
      phone: '010-1234-5678',
    },
    {
      type: 'right_right',
      name: '김엄마',
      phone: '010-1234-5678',
    },
  ]

  return (
    <div className="py-10 flex flex-col bg-neutral-50">
      <div className="my-5 flex flex-col items-center">
        <div className="text-title">축하 연락하기</div>
        <div className="text-mini text-rosegray opacity-80">직접 축하의 마음을 전해보세요</div>
        <Tabs
          className="mt-7 text-mini" 
          items={[
            { name: '신랑에게', elem: ContactItem(weddingHosts, WeddingHostType.LEFT) },
            { name: '신부에게', elem: ContactItem(weddingHosts, WeddingHostType.RIGHT) },
          ]} 
        />
        
      </div>
    </div>
  );
}

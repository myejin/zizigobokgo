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
    <div className="px-6 py-4 bg-white rounded-md shadow-xl">
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

export const Contact = ({ weddingHosts = [] }: { weddingHosts?: WeddingHost[] }) => {
  if (weddingHosts.length === 0) {
    return;
  }
  return (
    <div className="py-15 flex flex-col items-center bg-neutral-100">
      <div className="text-title">축하 연락하기</div>
      <div className="text-mini text-rosegray opacity-70">직접 축하의 마음을 전해보세요</div>
      <Tabs
        className="mt-8 text-mini" 
        items={[
          { name: '신랑에게', elem: ContactItem(weddingHosts, WeddingHostType.LEFT) },
          { name: '신부에게', elem: ContactItem(weddingHosts, WeddingHostType.RIGHT) },
        ]} 
      />
    </div>
  );
}

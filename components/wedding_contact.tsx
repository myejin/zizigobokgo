import Button from "@/common/button";
import Tabs from "./common/tab";
import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";

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
  const findPhoneByName = (hosts: WeddingHost[], name: string) => {
    return hosts.find((host) => host.name === name)?.phone ?? ''
  }
  const names = [
    findNamesByType(hosts, type),
    findNamesByType(hosts, `${type}_left`),
    findNamesByType(hosts, `${type}_right`),
  ]

  return (
    <div className="px-6 py-4 bg-neutral-light rounded-md shadow-sm">
      {names.map((name, idx) => (
        <div className="my-1 flex justify-between" key={idx}>
          <div className="w-35">{name}</div>
          <div className="flex gap-x-1">
            <div className="text-gray-400">•••</div>
            <Button 
              type="icon"
              icon={<FontAwesomeIcon icon={faPhone} className="text-mini-gray" />}
              onClick={() => {
                window.location.href = `tel:${findPhoneByName(hosts, name)}`;
              }}
            />
            <Button 
              type="icon"
              icon={<FontAwesomeIcon icon={faMessage} className="text-mini-gray" />}
              onClick={() => {
                window.location.href = `sms:${findPhoneByName(hosts, name)}`;
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export const WeddingContact = ({ weddingHosts = [] }: { weddingHosts?: WeddingHost[] }) => {
  if (weddingHosts.length === 0) {
    return;
  }
  return (
    <div className="py-10 flex flex-col items-center bg-neutral text-mini">
      <div className="text-default py-1">연락하기</div>
      <Tabs
        items={[
          { name: '신랑에게', elem: ContactItem(weddingHosts, WeddingHostType.LEFT) },
          { name: '신부에게', elem: ContactItem(weddingHosts, WeddingHostType.RIGHT) },
        ]} 
      />
    </div>
  );
}

import Button from "@/common/button";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { JSX } from "react";
import Tabs from "./common/tab";

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
  description: string;
  phone: string;
}

const ContactItem = (hosts: WeddingHost[], type: WeddingHostType.LEFT | WeddingHostType.RIGHT): JSX.Element => {
  const findNameAndDescriptionByType = (hosts: WeddingHost[], type: string) => {
    const host = hosts.find((host) => host.type === type);

    return {
      name: host?.name ?? '',
      description: host?.description ?? '',
    }
  }
  const findPhoneByName = (hosts: WeddingHost[], name: string) => {
    return hosts.find((host) => host.name === name)?.phone ?? ''
  }
  const nameAndDescriptions = [
    findNameAndDescriptionByType(hosts, type),
    findNameAndDescriptionByType(hosts, `${type}_left`),
    findNameAndDescriptionByType(hosts, `${type}_right`),
  ]

  return (
    <div className="px-5 py-4 bg-neutral-light rounded-md shadow-sm">
      {nameAndDescriptions.map(({ name, description }, idx) => (
        <div className="my-1 flex justify-between" key={idx}>
          <div className="flex gap-x-2">
            <div className="w-20">{description}</div>
            <div className="w-17">{name}</div>
          </div>
          <div className="flex gap-x-1">
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

export const WeddingContact = ({ weddingHosts = [], isEn }: { weddingHosts?: WeddingHost[]; isEn: boolean }) => {
  if (weddingHosts.length === 0) {
    return;
  }
  return (
    <div className="py-10 flex flex-col items-center bg-neutral text-mini">
      <div className="text-default py-1">{isEn ? "Contact" : "연락하기"}</div>
      <Tabs
        items={[
          { name: isEn ? "Groom" : "신랑에게", elem: ContactItem(weddingHosts, WeddingHostType.LEFT) },
          { name: isEn ? "Bride" : "신부에게", elem: ContactItem(weddingHosts, WeddingHostType.RIGHT) },
        ]} 
      />
    </div>
  );
}

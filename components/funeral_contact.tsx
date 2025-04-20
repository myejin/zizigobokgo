import Button from "@/common/button";
import Tabs from "./common/tab";
import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";

interface FuneralContact {
  type: string;
  name: string;
  phone: string;
}

export const FuneralContact = ({ contacts = [] }: { contacts?: FuneralContact[] }) => {
  if (contacts.length === 0) {
    return;
  }
  return (
    <div className="py-10 flex flex-col items-center bg-neutral text-mini">
      <div className="text-default py-1">연락하기</div>
      ...
    </div>
  );
}

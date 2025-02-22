import Button from "@/common/button";
import Tabs from "./common/tab";
import type { JSX } from "react";


interface Account {
  type: 'right' | 'left';
  name: string;
  description: string;
  bank: string;
  number: string;
}

const AccountItem = ({ account }: { account: Account }): JSX.Element => {
  return (
    <div className="my-3 px-5 py-4 bg-white rounded-md text-mini shadow-xl">
      <div className="px-1 pb-3 flex justify-between">
        <div>{account.description}</div>
        <div>{account.name}</div>
      </div>
      <div className="p-3 flex justify-between bg-gray-100 rounded-md">
        <div>
          <div className="text-gray-500 text-[85%]">{account.bank}</div>
          <div>{account.number}</div>
        </div>
        <div className="w-30 flex justify-end">copy</div>
      </div>
    </div>
  )
}

export const Account = () => {
  const accounts: Account[] = [
    {
      type: 'left',
      name: '김OO',
      description: '신랑',
      bank: '국민은행',
      number: '1234-2345666',
    },
    {
      type: 'left',
      name: '박OO',
      description: '신랑 아버지',
      bank: '신한은행',
      number: '12346-4345',
    },
    {
      type: 'right',
      name: '이OO',
      description: '신부',
      bank: '농협은행 ',
      number: '234567',
    },
  ]

  return (
    <div className="py-10 flex flex-col items-center">
      <div className="text-title py-7">마음 전하실 곳</div>
      {/* collapse */}
      <div className="mx-2 p-3 bg-rosegray">
        <AccountItem account={accounts[0]} />
        <AccountItem account={accounts[1]} />
      </div>
        
    </div>
  );
}

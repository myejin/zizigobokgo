import type { JSX } from "react";


interface Account {
  type: string; // 'right' | 'left';
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

export const Account = ({ accounts = [] }: { accounts: Account[]; }) => {
  if (accounts.length === 0) {
    return;
  }
  return (
    <div className="py-15 flex flex-col items-center">
      <div className="text-title pb-7">마음 전하실 곳</div>
      {/* collapse */}
      <div className="mx-2 p-3 bg-rosegray">
        {accounts.map((account, idx) =>  <AccountItem key={idx} account={account} />)}
      </div>
        
    </div>
  );
}

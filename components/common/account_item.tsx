import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, type JSX } from "react";


export interface AccountItemProps {
  name: string;
  description: string;
  bank: string;
  number: string;
}

export const AccountItem = ({ account }: { account: AccountItemProps }): JSX.Element => {
  const [isClipboardCopied, setIsClipboardCopied] = useState(false);

  const copyAccountNumber = (accountNumber: string) => {
    setIsClipboardCopied(true)
    navigator.clipboard.writeText(accountNumber)
    setTimeout(() => {
      setIsClipboardCopied(false)
    }, 200);
  };

  return (
    <div className="my-3 px-5 py-4 bg-white rounded-md">
      <div className="px-1 flex justify-between">
        <div>{account.description}</div>
        <div>{account.name}</div>
      </div>
      {account.number && (
        <>
          <div className="pb-3" />
          <div className="p-3 flex justify-between bg-gray-100 rounded-md">
            <div>
              <div className="text-gray-500 text-[85%]">{account.bank}</div>
              <div>{account.number}</div>
            </div>
            <FontAwesomeIcon 
              icon={faCopy}
              className={`flex justify-end cursor-pointer ${isClipboardCopied ? "text-gray-900" : "text-gray-400"}`}
              onClick={() => copyAccountNumber(account.number.replaceAll('-', ''))}
            />
          </div>
        </>
      )}
    </div>
  )
}

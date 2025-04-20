import { useState, type JSX } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faCopy } from '@fortawesome/free-solid-svg-icons';


interface Account {
  type: string; // 'right' | 'left';
  name: string;
  description: string;
  bank: string;
  number: string;
}

const AccountItem = ({ account }: { account: Account }): JSX.Element => {
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
      <div className="px-1 pb-3 flex justify-between">
        <div>{account.description}</div>
        <div>{account.name}</div>
      </div>
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
    </div>
  )
}

export const Account = ({ accounts = [] }: { accounts: Account[]; }) => {
  const [openStates, setOpenStates] = useState([false, false]);
  
  if (accounts.length === 0) {
    return;
  }

  const leftAccounts = accounts.filter(({ type }) => type === "left");
  const rightAccounts = accounts.filter(({ type }) => type === "right");

  return (
    <div className="pt-15 flex flex-col items-center bg-neutral">
      <div className="text-default">마음 전하실 곳</div>
      <div className="py-7 flex flex-col items-center text-tiny-gray">
        <div>직접 축하가 어려운 분들을 위해</div>
        <div>계좌번호를 기재하였습니다.</div>
        <div>넓은 마음으로 양해 부탁드립니다.</div>
        <br />
        <div>전해주시는 진심은 소중하게 간직하여</div>
        <div>좋은 부부의 모습으로 보답하겠습니다.</div>
      </div>
      <div className="bg-white rounded-md text-mini w-4/5">
        <div className="py-3 px-5 flex justify-between items-center text-mini">
          <div>신랑측에게</div>
          <FontAwesomeIcon 
            icon={openStates[0] ? faChevronUp : faChevronDown}
            className="pl-5 cursor-pointer"
            onClick={() => setOpenStates([!openStates[0], openStates[1]])}
          />
        </div>
        <div className={`collapse-content ${openStates[0] ? 'open' : ''} px-3 bg-rosegray rounded-b-md`}>
          {leftAccounts.map((account, idx) => <AccountItem key={idx} account={account} />)}
        </div>
      </div>
      <div className="mt-2" />
      <div className="bg-white rounded-md text-mini w-4/5">
        <div className="py-3 px-5 flex justify-between items-center text-mini">
          <div>신부측에게</div>
          <FontAwesomeIcon 
            icon={openStates[1] ? faChevronUp : faChevronDown}
            className="pl-5 cursor-pointer"
            onClick={() => setOpenStates([openStates[0], !openStates[1]])}
          />
        </div>
        <div className={`collapse-content ${openStates[1] ? 'open' : ''} px-3 bg-rosegray rounded-b-md`}>
          {rightAccounts.map((account, idx) => <AccountItem key={idx} account={account} />)}
        </div>
      </div>
      <div className="mt-15 border-b w-10" />
    </div>
  );
}

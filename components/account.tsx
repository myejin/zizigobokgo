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
          className="flex justify-end text-gray-400"
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
    <div className="pt-15 pb-10 flex flex-col items-center bg-neutral">
      <div>마음 전하실 곳</div>
      <div className="py-7 flex flex-col items-center text-mini-gray">
        <div>직접 축하를 전하지 못하는 분들을 위해</div>
        <div>계좌번호를 기재하였습니다.</div>
        <div>넓은 마음으로 양해 부탁드립니다.</div>
        <br />
        <div>전해주시는 진심은 소중하게 간직하여</div>
        <div>좋은 부부의 모습으로 보답하겠습니다.</div>
      </div>
      <div className="bg-white rounded-md text-mini w-5/6 max-w-[450px]">
        <div className="p-3 flex justify-between items-center text-mini">
          <div>신랑측에게</div>
          <FontAwesomeIcon 
            icon={openStates[0] ? faChevronUp : faChevronDown}
            className="pl-5 cursor-pointer"
            onClick={() => setOpenStates([!openStates[0], openStates[1]])}
          />
        </div>
        {openStates[0] && (
          <div className="p-3 bg-rosegray rounded-b-md">
            {leftAccounts.map((account, idx) =>  <AccountItem key={idx} account={account} />)}
          </div>
        )}
      </div>
      <div className="mt-2" />
      <div className="bg-white rounded-md text-mini w-5/6 max-w-[450px]">
        <div className="p-3 flex justify-between items-center text-mini">
          <div>신부측에게</div>
          <FontAwesomeIcon 
            icon={openStates[1] ? faChevronUp : faChevronDown}
            className="pl-5 cursor-pointer"
            onClick={() => setOpenStates([openStates[0], !openStates[1]])}
          />
        </div>
        {openStates[1] && (
          <div className="p-3 bg-rosegray rounded-b-md">
          {rightAccounts.map((account, idx) =>  <AccountItem key={idx} account={account} />)}
        </div>
        )}
      </div>
      <div className="mt-10 border-b w-10" />
    </div>
  );
}

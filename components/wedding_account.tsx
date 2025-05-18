import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { AccountItem, type AccountItemProps } from './common/account_item';


interface WeddingAccountProps extends AccountItemProps {
  type: 'right' | 'left';
  name: string;
  description: string;
  bank: string;
  number: string;
}

export const WeddingAccount = ({ accounts = [] }: { accounts: WeddingAccountProps[]; }) => {
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
        <div>직접 오시기 어려운 분들을 위해</div>
        <div>계좌번호를 기재하였습니다.</div>
        <div>전해주시는 진심을 소중히 간직하겠습니다.</div>
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

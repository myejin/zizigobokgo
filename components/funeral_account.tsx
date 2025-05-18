import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { AccountItem, type AccountItemProps } from './common/account_item';


export const FuneralAccount = ({ accounts = [] }: { accounts: AccountItemProps[]; }) => {
  const [openStates, setOpenStates] = useState([false, false]);
  
  if (accounts.length === 0) {
    return;
  }

  return (
    <div className="pt-15 flex flex-col items-center bg-neutral">
      <div className="text-default">마음 전하실 곳</div>
      <div className="py-7 flex flex-col items-center text-tiny-gray">
        <div>직접 오시기 어려운 분들을 위해</div>
        <div>친지/가족들의 연락처와 계좌번호를 기재하였습니다.</div>
        <div>전해주시는 진심을 소중히 간직하겠습니다.</div>
      </div>
      <div className="bg-white rounded-md text-mini w-4/5">
        <div className="py-3 px-5 flex justify-between items-center text-mini">
          <div>자세히 보기</div>
          <FontAwesomeIcon
            icon={openStates[0] ? faChevronUp : faChevronDown}
            className="pl-5 cursor-pointer"
            onClick={() => setOpenStates([!openStates[0], openStates[1]])}
          />
        </div>
        <div className={`collapse-content ${openStates[0] ? 'open' : ''} px-3 bg-gray-700 rounded-b-md`}>
          {accounts.map((account, idx) => <AccountItem key={idx} account={account} />)}
        </div>
      </div>
      <div className="mt-2" />
      <div className="mt-15 border-b w-10" />
    </div>
  );
}

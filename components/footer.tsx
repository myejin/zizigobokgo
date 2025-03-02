import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  const [isClipboardCopied, setIsClipboardCopied] = useState(false);

  const copyUrlToClipboard = () => {
    setIsClipboardCopied(true)
    navigator.clipboard.writeText(window.location.href)
    setTimeout(() => {
      setIsClipboardCopied(false)
    }, 300);
  };

  return (
    <div className="bg-neutral flex flex-col items-center text-mini">
      <div className="flex gap-x-5">
        <button className="flex cursor-pointer">
          <FontAwesomeIcon 
            icon={faLink}
            className="pt-1 px-1"
          />
          <div>카카오 공유하기</div> 
        </button>
        <button className="flex cursor-pointer" onClick={copyUrlToClipboard}>
          <FontAwesomeIcon 
            icon={faLink}
            className={`pt-1 px-1 ${isClipboardCopied && "text-gray-500"}`}
          />
          <div>링크 복사하기</div>
        </button>
      </div>
      <footer className="mt-30 mb-1 text-center text-[8px] text-gray-400">
        COPYRIGHT(C) 2025 김혜진 ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Util } from 'utils';

export const Footer = ({ title = "", imageUrl = "", date }: { title: string; imageUrl?: string; date?: Date; }) => {
  const [isClipboardCopied, setIsClipboardCopied] = useState(false);
  const isKakaoInitialized = () => {
    const { Kakao } = window as any;
    if (Kakao) {
      if (!Kakao.isInitialized()) {
        Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
      }
      return true;
    }
    return false;
  }

  const copyUrlToClipboard = () => {
    setIsClipboardCopied(true)
    navigator.clipboard.writeText(window.location.href)
    setTimeout(() => {
      setIsClipboardCopied(false)
    }, 200);
  };

  const shareKakao = (title: string, description: string, imageUrl: string) => {
    if (!isKakaoInitialized()) {
      return;
    }
    const { Kakao } = window as any;
    const currentURL = window.location.href;
    const link = {
      mobileWebUrl: currentURL,
      webUrl: currentURL,
    };

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl,
          link,
        },
        buttons: [
          {
            title: '초대장 보기',
            link,
          },
        ],
        installTalk: true,
    });
  }

  if (!(title && date && imageUrl)) {
    return;
  }

  return (
    <div className="pt-15 flex flex-col items-center bg-neutral text-mini">
      
      <div className="flex gap-x-5">
        <button 
          className="flex cursor-pointer" 
          onClick={() => {
            if (isKakaoInitialized()) {
              shareKakao(title, Util.getFormattedDate(date), imageUrl);
            }
          }}
        >
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

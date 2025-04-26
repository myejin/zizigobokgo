import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTmapImage } from "externals";
import { useEffect, useState } from "react";
import Button from "./common/button";

interface LocationProps { 
  name: string; 
  address: string; 
  tips?: { type: string; content: string; }[]
}

export const Location = ({ name, address, tips = [] }: LocationProps) => {
  const [mapImage, setMapImage] = useState<string>("");
  const [isClipboardCopied, setIsClipboardCopied] = useState(false);

  if (!(name && address)) {
    return;
  }

  const setTMap = async () => {
    const image = await getTmapImage(126.9768, 37.5665);
    setMapImage(image);
  };
  
  useEffect(() => {
    setTMap();
  }, []);

  const copyAddress = (address: string) => {
    setIsClipboardCopied(true)
    navigator.clipboard.writeText(address)
    setTimeout(() => {
      setIsClipboardCopied(false)
    }, 200);
  };

  return (
    <div className="py-10 flex flex-col items-center bg-neutral">
      <div className="mb-7 text-default">오시는 길</div>
      <div className="text-default pb-1">{name}</div>
      <div className="flex justify-between">
        <div className="text-mini-gray">{address}</div>
        <FontAwesomeIcon 
          icon={faCopy}
          className={`px-2 text-mini cursor-pointer ${isClipboardCopied ? "text-gray-400" : "text-mini-gray"}`}
          onClick={() => copyAddress(address)}
        />
      </div>
      {mapImage && (
        <div className="py-5 relative">
          <img 
            src="/tmap_logo.webp" 
            alt="tmap"
            className="absolute m-2 w-5 h-5"
          />
          <img src={mapImage} alt="Map" />
        </div>
      )}
      <div className="mb-5 flex items-center text-mini">
        <Button
          icon={<img src="/kakaomap_logo.webp" alt="kakao" />}
          text={"카카오맵"}
          className="m-1 w-30"
          onClick={() => window.open(`https://map.kakao.com/link/search/${encodeURI(address)}`, '_blank', 'noopener,noreferrer')}
        />
        <Button
          icon={<img src="/navermap_logo.webp" alt="naver" />}
          text={"네이버지도"}
          className="m-1 w-30"
          onClick={() => window.open(`https://map.naver.com/p/search/${encodeURI(address)}`, '_blank', 'noopener,noreferrer')}
        />
      </div>
      {tips.length > 0 && (
        <div className="w-3/4 max-w-[450px] my-3 text-mini">
          {tips.map((tip, tipIdx) => (
            <div key={tipIdx}>
              <div className="text-rosegray pb-2">{tip.type}</div>
              <div>
                {tip.content.split("\n").map((line, idx) => (
                  <div key={`line_${idx}`}>{line}</div>
                ))
                }
              </div>
              {tipIdx !== tips.length - 1 && (<div className="border-b my-5 text-rosegray" />)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

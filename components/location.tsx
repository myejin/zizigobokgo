import Button from "./common/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { getTmapImage } from "externals";

export const Location = ({ name, address, tips = [] }: { name: string; address: string; tips?: any[] }) => {
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

  const openTmapApp = (address: string) => {
    const tmapUrl = `tmap://search?name=${encodeURIComponent(address)}`;
    window.location.href = tmapUrl;
  };

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
        <div className="p-5">
          <img 
            src={mapImage} 
            alt="Map" 
            className="w-full-or-max"
            onClick={() => openTmapApp(address)}
          />
        </div>
      )}
      <div className="mb-5 flex items-center text-mini gap-x-2">
        <Button
          text={"<> 카카오"}
          className="w-30"
          onClick={() => window.open(`https://map.kakao.com/link/search/${encodeURI(address)}`, '_blank', 'noopener,noreferrer')}
        />
        <Button
          text={"<> 네이버"}
          className="w-30"
          onClick={() => window.open(`https://map.naver.com/p/search/${encodeURI(address)}`, '_blank', 'noopener,noreferrer')}
        />
      </div>
      {tips.length === 0 && (
        <div className="w-3/4 max-w-[450px] my-3 text-mini">
          <div className="text-rosegray pb-2">자차</div>
          <div>네비게이션: '전쟁기념관 북문' 으로 검색</div>
          <div className="border-b my-5 text-rosegray"></div>
          <div className="text-rosegray pb-2">지하철</div>
          <div>- 4호선: 삼각지역 1번 출구 (도보 5분)</div>
          <div>- 6호선: 삼각지역 12번 출구 (도보 3분)</div>
          <div className="border-b my-5 text-rosegray"></div>
          <div className="text-rosegray pb-2">버스</div>
          <div>- 전쟁기념관 하차</div>
          <div>: 용산03, 110A, 421, 100, 150, 152, 500, 501, 502, 506, 507, 752</div>
          <div className="border-b my-5 text-rosegray"></div>
          <div className="text-rosegray pb-2">주차</div>
          <div>전쟁기념관 내 주차장 이용 가능 (2시간 무료주차)</div>
          <div>1층 로비 내 주차권 사전등록 필요</div>
        </div>
      )}
    </div>
  );
}

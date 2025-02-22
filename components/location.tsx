import { Map, MapMarker } from "react-kakao-maps-sdk";
import Button from "./common/button";

export const Location = () => {
  return (
    <div className="py-10 flex flex-col items-center">
      <div className="my-7 text-title">Location</div>
      <div className="text-default">서울AAA컨벤션 우라타타홀</div>
      <div className="text-mini text-gray-400">경기도 용인시 포은대로12345</div>
      <div className="my-5 flex flex-col items-center">
        {/* TODO: kakao map https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro */}
        <div className="my-5 w-80 h-80 bg-gray-100">
        </div>
        <div>
          <Button
            text={"<> TMAP"}
            onClick={() => console.log('hello')} // TODO
          />
          <Button
            text={"<> 네이버"}
            onClick={() => console.log('hello')} // TODO
          />
        </div>
      </div>
      <div className="w-3/4 my-5 text-mini">
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
    </div>
  );
}

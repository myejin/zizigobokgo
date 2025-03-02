import React from "react";

export const ExtraInfo = ({ infos = [] }: { infos: { name?: string; message?: string; }[] }) => {
  if (infos.length === 0) {
    return;
  }
  return (
    <div className="pt-10 pb-15 flex flex-col items-center bg-neutral">
      <div className="mb-10 border-b w-10" />
      <div className="text-title">INFORMATION</div>
      <div className="mb-10 text-mini-gray">저희 웨딩에 대한 사전 안내를 드립니다.</div>
      <div className="py-7 px-10 bg-white rounded-md border border-gray-300 text-center text-mini text-gray-700">
        {infos.map(({ name, message }, idx) => {
          if (!message) {
            return;
          }
          return (
            <React.Fragment key={idx}>
              {name && <div key={`name_${idx}`} className="text-default pb-5">{name}</div>}
              {message.split("\n").map((line, lineIdx) => {
                if (!line) {
                  return (<br key={`line_${lineIdx}`} />);
                }
                return (<div key={`line_${lineIdx}`}>{line}</div>)
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

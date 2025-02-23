import React from "react";

export const Info = ({ infos = [] }: { infos: { name?: string; message?: string; }[] }) => {
  if (infos.length === 0) {
    return;
  }
  return (
    <div className="pt-17 pb-20 flex flex-col items-center bg-neutral-100">
      <div className="text-title">INFORMATION</div>
      <div className="mb-10 text-mini text-rosegray opacity-80">저희 웨딩에 대한 사전 안내를 드립니다.</div>
      <div className="py-7 px-10 bg-white rounded-md text-center text-gray-800">
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
                return (<div key={`line_${lineIdx}`} className="text-mini">{line}</div>)
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

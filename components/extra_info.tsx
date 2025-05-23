import React from "react";

export const ExtraInfo = ({ infos = [], isEn }: { isEn: boolean; infos: { title?: string; message?: string; }[] }) => {
  if (infos.length === 0) {
    return;
  }
  return (
    <div className="pt-15 flex flex-col items-center bg-neutral">
      <div className="mb-15 border-b w-10" />
      <div className="mb-7 text-default">{isEn ? "Information" : "사전 안내"}</div>
      <div className="mx-2 py-7 px-8 bg-white rounded-md border border-gray-300 text-center text-mini text-gray-700">
        {infos.map(({ title, message }, idx) => {
          if (!message) {
            return;
          }
          return (
            <React.Fragment key={idx}>
              {title && <div key={`name_${idx}`} className="text-default pb-5">{title}</div>}
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
      <div className="mt-15 border-b w-10" />
    </div>
  );
}
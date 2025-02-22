export const Info = () => {
  const information = {
    title: "신부대기실 및 연회장",
    description: "신부대기실은 4층에 위치하고 있으며\n연회장은 3층에 위치하고 있습니다.\n.\n여유있게 도착하셔서\n신부와 함께 예쁜 추억을 남겨주세요 :)",
  }
  return (
    <div className="my-5 py-15 flex flex-col items-center bg-neutral-100">
      <div className="text-title">INFORMATION</div>
      <div className="text-mini text-rosegray mb-7 ">저희 웨딩에 대한 사전 안내를 드립니다.</div>
      <div className="mt-5 py-7 px-10 bg-white rounded-md text-center text-gray-800">
        <div className="text-default pb-3">{information.title}</div>
        {information.description.split("\n").map((line, idx) => {
          return (<div key={idx} className="text-mini">{line}</div>);
        })}
      </div>
    </div>
  );
}

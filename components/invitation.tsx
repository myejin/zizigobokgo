export const Invitation = () => {
  const texts = [
    '예쁜 예감이 들었다.\n우리는 언제나 손을 잡고 있게 될 것이다.\n-연인,이이체-',
    '두 손 꼭 잡고 하나 되는 날\n함께 축복해주시면 큰 기쁨으로 간직하겠습니다',
  ]
  return (
    <div className="py-17">
      <div className="pb-10 flex flex-col items-center">
        <img
          src="./flower.png"
          alt="invitation"
          className="w-[5%] py-2 max-w-3xl h-auto"
        />
        <div className="text-default">IINVITATION</div>
      </div>
      {texts.map((text, idx) => {
        return (
          <div className="py-5 flex flex-col items-center" key={idx}>
            {text.split('\n').map((line, lineIdx) => <div key={lineIdx}>{line}</div>)}
          </div>
        );
      })}
    </div>
  );
}

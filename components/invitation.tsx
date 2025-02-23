export const Invitation = ({ message = "" }: { message?: string; }) => {
  if (!message) {
    return;
  }
  return (
    <div className="pt-17 pb-20">
      <div className="pb-10 flex flex-col items-center">
        <img
          src="./flower.png"
          alt="invitation"
          className="w-[7%] pb-2 max-w-3xl h-auto"
        />
        <div className="text-default">IINVITATION</div>
      </div>
      {message.split("\n").map((text, idx) => {
          if (!text) {
            return <br key={idx} />
          }
          return <div key={idx} className="pb-1 flex flex-col items-center">{text}</div>
        })}
    </div>
  );
}

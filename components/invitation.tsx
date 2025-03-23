export const Invitation = ({ message = "", iframeTag = "" }: { message?: string; iframeTag?: string; }) => {
  const isValidIframeTag = (iframeTag: string) => {
    return iframeTag.startsWith("<iframe") && iframeTag.includes('src="https://www.youtube.com/embed');
  };
  
  if (!message) {
    return;
  }
  return (
    <div className="py-17 bg-neutral text-mini">
      <div className="pb-10 flex flex-col items-center">
        <img
          src="./flower_icon.png"
          alt="invitation"
          className="w-8 pb-2 max-w-3xl h-auto"
        />
        <div>INVITATION</div>
      </div>
      {isValidIframeTag(iframeTag) && (
        <div 
          className="flex justify-center" 
          dangerouslySetInnerHTML={{ __html: iframeTag }}
        />
      )}
      {!isValidIframeTag(iframeTag) && message.split("\n").map((text, idx) => {
          if (!text) {
            return <br key={idx} />
          }
          return <div key={idx} className="pb-1 flex flex-col items-center">{text}</div>
        })}
    </div>
  );
}

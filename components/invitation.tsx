export const Invitation = ({ message = "", videoUrl = "" }: { message?: string; videoUrl?: string; }) => {
  if (!message) {
    return;
  }
  return (
    <div className="py-17 flex flex-col items-center bg-neutral text-mini">
      <div className="pb-10 flex flex-col items-center">
        <img
          src="/flower_icon.png"
          alt="invitation"
          className="w-8 pb-2 max-w-3xl h-auto"
        />
        <div>INVITATION</div>
      </div>
      {videoUrl && (
        <div className="mx-5">
          <video controls>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
      {!videoUrl && message.split("\n").map((text, idx) => {
          if (!text) {
            return <br key={idx} />
          }
          return <div key={idx} className="pb-1 flex flex-col items-center">{text}</div>
        })}
    </div>
  );
}

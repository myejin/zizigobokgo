export const Invitation = ({
  altMessage = "",
  videoUrl = "",
  commonVideoUrl = "",
}: { altMessage?: string; videoUrl?: string; commonVideoUrl?: string; }) => {
  if (!altMessage) {
    return;
  }
  return (
    <div className="pt-15 pb-5 flex flex-col items-center bg-neutral text-mini">
      <div className="pb-10 flex flex-col items-center">
        <img
          src="/flower_icon.png"
          alt="invitation"
          className="w-8 pb-2 max-w-3xl h-auto"
        />
        <div>INVITATION</div>
      </div>
      {commonVideoUrl && (
        <iframe
          className="w-full aspect-[16/9] mb-7"
          src={commonVideoUrl}
          allow="clipboard-write; encrypted-media; picture-in-picture"
        />
      )}
      {videoUrl ? (
        <iframe
          className="w-full aspect-[16/9]"
          src={videoUrl}
          allow="clipboard-write; encrypted-media; picture-in-picture"
        />
      ): (
        <>
          {altMessage.split("\n").map((text, idx) => {
            if (!text) {
              return <br key={idx} />
            }
            return <div key={idx} className="pb-1 flex flex-col items-center">{text}</div>
          })}
        </>
      )}
    </div>
  );
}

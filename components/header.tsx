

export const Header = ({ 
  title = "", 
}: { title?: string; }) => {
  if (title) {
    return;
  }
  return (
    <div className="mt-15 mb-5 text-center">
      {title.split("\n").map((line, idx) => (<div key={idx}>{line}</div>))}
    </div>
  );
}

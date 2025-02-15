interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

const Button = ({ text, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`m-2 px-7 py-1 rounded-md bg-rose-100 hover:bg-rose-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
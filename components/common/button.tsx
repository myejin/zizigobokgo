interface ButtonProps {
  type?: 'submit' | 'mini'
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ type = 'submit', text, onClick, className = "" }: ButtonProps) => {
  if (type === 'mini') {
    return (
      <button
        onClick={onClick}
        className={`px-2 rounded-sm bg-white hover:bg-gray-50 ${className}`}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`m-2 px-7 py-2 rounded-md text-white bg-rosegray hover:bg-rose-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
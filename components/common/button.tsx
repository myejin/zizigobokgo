import type { JSX } from "react";

interface ButtonProps {
  type?: 'submit' | 'icon'
  text?: string;
  icon?: JSX.Element;
  onClick: () => void;
  className?: string;
}

const Button = ({ type = 'submit', text = "", icon, onClick, className = "" }: ButtonProps) => {
  if (type === 'icon') {
    return (
      <button
        onClick={onClick}
        className={`px-1 rounded-sm hover:opacity-70 ${className}`}
      >
        {icon}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`p-2 flex justify-center rounded-md border border-neutral-300 hover:bg-neutral-200 ${className}`}
    >
      {icon && <div className="w-5 h-5 mr-1">{icon}</div>}
      <div>{text}</div>
    </button>
  );
};

export default Button;

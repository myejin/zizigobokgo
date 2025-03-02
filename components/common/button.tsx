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
      className={`m-1 p-2 rounded-md border border-neutral-300 hover:bg-neutral-200 ${className}`}
    >
      {icon && icon}
      {icon && text && <div className="pr-1" />}
      {text}
    </button>
  );
};

export default Button;
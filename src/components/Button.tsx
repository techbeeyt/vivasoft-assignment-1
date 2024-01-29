import React from "react";

export enum BtnVariants {
  Default,
  Outline,
  OnlyIcon,
}

interface ButtonProps {
  text: string;
  className: string;
  onClick?: () => void; // Optional onClick function
  disabled?: boolean; // Optional disabled state
  variant?: BtnVariants;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  disabled,
  variant,
}) => {
  return (
    <button
      className={`${className} px-6 py-2 rounded ${
        variant === BtnVariants.Outline
          ? "bg-transparent text-sky-600"
          : "bg-sky-600 text-white "
      } font-semibold outline outline-2 outline-sky-600 `}
    >
      {text}
    </button>
  );
};

export default Button;

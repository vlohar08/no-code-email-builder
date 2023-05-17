import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

function Button({
  type = "button",
  children,
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) {
  return (
    <div className="button-wrapper">
      <button type={type} {...rest}>
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    </div>
  );
}

export default Button;

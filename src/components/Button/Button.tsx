import React, { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  primary?: boolean;
  backgroundColor?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
} & React.HTMLAttributes<HTMLButtonElement>;

export function Button({
  label,
  backgroundColor = "#9292CC",
  primary = false,
  size = "medium",
  children,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    medium: "px-5 py-2 text-sm",
    large: "px-5 py-3 text-md",
  };

  const tailwindClasses = `rounded-md font-semibold text-white shadow-sm flex items-center justify-center focus:outline-none focus:ring-opacity-20 focus:ring-red-900 hover:bg-${backgroundColor}-50 active:bg-${backgroundColor}-50 ${sizeClasses[size]}`;

  return (
    <button
      type={type}
      style={{ backgroundColor }}
      onClick={onClick}
      {...rest}
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        tailwindClasses,
      ].join(" ")}
    >
      {label} {children}
    </button>
  );
}

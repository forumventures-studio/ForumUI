import React, { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  primary?: boolean;
  backgroundColor?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

export function Button({
  label,
  backgroundColor = "#8EBFAE",
  primary = false,
  size = "medium",
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    medium: "px-3.5 py-2.5 text-sm",
    large: "px-5 py-3 text-md",
  };

  // Define the default Tailwind CSS classes for the button
  const tailwindClasses = `rounded-md font-semibold text-white shadow-sm flex items-center justify-center focus:outline-none focus:ring-opacity-20 focus:ring-red-900 hover:bg-${backgroundColor}-50 active:bg-${backgroundColor}-50 ${sizeClasses[size]}`;

  return (
    <button
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

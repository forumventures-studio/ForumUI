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
  primary = true,
  size = "medium",
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const bgColor = primary ? backgroundColor : "#D3D3D3"; // Default secondary color
  const textColor = primary ? "text-white" : "text-black"; // Example: white text for primary, black for secondary

  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    medium: "px-3.5 py-2.5 text-sm",
    large: "px-5 py-3 text-md",
  };

  const tailwindClasses = `rounded-md font-semibold ${textColor} shadow-sm flex items-center justify-center focus:outline-none focus:ring-opacity-20 focus:ring-red-900 hover:bg-${bgColor}-50 active:bg-${bgColor}-50 ${sizeClasses[size]}`;

  return (
    <button
      style={{ backgroundColor: bgColor }} // Using bgColor variable
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

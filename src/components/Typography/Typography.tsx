import React from "react";
import classNames from "classnames";

export type TypographyProps = {
  primary?: boolean;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  colour?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
  font?: "primary" | "secondary";
  fontStyling?: "bold" | "italic" | "normal";
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Typography = ({
  primary = true,
  variant = "p",
  colour = "primary",
  font = "primary",
  fontStyling = "normal",
  className,
  children,
  ...props
}: TypographyProps) => {
  // Dynamic classes for color and font style using Tailwind
  const colorClasses = {
    primary: "text-black dark:text-white",
    secondary: "text-gray-500 dark:text-gray-400",
    tertiary: "text-red-500",
    quaternary: "text-green-500",
    quinary: "text-blue-500",
  };

  const fontClasses = {
    primary: "font-sans",
    secondary: "font-serif",
  };

  const fontStyleClasses = {
    bold: "font-bold",
    italic: "italic",
    normal: "font-normal",
  };

  // Size classes defined directly with Tailwind
  const sizeClasses = {
    h1: "text-6xl",
    h2: "text-4xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
    p: "text-sm",
    span: "text-xs",
  };

  // Combine all classes
  const classes = classNames(
    "dark:text-white", // Base classes
    colorClasses[colour],
    fontClasses[font],
    fontStyleClasses[fontStyling],
    sizeClasses[variant],
    className
  );

  // Dynamically choose the HTML element type based on `variant`
  const Tag = variant;

  return (
    <>
      <Tag className={classes} {...props}>
        {children}
      </Tag>
    </>
  );
};

export default Typography;

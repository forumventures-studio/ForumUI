import React from "react";

export type DotIndicatorProps = {
  primary?: boolean;
  className?: string;
  color?: string; // Tailwind class name or hex color
} & React.HTMLAttributes<HTMLSpanElement>;

export function DotIndicator({
  primary = true,
  color = "#486564",
  className,
  ...rest
}: DotIndicatorProps) {
  const mode = primary
    ? "storybook-dotIndicator--primary"
    : "storybook-dotIndicator--secondary";

  const adjustedColor = color.startsWith("#")
    ? { backgroundColor: color } // Directly use style for hex colors
    : `bg-${color}`; // Use Tailwind class if it's a valid Tailwind color class

  const tailwindClasses = `inline-block mx-2 h-3 w-3 rounded-full mt-2`;

  const combinedClassName = [
    "storybook-dotIndicator",
    mode,
    tailwindClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={combinedClassName}
      style={color.startsWith("#") ? adjustedColor : {}}
      {...rest}
    ></span>
  );
}

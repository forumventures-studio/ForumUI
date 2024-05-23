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

  // Ensure the style object is always a valid CSSProperties object or undefined
  const style = color.startsWith("#") ? { backgroundColor: color } : undefined;

  // Adjust how you apply Tailwind classes: only add bg-* if color does not start with '#'
  const backgroundClass = color.startsWith("#") ? "" : `bg-${color}`;

  const tailwindClasses = `inline-block mx-2 h-3 w-3 rounded-full mt-2 ${backgroundClass}`;

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
      style={style} // Only pass an object or undefined
      {...rest}
    ></span>
  );
}

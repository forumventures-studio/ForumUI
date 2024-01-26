import React, { ReactNode } from "react";

export type StackedHeaderProps = {
  title: string;
  primary?: boolean;
  description?: string;
  children?: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function StackedHeader({
  className,
  primary = true,
  children,
  title,
  description,
  ...rest
}: StackedHeaderProps) {
  const mode = primary
    ? "storybook-stackedHeader--primary"
    : "storybook-stackedHeader--secondary";

  const tailwindClasses =
    "bg-white border-b border-gray-100 shadow-sm pl-5 pt-5 pb-5 pr-5 w-full";

  return (
    <div
      {...rest}
      className={[
        "storybook-stackedHeader",
        tailwindClasses,
        className,
        mode,
      ].join(" ")}
    >
      <div className="flex flex-row">
        <span className="text-lg font-bold">{title}</span>
      </div>
      <div className="flex flex-row">
        <span className="text-sm text-[#9CA3AF]">{description}</span>
      </div>
      {children}
    </div>
  );
}

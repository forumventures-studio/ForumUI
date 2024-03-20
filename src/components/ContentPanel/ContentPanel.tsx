import React, { ReactNode } from "react";

export type PanelProps = {
  children?: ReactNode;
  primary?: boolean;
  className?: string;
  title?: string;
  titleIcon?: ReactNode;
  rightIcon?: ReactNode;
  subTitleContent?: ReactNode;
  panelDescription?: string;
  subtitle?: string;
  mainText?: string | number;
  subText?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

export function ContentPanel({
  primary = true,
  children,
  title,
  titleIcon,
  rightIcon,
  subTitleContent,
  panelDescription,
  ...rest
}: PanelProps) {
  const mode = primary
    ? "storybook-contentPanel--primary"
    : "storybook-contentPanel--secondary";


  const tailwindClasses = "flex-1 overflow-hidden rounded-lg bg-white shadow";

  return (
    <div
      {...rest}
      className={["storybook-contentPanel", mode, tailwindClasses].join("")}
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="flex flex-row justify-between">
          {/* Left side */}
          <div className="flex items-center">
            {titleIcon}
            {/* Add margin-right for spacing */}
            <span className="font-bold mr-5">{title}</span>
          </div>
          {/* Right side */}
          <div className="flex items-center">
            <span className="inline-flex items-center mr-2 rounded-full bg-white px-1.5 py-0.5 text-xs font-medium text-swyft-green-500 ring-1 ring-inset ring-swyft-green-500">
              {panelDescription}
            </span>
            {rightIcon}
          </div>
        </div>
        {/* Subtitle Content Area */}
        <div className="flex flex-row">{subTitleContent}</div>
        {/* Main Content Area */}
        {children}
      </div>
    </div>
  );
}

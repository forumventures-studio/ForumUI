import React, { ReactNode } from "react";
import classNames from "classnames";

export type PanelProps = {
  children?: ReactNode;
  className?: string;
  title?: string;
  titleIcon?: ReactNode;
  subtitle?: string;
  mainText?: string | number;
  subText?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

export function StatisticPanel({
  className,
  title,
  titleIcon,
  mainText,
  subText,
  ...rest
}: PanelProps) {
  // Define the default Tailwind CSS classes for the panel
  const tailwindClasses = "overflow-hidden rounded-lg bg-white shadow";

  return (
    <div {...rest} className={classNames(tailwindClasses, className)}>
      <div className="px-4 py-5 sm:p-6">
        <div className="flex flex-row">
          {titleIcon && (
            <div
              className="stroke-1 text-swyft-secondary-1"
              style={{ transform: "scale(0.75)" }}
            >
              {titleIcon}
            </div>
          )}
          <span className="text-gray-500">{title}</span>
        </div>
        {mainText !== undefined && mainText !== null && (
          <div className="flex flex-row mt-3">
            <span className="text-3xl font-bold">{mainText}</span>
          </div>
        )}
        {subText !== undefined && subText !== null && (
          <div className="flex flex-row mt-3">
            <span className="text-sm text-gray-400">{subText}</span>
          </div>
        )}
      </div>
    </div>
  );
}

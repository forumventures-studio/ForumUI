import React from "react";

export type ProgressBarProps = {
  totalValue: number;
  currentValue: number;
  progressColor?: string;
  primary?: boolean;
};

export function ProgressBar({
  totalValue,
  currentValue,
  primary = true,
  progressColor = "#8EBFAE",
}: ProgressBarProps) {
  const mode = primary
    ? "storybook-progressBar--primary"
    : "storybook-progressBar--secondary";

  const tailwindClasses = "h-2 w-full";

  const progress = (currentValue / totalValue) * 100;

  return (
    <div
      className={[
        "storybook-progressBar",
        "w-full",
        tailwindClasses,
        mode,
      ].join(" ")}
    >
      <div className="h-2 bg-gray-200">
        <div
          className={`h-2 bg-${progressColor}`}
          style={{
            width: `${progress}%`,
            transition: "width 1s ease-in-out",
            backgroundColor: "red",
          }}
        ></div>
      </div>
    </div>
  );
}

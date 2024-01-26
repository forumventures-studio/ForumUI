import React from "react";

export type ProgressBarProps = {
  totalValue: number;
  currentValue: number;
  primary?: boolean;
};

export function ProgressBar({
  totalValue,
  currentValue,
  primary = true,
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
          className="h-2 bg-red-900"
          style={{
            width: `${progress}%`,
            transition: "width 1s ease-in-out",
            backgroundColor: "red",
          }}
        ></div>
      </div>
      <h1>Progress: {progress.toFixed(2)}%</h1>
    </div>
  );
}

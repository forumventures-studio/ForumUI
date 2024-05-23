import { useState } from "react";

export type TabType = {
  name: string;
  icon?: React.ElementType;
  current: boolean;
};

export type TabsProps = {
  primary?: boolean;
  tabs?: TabType[];
  tabColour?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  onTabChange?: (tab: TabType) => void; // Callback function prop
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({
  primary = true,
  tabs = [],
  size = "medium",
  onTabChange,
  className,
  ...rest
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    tabs?.find((tab) => tab.current)?.name ?? tabs[0]?.name
  );

  const mode = primary
    ? "storybook-tabs--primary"
    : "storybook-tabs--secondary";

  const tailwindClasses = `block w-full rounded-md border-gray-300 focus:border-creditpulse-green-500 focus:ring-creditpulse-green-500`;

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab.name);
    if (onTabChange) {
      onTabChange(tab); // Invoke the callback with the selected tab
    }
  };

  return (
    <div className={`${className}`}>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          {...rest}
          id="tabs"
          name="tabs"
          className={[
            "storybook-tabs",
            `storybook-tabs--${size}`,
            mode,
            tailwindClasses,
          ].join("")}
          defaultValue={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {tabs?.map((tab) => <option key={tab.name}>{tab.name}</option>)}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs?.map((tab) => (
              <a
                key={tab.name}
                className={classNames(
                  tab.name === activeTab
                    ? `border-creditpulse-green-700 text-creditpulse-green-700 text-lg font-extrabold`
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
                )}
                onClick={() => handleTabClick(tab)}
                aria-current={tab.name === activeTab ? "page" : undefined}
              >
                {tab.icon && (
                  <tab.icon
                    className={classNames(
                      tab.name === activeTab
                        ? `text-creditpulse-green-700`
                        : "text-gray-400 group-hover:text-gray-500",
                      "-ml-0.5 mr-2 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                )}
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

import React, { ReactNode, useState } from "react";
import classNames from "classnames";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export type MenuItem = {
  name: string;
  icon?: ReactNode; // Assuming icon is a React component
};

export type DrowndownMenuProps = {
  buttonView?: ReactNode;
  primary?: boolean;
  className?: string;
  menuItems?: MenuItem[];
  styleColor?: string;
  orientation?: "left" | "right";
  onMenuChoiceChange?: (choice: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export function DropdownMenu({
  primary = true,
  buttonView,
  styleColor = "red-900",
  orientation = "right",
  menuItems = [],
  onMenuChoiceChange,
}: DrowndownMenuProps) {
  const mode = primary
    ? "storybook-dropdownMenu--primary"
    : "storybook-dropdownMenu--secondary";

  // Define the default Tailwind CSS classes for the button
  const [menuChoice, setMenuChoice] = useState(menuItems[0]?.name);

  const handleMenuItemClick = (item: string) => {
    setMenuChoice(item);
    if (onMenuChoiceChange) {
      onMenuChoiceChange(item);
      // Remove if desired
      if (process.env.NODE_ENV === "development") {
        console.log(`Menu choice changed to ${menuChoice}`);
      }
    }
  };

  const tailwindClasses = `relative inline-block text-left`;

  return (
    <Menu
      as="div"
      className={["storybook-dropdownMenu", tailwindClasses, mode].join(" ")}
    >
      <div>
        <Menu.Button>{buttonView}</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute ${orientation}-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">
            {menuItems.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      "px-4 py-2 text-sm flex items-center",
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      `hover:text-${styleColor}`
                    )}
                    onClick={() => handleMenuItemClick(item.name)}
                  >
                    {primary && item.icon && (
                      <span className="mr-2">{item.icon}</span>
                    )}
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

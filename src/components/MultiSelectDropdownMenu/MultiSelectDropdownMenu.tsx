import React, { Fragment, useState } from "react";
import classNames from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "@untitled-ui/icons-react";

export type MenuItem = {
  name: string;
  icon?: React.ReactNode;
  value: string | number; // Ensure each menu item has a value
};

export type DropdownMenuProps = {
  buttonView?: React.ReactNode;
  primary?: boolean;
  className?: string;
  menuItems?: MenuItem[];
  styleColor?: string;
  placeHolderText?: string;
  orientation?: "left" | "right";
  onMenuChoiceChange?: (choices: Array<string | number>) => void;
  defaultValues?: Array<string | number>;
} & React.HTMLAttributes<HTMLDivElement>;

export function MultiSelectDropdownMenu({
  primary = true,
  styleColor = "creditpulse-green-500",
  orientation = "right",
  menuItems = [],
  onMenuChoiceChange,
  placeHolderText = "Select options",
  defaultValues = [],
}: DropdownMenuProps) {
  const [selectedChoices, setSelectedChoices] = useState<
    { name: string; value: string | number }[]
  >(() => {
    return menuItems
      .filter((item) => defaultValues.includes(item.value))
      .map((item) => ({
        name: item.name,
        value: item.value,
      }));
  });

  const handleMenuItemClick = (menuItem: MenuItem) => {
    const currentIndex = selectedChoices.findIndex(
      (choice) => choice.value === menuItem.value
    );
    const newSelectedChoices = [...selectedChoices];

    if (currentIndex === -1) {
      newSelectedChoices.push({ name: menuItem.name, value: menuItem.value });
    } else {
      newSelectedChoices.splice(currentIndex, 1);
    }

    setSelectedChoices(newSelectedChoices);

    if (onMenuChoiceChange) {
      onMenuChoiceChange(newSelectedChoices.map((choice) => choice.value));
      if (process.env.NODE_ENV === "development") {
        console.log(
          `Menu choices updated: ${newSelectedChoices.map((choice) => choice.value).join(", ")}`
        );
      }
    }
  };

  const tailwindClasses = `relative inline-block text-left w-full`;
  const menuTailwindClasses = `${orientation}-0 absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-100 overflow-y-auto max-h-60 scrollbar-visible`;
  const menuItemTailwindClasses = `hover:text-[${styleColor}] `;

  return (
    <Menu
      as="div"
      className={classNames(
        "storybook-dropdownMenu",
        tailwindClasses,
        primary
          ? "storybook-dropdownMenu--primary"
          : "storybook-dropdownMenu--secondary"
      )}
    >
      <div>
        <Menu.Button className="w-full text-left">
          <div className="flex justify-between items-center w-full ">
            {selectedChoices.length > 0 ? (
              <div className="flex flex-wrap gap-2 overflow-x-auto max-w-full">
                {selectedChoices.map((choice, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600"
                  >
                    {choice.name}
                  </span>
                ))}
              </div>
            ) : (
              placeHolderText
            )}
            <span className="ml-2">
              <ChevronDown className="text-gray-300" />
            </span>
          </div>
        </Menu.Button>
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
        <Menu.Items className={menuTailwindClasses}>
          <div className="py-1">
            {menuItems.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      "px-4 py-2 text-sm flex items-center",
                      active
                        ? `bg-gray-100 text-gray-900 hover:text-${styleColor}`
                        : "text-gray-700",
                      menuItemTailwindClasses,
                      {
                        "bg-creditpulse-green-200": selectedChoices.some(
                          (choice) => choice.value === item.value
                        ),
                      }
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(item);
                    }}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {selectedChoices.some(
                      (choice) => choice.value === item.value
                    ) && (
                      <Check className="w-4 h-4 text-creditpulse-green-800" />
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

import type { Meta, StoryObj } from "@storybook/react";

import { MultiSelectDropdownMenu } from "./MultiSelectDropdownMenu";
import { CreditCardCheck, LineChartDown05 } from "@untitled-ui/icons-react";

const handleMenuChoiceChange = () => (choices: string[]) => {
  console.log("Selected choices:", choices);
};
const meta = {
  title: "Credit Pulse/Functional Components/MultiSelectDropdownMenu",
  component: MultiSelectDropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "This variant of the dropdown includes icons alongside the options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MultiSelectDropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Cash Flow",
    primary: true,
    placeHolderText: "Select options",
    className: "pl-10 ml-10 z-1000",
    defaultValues: ["Option 1", "Option 2"],
    menuItems: [
      {
        name: "Option 1",
        value: "Option 1",
      },
      {
        name: "Option 2",
        value: "Option 2",
      },
      {
        name: "Option 3",
        value: "Option 3",
      },
      {
        name: "Option 4",
        value: "Option 4",
      },
      {
        name: "Option 5",
        value: "Option 5",
      },
    ],
    onMenuChoiceChange: handleMenuChoiceChange(),
  },
};

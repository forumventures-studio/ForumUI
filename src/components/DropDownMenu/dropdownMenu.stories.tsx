import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from "./DropdownMenu";
import { DotsVertical } from "@untitled-ui/icons-react";
import { CreditCardCheck, LineChartDown05 } from "@untitled-ui/icons-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Functional Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    styleColor: { control: "color" },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    buttonView: <DotsVertical />,
    menuItems: [
      { name: "Option1", icon: <CreditCardCheck /> },
      { name: "Option2", icon: <LineChartDown05 /> },
    ],
    styleColor: "#FFFFFF",
    orientation: "right",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    buttonView: <DotsVertical />,
    menuItems: [
      { name: "Option1", icon: <CreditCardCheck /> },
      { name: "Option2", icon: <LineChartDown05 /> },
    ],
    styleColor: "#FFFFFF",
    orientation: "right",
  },
};

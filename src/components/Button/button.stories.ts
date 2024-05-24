import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Functional Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    primary: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Button
export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Button",
  },
};

// Secondary Button
export const Secondary: Story = {
  args: {
    primary: false,
    label: "Secondary Button",
  },
};

// Large Size Button
export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

// Small Size Button
export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
  },
};

// Custom Background Color Button
export const CustomColor: Story = {
  args: {
    backgroundColor: "#FF6347", // Tomato color for illustration
    label: "Custom Color",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Functional Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    primary: {
      control: { type: "boolean" },
      description: "Selects primary color theme",
      defaultValue: true,
    },
    variant: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      },
      description: "Select the type of typography element",
    },
    colour: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "quaternary", "quinary"],
      },
      description: "Choose the color for the typography",
    },
    font: {
      control: { type: "select", options: ["primary", "secondary"] },
      description: "Select font family",
    },
    fontStyling: {
      control: { type: "select", options: ["bold", "italic", "normal"] },
      description: "Select the font styling",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    variant: "h1",
    colour: "primary",
    font: "primary",
    fontStyling: "bold",
    children: "Primary Bold H1",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    variant: "h2",
    colour: "secondary",
    font: "secondary",
    fontStyling: "italic",
    children: "Secondary Italic H2",
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    primary: true,
    variant: "p",
    colour: "primary",
    font: "primary",
    fontStyling: "normal",
    children: "This is a dynamic playground.",
  },
};

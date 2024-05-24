import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";
import {
  BuildingOfficeIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Functional Components/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    tabs: [
      { name: "Clients", icon: UserIcon, current: false },
      {
        name: "Outgoing Invitations",
        icon: BuildingOfficeIcon,
        current: false,
      },
      {
        name: "Incoming Invitations",
        icon: UsersIcon,
        current: true,
      },
    ],
  },
};

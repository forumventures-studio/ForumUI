import type { Meta, StoryObj } from "@storybook/react";

import CommandPalette from "./CommandPalette";
import {
  DocumentPlusIcon,
  FolderPlusIcon,
  HashtagIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Credit Pulse/Functional Components/CommandPalette",
  component: CommandPalette,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    projects: [
      { id: 1, name: "Workflow Inc. / Website Redesign", url: "#" },
      // More projects...
    ],
    recent: [],
    quickActions: [
      {
        name: "Add new file...",
        icon: DocumentPlusIcon,
        shortcut: "N",
        url: "#",
      },
      {
        name: "Add new folder...",
        icon: FolderPlusIcon,
        shortcut: "F",
        url: "#",
      },
      { name: "Add hashtag...", icon: HashtagIcon, shortcut: "H", url: "#" },
      { name: "Add label...", icon: TagIcon, shortcut: "L", url: "#" },
    ],
  },
};

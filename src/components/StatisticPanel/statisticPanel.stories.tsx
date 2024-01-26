import type { Meta, StoryObj } from "@storybook/react";

import { StatisticPanel } from "./StatisticPanel";
import { NotificationBox } from "@untitled-ui/icons-react";

const meta = {
  title: "Swyft Treasury/Content Components/StatisticPanel",
  component: StatisticPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StatisticPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "basis-1/4",
    title: "Outstanding Items",
    titleIcon: <NotificationBox />,
    mainText: "0.05%",
    subText: "$2,200 Expected Annual Yield",
  },
};

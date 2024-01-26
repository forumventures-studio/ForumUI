import type { Meta, StoryObj } from "@storybook/react";

import { ContentPanel } from "./ContentPanel";
import { CreditCardCheck, LineChartDown05 } from "@untitled-ui/icons-react";

const meta = {
  title: "Swyft/ContentPanel",
  component: ContentPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ContentPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Cash Flow",
    titleIcon: <LineChartDown05 className="mr-2" />,
    rightIcon: <CreditCardCheck />,
    panelDescription: `as of ${new Date().toLocaleDateString()}`,
    children: <div className="h-32 w-20"></div>,
  },
};

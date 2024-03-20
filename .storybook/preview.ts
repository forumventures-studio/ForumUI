import type { Preview } from "@storybook/react";

import { themes } from "@storybook/theming";

import "../src/index.css";
import "../src/output.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    theme: {
      color: {
        secondary: "#8EBFAE",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

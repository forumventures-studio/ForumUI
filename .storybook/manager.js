import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import BaseTheme from "./BaseTheme";

addons.setConfig({
  theme: BaseTheme,
});

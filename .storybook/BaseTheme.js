import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "Forum Ventures Design Framework",
  brandUrl: "https://forumventures.com/",
  brandImage: "./images/forumVenturesLogo.jpg",
  brandTarget: "_self",

  //
  colorPrimary: "#3A10E5",
  colorSecondary: "#585C6D", // Add colorSecondary property

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barHoverColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,

  typography: {
    fontBase: '"Open Sans", sans-serif',
    fontCode: "monospace",
    fonts: {
      base: '"Open Sans", sans-serif',
      code: "monospace",
    },
  },
});

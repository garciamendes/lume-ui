import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../../tailwind/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;

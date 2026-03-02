import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    '@storybook/addon-actions',
    "@storybook/addon-a11y",
    '@storybook/essentials',
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-webpack5",
  "staticDirs": [
    "..\\public"
  ]
};
export default config;
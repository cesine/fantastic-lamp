import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(mjs|ts|tsx)'],
  addons: ['@storybook/preset-create-react-app'],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  framework: {
    name: path.resolve(
      require.resolve('@storybook/react-webpack5/preset'),
      '..'
    ) as any,
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
}
export default config

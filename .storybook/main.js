const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    'storybook-addon-pseudo-states',
    'storybook-addon-apollo-client',
    'storybook-addon-react-router-v6',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },

  viteFinal: async config => {
    config.plugins.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
      }),
    );

    return config;
  },
};

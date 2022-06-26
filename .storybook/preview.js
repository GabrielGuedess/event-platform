import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { themes } from '@storybook/theming';
import 'tailwindcss/tailwind.css';

import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: '#2F2F2F' },
    light: { ...themes.normal, appBg: '#FFFFFF' },
  },
  apolloClient: {
    MockedProvider,
  },
};

import React from 'react';
import type { Decorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { ThemeProvider, buildTheme } from '../src/ThemeProvider';
import { brands } from '../src/brandTypes/brandTypes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#FFFFFF' },
      { name: 'dark', value: '#000000' },
    ],
  },
};

export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Selecione a marca',
    defaultValue: 'natura_v3',
    toolbar: {
      icon: 'paintbrush',
      items: brands.map((brand) => ({ value: brand.value, title: brand.name })),
    },
  },
};

export const decorators: Decorator[] = [
  (storyFn, context) => withConsole()(storyFn)(context),
  (Story, context) => {
    const { brand } = context.globals;
    const backgroundValue = context.globals.backgrounds?.value;
    const mode = backgroundValue === '#000000' ? 'dark' : 'light';
    const theme = buildTheme(brand ?? 'natura_v3', mode);

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];
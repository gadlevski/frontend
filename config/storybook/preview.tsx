import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        </BrowserRouter>
      );
    },
  ],
};

export default preview;

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
  globalTypes: {
    theme: {
      description: 'Глобальная тема для компонентов',
      defaultValue: 'light',
      toolbar: {
        title: 'Тема',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Светлая' },
          { value: 'dark', title: 'Темная' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <BrowserRouter>
          <ThemeProvider>
            <div className={`app ${context.globals.theme || 'light'}`}>
              <Story />
            </div>
          </ThemeProvider>
        </BrowserRouter>
      );
    },
  ],
};

export default preview;

import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../src/app/styles/index.scss';
import { I18nextProvider } from 'react-i18next';
// import i18n from 'shared/config/i18n/i18nForTests';
import i18n from 'shared/config/i18n/i18n';
import { Suspense } from 'react';

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
          <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
              <Story />
            </I18nextProvider>
          </Suspense>
        </BrowserRouter>
      );
    },
  ],
};

export default preview;

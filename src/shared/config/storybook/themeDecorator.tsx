// eslint-disable-next-line ga-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { StoryFn } from '@storybook/react';

export const themeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>;
};
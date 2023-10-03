import { StoryFn } from '@storybook/react';

export const spacingDecorator = (Story: StoryFn) => (
  <div style={{ margin: '100px 0 0 100px' }}>
    <Story />
  </div>
);

import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const suspenseDecorator = (Story: StoryFn) => {
  return (
    <Suspense>
      <Story />
    </Suspense>
  );
};

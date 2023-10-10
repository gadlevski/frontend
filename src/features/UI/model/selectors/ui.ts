import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';


export const getUIScrollByPath = createSelector(
  (state: StateSchema) => state.ui.scroll,
  (state: StateSchema, path: string) => path, // второй аргумент, который будет передан в getUIScrollByPath(state, path)
  (scroll, path) => scroll[path] || 0,
);

import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  name: StateSchemaKey;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {

    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      dispatch({ type: `@INIT ${name} reducer` });
      store.reducerManager.add(name, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          dispatch({ type: `@DESTROY ${name} reducer` });
          store.reducerManager.remove(name);
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (<>
    {children}
  </>
  );
};
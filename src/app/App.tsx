import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { userActions } from 'entities/User/model/slice/userSlice';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthdata());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;

import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { userActions } from 'entities/User/model/slice/userSlice';
import { useEffect } from 'react';
import { getUserInited } from 'entities/User';
import { useSelector } from 'react-redux';

const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch, inited]);

  return (
    <div className={classNames('app', {}, [])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        {inited && <AppRouter />}
      </div>
    </div>
  );
};

export default App;

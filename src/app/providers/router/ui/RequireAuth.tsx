import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface Props {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();

  if (!authData) {
    return <Navigate to={RoutePath.main} replace state={{ from: location }} />;
  }

  return children;
};

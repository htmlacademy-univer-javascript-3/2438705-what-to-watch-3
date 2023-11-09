import {Navigate} from 'react-router-dom';
import {AuthStatus} from '../../const';
import {JSX} from 'react';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to='/login' />
  );
}

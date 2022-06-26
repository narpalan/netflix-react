import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Props } from './guard.type';
import { tokenSelector } from '../../store/user/user.selector';
import { LOGIN_PATH } from '../../screens/login/login.type';

export default function Guard({ children } : Props) {
  const token = useSelector(tokenSelector);
  const navigate = useNavigate();
  const from = useLocation();

  useEffect(
    () => {
      if (!token) {
        navigate(LOGIN_PATH, { state: { from } });
      }
    },
    [token],
  );

  if (!token) return null;

  return children;
}

// Libs and external
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

// Types
import { Error } from 'types/yup';

// Utilities
import { USER_TOKEN_COOKIE } from '../../store/user/user.type';
import userSlice from '../../store/user/user.slice';
import { SHOWS_PATH } from '../shows/shows.type';
import { tokenSelector, errorSelector } from '../../store/user/user.selector';
import { loginSchema } from './login.schema';

// Components
import Input from '../../components/input/input';
import FormErr from '../../components/form-error/form-error';
import Button from '../../components/button/button';
import FWrapper from '../../components/grid/grid';

export default function Form() {
  const [data, setData] = useState({
    email: '',
    pswd: '',
  });

  const navigate = useNavigate();
  const from = useLocation();

  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const authToken = useSelector(tokenSelector);
  const userError = useSelector(errorSelector);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const resetError = useCallback(
    (errorMessage: string) => {
      setError(errorMessage);
    },
    [],
  );

  const handleSend = useCallback(
    async () => {
      try {
        const schema = loginSchema;
        await schema.validate(data);
        resetError('');
        dispatch(userSlice.actions.authentication(data));
      } catch (yupError: any) {
        setError((yupError as Error).errors[0]);
      }
    },
    [data],
  );

  useEffect(() => {
    if (authToken) {
      navigate(SHOWS_PATH, {
        state: { from },
      });
    }
  }, [authToken]);

  useEffect(() => {
    const localToken = localStorage.getItem(USER_TOKEN_COOKIE);

    if (localToken) {
      dispatch(userSlice.actions.setData({
        token: localToken,
      }));
    }
  }, []);

  return (
    <FWrapper container alignContent="center" justifyContent="center">
      <Grid item xs={2}>
        <Grid container>
          <Input type="email" name="email" placeHolder="E-mail" onChange={handleChange} />
          <Input type="password" name="pswd" placeHolder="Senha" onChange={handleChange} />
          <Button onClick={handleSend}>Entrar</Button>
          <FormErr message={error || userError} />
        </Grid>
      </Grid>
    </FWrapper>

  );
}

// Libs and external
import React, {
  useCallback, useEffect, useState, ChangeEvent,
} from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// Types
import { Error } from 'types/yup';

// Utilities
import { tokenSelector } from '../../store/user/user.selector';
import userSlice from '../../store/user/user.slice';
import { loginSchema } from './login.schema';

// Components

import Input from '../../components/input/input';
import FormErr from '../../components/form-error/form-error';
import { ButtonStyled } from '../../components/button/button.styled';
import FWrapper from '../../components/grid/grid';

export default function Form() {
  const [data, setData] = useState({
    email: '',
    pswd: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const userAuthenticated = useSelector(tokenSelector);

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
    console.log(userAuthenticated);
  }, [userAuthenticated]);

  return (
    <FWrapper container alignContent="center" justifyContent="center">
      <Grid item xs={2}>
        <Grid container>
          <Input type="email" name="email" placeHolder="E-mail" onChange={handleChange} />
          <Input type="password" name="pswd" placeHolder="Senha" onChange={handleChange} />
          <ButtonStyled onClick={handleSend}>Entrar</ButtonStyled>
          <FormErr message={error} />
        </Grid>
      </Grid>
    </FWrapper>

  );
}

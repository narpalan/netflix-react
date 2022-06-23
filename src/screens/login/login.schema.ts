import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  pswd: yup.string().required(),
});

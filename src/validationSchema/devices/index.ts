import * as yup from 'yup';

export const deviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  status: yup.string().required(),
});

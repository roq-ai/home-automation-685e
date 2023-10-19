import * as yup from 'yup';

export const homeValidationSchema = yup.object().shape({
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip_code: yup.number().integer().required(),
  country: yup.string().required(),
});

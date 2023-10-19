import * as yup from 'yup';

export const homeDeviceValidationSchema = yup.object().shape({
  installation_date: yup.date().nullable(),
  warranty_expiry: yup.date().nullable(),
  home_id: yup.string().nullable().required(),
  device_id: yup.string().nullable().required(),
  service_id: yup.string().nullable().required(),
});

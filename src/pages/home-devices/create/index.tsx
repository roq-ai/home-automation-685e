import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { homeDeviceValidationSchema } from 'validationSchema/home-devices';
import { HomeInterface } from 'interfaces/home';
import { DeviceInterface } from 'interfaces/device';
import { ServiceInterface } from 'interfaces/service';
import { HomeDeviceInterface } from 'interfaces/home-device';

function HomeDeviceCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: HomeDeviceInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.home_device.create({ data: values as RoqTypes.home_device });
      resetForm();
      router.push('/home-devices');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<HomeDeviceInterface>({
    initialValues: {
      installation_date: new Date(new Date().toDateString()),
      warranty_expiry: new Date(new Date().toDateString()),
      home_id: (router.query.home_id as string) ?? null,
      device_id: (router.query.device_id as string) ?? null,
      service_id: (router.query.service_id as string) ?? null,
    },
    validationSchema: homeDeviceValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Home Devices',
              link: '/home-devices',
            },
            {
              label: 'Create Home Device',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Home Device
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="installation_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Installation Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.installation_date ? new Date(formik.values?.installation_date) : null}
              onChange={(value: Date) => formik.setFieldValue('installation_date', value)}
            />
          </FormControl>
          <FormControl id="warranty_expiry" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Warranty Expiry
            </FormLabel>
            <DatePicker
              selected={formik.values?.warranty_expiry ? new Date(formik.values?.warranty_expiry) : null}
              onChange={(value: Date) => formik.setFieldValue('warranty_expiry', value)}
            />
          </FormControl>
          <AsyncSelect<HomeInterface>
            formik={formik}
            name={'home_id'}
            label={'Select Home'}
            placeholder={'Select Home'}
            fetcher={() => roqClient.home.findManyWithCount({})}
            labelField={'address'}
          />
          <AsyncSelect<DeviceInterface>
            formik={formik}
            name={'device_id'}
            label={'Select Device'}
            placeholder={'Select Device'}
            fetcher={() => roqClient.device.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<ServiceInterface>
            formik={formik}
            name={'service_id'}
            label={'Select Service'}
            placeholder={'Select Service'}
            fetcher={() => roqClient.service.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/home-devices')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'home_device',
    operation: AccessOperationEnum.CREATE,
  }),
)(HomeDeviceCreatePage);

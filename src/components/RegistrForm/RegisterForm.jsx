import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Flex } from '@chakra-ui/react';
import { register } from 'redux/auth/operations';
import FormInput from 'components/FormInput/FormInput';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .matches(/^[A-Za-z]+$/, 'Only English letters')
    .required('Required'),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Is not in correct format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password is too short - should be 7 chars minimum'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      validateOnChange
      onSubmit={(values, { resetForm, setSubmitting }) => {
        dispatch(register(values)).then(() => {
          setSubmitting(false);
          resetForm();
        });
      }}
    >
      {({ isSubmitting }) => (
        <Flex
          as={Form}
          direction="column"
          gap="10px"
          maxW="md"
          mx="auto"
          my="4"
          p="4"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          autoComplete="new-password"
        >
          <FormInput name="name" label="Name" placeholder="Enter nick-name" />
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="Enter email"
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            placeholder="Enter password"
          />

          <Button
            type="submit"
            colorScheme="teal"
            mt="4"
            isLoading={isSubmitting}
          >
            Sign Up
          </Button>
        </Flex>
      )}
    </Formik>
  );
};

export default RegisterForm;

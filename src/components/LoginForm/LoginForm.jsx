import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, Flex } from '@chakra-ui/react';
import { logIn } from 'redux/auth/operations';
import FormInput from 'components/FormInput/FormInput';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Is not in correct format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password is too short - should be 5 chars minimum'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      validateOnChange
      onSubmit={(values, { resetForm, setSubmitting }) => {
        dispatch(logIn(values)).then(() => {
          setSubmitting(false);
          resetForm();
        });
      }}
      // onSubmit={async (values, { resetForm, setSubmitting }) => {
      //   try {
      //     const result = await dispatch(logIn(values));
      //     if (result) {
      //       resetForm();
      //     }
      //   } finally {
      //     setSubmitting(false);
      //   }
      // }}
    >
      {props => {
        return (
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
              isLoading={props.isSubmitting}
            >
              Sign In
            </Button>
          </Flex>
        );
      }}
    </Formik>
  );
};

export default LoginForm;

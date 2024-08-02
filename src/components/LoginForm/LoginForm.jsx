import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Flex,
  Icon,
  FormErrorMessage,
} from '@chakra-ui/react';
import { MdVisibility, MdVisibilityOff, MdCheckCircle } from 'react-icons/md';
import { logIn } from 'redux/auth/operations';

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
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

const LoginForm = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      validateOnChange
      onSubmit={(values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
      }}
    >
      {({ errors, touched, values }) => (
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
          <FormControl isInvalid={errors.email && touched.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Field
              as={Input}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              _placeholder={{ color: 'black' }}
            />
            <FormErrorMessage>
              <Text color="red.500">{errors.email}</Text>
            </FormErrorMessage>

            {!errors.email && values.email && (
              <Text color="green.500">
                <Icon as={MdCheckCircle} />
                Success email
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.password && touched.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Field
                as={Input}
                name="password"
                id="password"
                type={visible ? 'text' : 'password'}
                placeholder="Password"
                _placeholder={{ color: 'black' }}
                autoComplete="new-password"
              />
              <InputRightElement>
                <Button variant="ghost" onClick={() => setVisible(!visible)}>
                  <Icon as={visible ? MdVisibility : MdVisibilityOff} />
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.password}</FormErrorMessage>

            {!errors.password && values.password && (
              <Text color="green.500">
                <Icon as={MdCheckCircle} />
                Success password
              </Text>
            )}
          </FormControl>

          <Button type="submit" colorScheme="teal" mt="4">
            Sign In
          </Button>
        </Flex>
      )}
    </Formik>
  );
};

export default LoginForm;

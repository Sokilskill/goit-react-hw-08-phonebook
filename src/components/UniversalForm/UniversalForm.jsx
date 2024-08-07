import { Button, Flex, useToast } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

const UniversalForm = ({
  initialValues,
  validationSchema,
  labelButtonSbmit,
  operation,
  handleSubmit,
  children,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const defaultHandleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(operation(values)).then(({ error, payload }) => {
      setSubmitting(false);

      if (error) {
        toast({
          title: 'Error',
          status: 'error',
          position: 'top-right',
          description: payload,
          isClosable: true,
        });
        return;
      }
      resetForm();
    });
  };

  const onSubmit = handleSubmit || defaultHandleSubmit;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange
      onSubmit={onSubmit}
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
            {children}

            <Button
              type="submit"
              colorScheme="teal"
              mt="4"
              isLoading={props.isSubmitting}
            >
              {labelButtonSbmit}
            </Button>
          </Flex>
        );
      }}
    </Formik>
  );
};

export default UniversalForm;

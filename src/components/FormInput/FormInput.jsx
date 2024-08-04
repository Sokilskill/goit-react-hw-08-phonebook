import { useState } from 'react';
import { Field, useField } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Icon,
  FormErrorMessage,
} from '@chakra-ui/react';
import { MdVisibility, MdVisibilityOff, MdCheckCircle } from 'react-icons/md';

const FormInput = ({ name, type = 'text', label, placeholder = label }) => {
  const [visible, setVisible] = useState(false);
  const [field, meta] = useField(name);

  const { error, touched, value } = meta;
  const { name: inputName } = field;

  const typeIsPassword = type === 'password';

  return (
    <FormControl isInvalid={error && touched}>
      <FormLabel htmlFor={inputName}>{label}</FormLabel>
      <InputGroup>
        <Field
          as={Input}
          id={inputName}
          {...field}
          type={typeIsPassword ? (visible ? 'text' : 'password') : type}
          placeholder={placeholder}
          _placeholder={{ color: 'black' }}
          autoComplete="new-password"
        />
        {typeIsPassword && (
          <InputRightElement>
            <Button variant="ghost" onClick={() => setVisible(!visible)}>
              <Icon as={visible ? MdVisibility : MdVisibilityOff} />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>

      {!error && value && (
        <Text color="green.500">
          <Icon as={MdCheckCircle} />
          Success {inputName}
        </Text>
      )}
    </FormControl>
  );
};

export default FormInput;

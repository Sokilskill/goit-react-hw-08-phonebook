import { logIn } from 'redux/auth/operations';
import FormInput from 'components/FormInput/FormInput';
import UniversalForm from 'components/UniversalForm/UniversalForm';
import { LogInSchema } from 'yupSchemas';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  return (
    <UniversalForm
      initialValues={initialValues}
      validationSchema={LogInSchema}
      operation={logIn}
      labelButtonSbmit="Log in"
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
    </UniversalForm>
  );
};

export default LoginForm;

import { useState } from "react";

import {
  AuthContainer,
  AuthForm,
  AuthFormAction,
  AuthFormInput,
  InputWrapper,
  AuthFormInputContainer,
  AuthFormLabel,
  Button,
  CloseIcon,
  EyeIcon,
  EyeOffIcon,
  AuthFormFooter,
} from "./AuthForm.style";

const Login = ({ onCloseModal, onOpenModal }) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const openSignUpModalHandler = () => {
    onCloseModal();
    setTimeout(() => {
      onOpenModal();
    }, 200);
  };

  return (
    <AuthContainer>
      <h1>Login to ARTISE</h1>
      <CloseIcon size={30} onClick={onCloseModal} />
      <AuthForm>
        <AuthFormInputContainer>
          <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
          <AuthFormInput id="email" type="text" placeholder="Enter your email address" autoComplete="off" />
        </AuthFormInputContainer>
        <AuthFormInputContainer>
          <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
          <InputWrapper>
            <AuthFormInput
              id="password"
              type={isPassVisible ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="off"
            />
            {!isPassVisible && <EyeIcon size={20} onClick={() => setIsPassVisible(true)} />}
            {isPassVisible && <EyeOffIcon size={20} onClick={() => setIsPassVisible(false)} />}
          </InputWrapper>
        </AuthFormInputContainer>
        <AuthFormAction>
          <Button>Login</Button>
        </AuthFormAction>
        <AuthFormFooter>
          <p>
            Don't have an account? <span onClick={openSignUpModalHandler}>Sign up</span>
          </p>
        </AuthFormFooter>
      </AuthForm>
    </AuthContainer>
  );
};

export default Login;

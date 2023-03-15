import React, { useState } from "react";
import {
  AuthContainer,
  AuthForm,
  AuthFormAction,
  AuthFormInput,
  InputWrapper,
  AuthFormInputContainer,
  AuthFormLabel,
  AuthFormFooter,
  Button,
  CloseIcon,
  EyeIcon,
  EyeOffIcon,
} from "./AuthForm.style";

const Signup = ({ onCloseModal, onOpenModal }) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const openLoginModalHandler = () => {
    onCloseModal();
    setTimeout(() => {
      onOpenModal();
    }, 200);
  };

  return (
    <AuthContainer>
      <h1>Welcome to ARTISE</h1>
      <CloseIcon size={30} onClick={onCloseModal} />
      <AuthForm>
        <AuthFormInputContainer>
          <AuthFormLabel htmlFor="name">Name</AuthFormLabel>
          <AuthFormInput id="name" type="text" placeholder="Enter your full name" autoComplete="off" />
        </AuthFormInputContainer>
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
        <AuthFormInputContainer>
          <AuthFormLabel htmlFor="confirmPass">Confirm Password</AuthFormLabel>
          <AuthFormInput id="confirmPass" type="password" placeholder="Re-enter your password" autoComplete="off" />
        </AuthFormInputContainer>
        <AuthFormAction>
          <Button>Signup</Button>
        </AuthFormAction>
        <AuthFormFooter>
          <p>
            Already have an account? <span onClick={openLoginModalHandler}>Login</span>
          </p>
        </AuthFormFooter>
      </AuthForm>
    </AuthContainer>
  );
};

export default Signup;

import styled from "styled-components";
import { Close } from "@styled-icons/material-rounded/Close";
import { Visibility } from "@styled-icons/material-rounded/Visibility";
import { VisibilityOff } from "@styled-icons/material-rounded/VisibilityOff";

export const AuthContainer = styled.section`
  position: relative;
  width: 420px;
  padding: 20px;
  background-color: #ffffff;

  h1 {
    margin: 0 0 25px 0;
    font-size: 30px;
  }
`;

export const AuthForm = styled.form``;

export const AuthFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 22px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const AuthFormLabel = styled.label`
  font-size: 20px;
`;

export const AuthFormInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #c2bfbf;
  padding: 8px;
  font-size: 20px;
  width: 100%;
`;

export const AuthFormAction = styled.div`
  margin-top: 35px;
`;

export const AuthFormFooter = styled.footer`
  text-align: center;
  margin-top: 30px;
  span {
    text-decoration: underline dotted;
    cursor: pointer;
    color: blue;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  padding: 8px 15px;
  font-size: 20px;
  border-radius: 90px;
  background-color: #c2c2c2;
  border: 1.5px solid black;
  cursor: pointer;

  &:hover {
    background-color: #b3b0b0;
  }
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const EyeIcon = styled(Visibility)`
  position: absolute;
  bottom: 8px;
  right: 0;
  color: black;
  cursor: pointer;
`;

export const EyeOffIcon = styled(VisibilityOff)`
  position: absolute;
  bottom: 8px;
  right: 0;
  color: black;
  cursor: pointer;
`;

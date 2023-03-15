import styled from "styled-components";

export const Header = styled.header`
  padding: 7px;
  /* margin-bottom: 8px; */
  -webkit-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: none;
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LeftContainer = styled.div`
  flex: 4;
  padding-left: 2%;
  h1 {
    margin: 0;
    font-size: 35px;
  }
`;

export const CenterContainer = styled.div`
  flex: 4;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12%;
`;

export const RightContainer = styled.div`
  flex: 4;
  padding-right: 3%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  border: 1px solid black;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 14px;
  /* background-color: black; */
  cursor: pointer;
`;

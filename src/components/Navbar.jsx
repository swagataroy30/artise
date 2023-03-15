import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./Authentication/AuthModal";
import { Header, NavbarContainer, LeftContainer, CenterContainer, RightContainer, Button } from "./Navbar.style";

const Navbar = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openSignUpModalHandler = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModalHandler = () => {
    setIsSignUpModalOpen(false);
  };

  const openLoginModalHandler = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModalHandler = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <Header>
      <NavbarContainer>
        <LeftContainer>
          <h1>ARTISE</h1>
        </LeftContainer>
        <CenterContainer>
          <Link to="/">Home</Link>
          <Link to="/featured">Featured</Link>
          <Link to="/artworks">Artworks</Link>
        </CenterContainer>
        <RightContainer>
          <Button onClick={openLoginModalHandler}>Login</Button>
          <Button onClick={openSignUpModalHandler}>Signup</Button>
        </RightContainer>
      </NavbarContainer>
      {isSignUpModalOpen && (
        <AuthModal onCloseModal={closeSignUpModalHandler} type="Signup" onOpenModal={() => setIsLoginModalOpen(true)} />
      )}
      {isLoginModalOpen && (
        <AuthModal onCloseModal={closeLoginModalHandler} type="Login" onOpenModal={() => setIsSignUpModalOpen(true)} />
      )}
    </Header>
  );
};

export default Navbar;

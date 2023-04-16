import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import Accessibility from "./laptop-check-icon.png";
import BlockchainIllustration from "./blockchain-icon.png";
import PaperLess from "./noun-paperless-1562276 (1).png";
import PatientLoginIllustration from "./advice.png";
import AdminLoginIllustration from "./admin.png";
import HospitalLoginIllustration from "./hospital.png";
import ViewAnyRecordsIllustration from "./criminal-record.png";
import {
  About,
  AppName,
  Backdrop,
  BlueLine,
  ButtonContainer,
  ButtonContainerMobile,
  Container,
  DoctorNurseIllustration,
  DoctorNurseIllustrationMobile,
  Dropdown,
  DropdownItem,
  Footer,
  GetStartedButton,
  GetStartedButtonMobile,
  Home,
  Image,
  ImageAndTextContainer,
  Login,
  LoginButton,
  LoginContainer,
  LoginFlex,
  LoginImage,
  LoginText,
  Logo,
  Menu,
  MenuContainer,
  NavbarContainer,
  Slogan,
  Slogan2,
  SpecialityText,
  SubContainer1,
  SubContainer2,
  SubContainer3,
  SubContainer4,
  SubContainer5,
  SubContainerMobile,
} from "./LandingPage.styled";
import { useAuth } from "../services/authorization";

const LandingPage = () => {
  const ref = useRef();
  const loginRef = useRef();
  const auth = useAuth();
  const history = useHistory();

  const [menu, setMenu] = useState(false);

  const scrollToLoginFlex = () => ref.current.scrollIntoView();
  const scrollToLoginFlexMobile = () => {
    setMenu(false);
    loginRef.current.scrollIntoView();
  };

  return (
    <Container>
      {menu && (
        <Backdrop
          onClick={() => {
            setMenu(false);
          }}
        />
      )}
      <NavbarContainer >
        <Logo />
        <AppName>CareChains</AppName>
        <Home onClick={() => history.push("/home")}>
          Home
          <BlueLine />
        </Home>
        {/* <About onClick={() => history.push("/about")}>About</About> */}
        {auth.loggedIn ? (
          <Login onClick={() => history.push("/dashboard")}>Dashboard</Login>
        ) : (
          <Login onClick={scrollToLoginFlex}>Login</Login>
        )}
        <MenuContainer open={menu}>
          <Menu onClick={() => setMenu(!menu)}></Menu>
          <Dropdown>
            <DropdownItem
              style={{ backgroundColor: "#DAE9FF" }}
              onClick={scrollToLoginFlexMobile}
            >
              Home
            </DropdownItem>
            <DropdownItem onClick={() => setMenu(!menu)}>Login</DropdownItem>
          </Dropdown>
        </MenuContainer>
      </NavbarContainer>
      <SubContainer1>
        <SubContainer2>
          <SubContainer3>
            <Slogan>
            Store your medical history.
              <br />
              with us on blockchain
            </Slogan>
            <Slogan2>
            When seeing a doctor, there is no need to bring all the paperwork.Your records will be available wherever you go by scanning your public key.
             Medical history cannot ever be used as evidence, even if it were allowed to do so.
            </Slogan2>
            <ButtonContainer>
              <GetStartedButton onClick={scrollToLoginFlex}>
               Start now
              </GetStartedButton>
            </ButtonContainer>
          </SubContainer3>
          <DoctorNurseIllustration />
          <SubContainerMobile>
            <ButtonContainerMobile>
              <GetStartedButtonMobile onClick={scrollToLoginFlex}>
               Start now
              </GetStartedButtonMobile>
            </ButtonContainerMobile>
            <DoctorNurseIllustrationMobile />
          </SubContainerMobile>
        </SubContainer2>
        <SubContainer4 ref={ref}>
          <SubContainer5>
            <ImageAndTextContainer>
              <Image src={Accessibility} style={{margin: '40px'}} />
              <SpecialityText>Access at any time and from anywhere</SpecialityText>
            </ImageAndTextContainer>
            <ImageAndTextContainer>
              <Image src={BlockchainIllustration}  />
              <SpecialityText>
                Decentralized platform for highest safety
              </SpecialityText>
            </ImageAndTextContainer>
            <ImageAndTextContainer>
              <Image src={PaperLess} />
              <SpecialityText>
                No need to carry your medical reports everywhere
              </SpecialityText>
            </ImageAndTextContainer>
          </SubContainer5>
        </SubContainer4>
        <LoginText>Login To CareChains</LoginText>
        <LoginFlex>
          <LoginContainer onClick={() => history.push("/login/patient")}>
            <LoginImage src={PatientLoginIllustration} />
            <LoginButton>Patient Login</LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/login/hospital")}>
            <LoginImage src={HospitalLoginIllustration} />
            <LoginButton>Hospital login</LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/login/admin")}>
            <LoginImage src={AdminLoginIllustration} />
            <LoginButton>Admin Login</LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/anyRecord")}>
            <LoginImage src={ViewAnyRecordsIllustration} />
            <LoginButton style={{ width: "90%" }}>View AnyRecords</LoginButton>
          </LoginContainer>
        </LoginFlex>
        <Footer>&copy;CareChains</Footer>
      </SubContainer1>
    </Container>
  );
};

export default LandingPage;

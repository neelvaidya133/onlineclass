import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Assets/icons8-einstein-50-removebg-preview.png";
import {
  NavBar,
  MainContainer,
  BTN,
  HeroSection,
  Infosection,
  ImageSection,
  Title,
  Subtitle,
  InfoBTN,
  HamBurger,
  LogoStyle,
} from "./HomeStyle";

import D from "../Assets/clip-online-education-6.png";
const Home = () => {
  return (
    <>
      <MainContainer>
        <NavBar>
          <LogoStyle>
            <img src={Logo} alt="Logo" />
            <a href="" style={{ textDecoration: "none" }}>
              <h2 style={{ color: "#1A1F58" }}>PhysicsByRp</h2>
            </a>
          </LogoStyle>
          <BTN>
            <a href=""> Contact </a>
          </BTN>
          <HamBurger>
            <a href="#"> </a>
            <GiHamburgerMenu />
          </HamBurger>
        </NavBar>
        <HeroSection>
          <Infosection>
            <Title> Now Learn Physics Easily </Title>
            <Subtitle>
              PhysicsByRp teach you how to learn physics in a simple way. Learn
              concepts in a short time.
            </Subtitle>

            <InfoBTN>
              <a href=""> Explore now </a>
            </InfoBTN>
          </Infosection>
          <ImageSection>
            <img src={D} alt="" style={{ height: "50%" }} />
          </ImageSection>
        </HeroSection>
      </MainContainer>
    </>
  );
};

export default Home;

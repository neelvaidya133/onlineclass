import styled from "styled-components";
export const MainContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavBar = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: #1a1f58;
  }
`;
export const BTN = styled.div`
  background-color: #1a1f58;
  border-radius: 1rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  padding-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    padding: 0;
  }
`;
export const Infosection = styled.div`
  padding-top: 10rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const Title = styled.div`
  font-size: 4rem;
`;
export const Subtitle = styled.div`
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const ImageSection = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 5rem;
  max-width: 1fr;

  @media screen and (max-width: 768px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;
export const InfoBTN = styled.div`
  background-color: #1a1f58;
  border-radius: 1rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  padding-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
export const HamBurger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

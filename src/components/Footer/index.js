import React from "react";
import {
  Container,
  LeftSection,
  RightSection,
  Title,
  Items,
  Subtitle,
} from "./FooterStyle";
const Footer = () => {
  return (
    <>
      <Container>
        <LeftSection>
          <Title> Physics Made easy </Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            cumque, quae recusandae tempora nulla officiis fugiat non,
            perspiciatis dolor placeat assumenda excepturi harum. Obcaecati
            sapiente explicabo laboriosam! Rerum, cumque atque!
          </Subtitle>
        </LeftSection>

        <RightSection>
          <Items>
            <a href=""> About us </a>
            <a href=""> Contact us </a>
            <a href=""> Courses </a>
          </Items>
        </RightSection>
      </Container>
    </>
  );
};

export default Footer;

import React from "react";
import { Container, Icon, Title, SubTitle, Form } from "./SubcribeStyle";
import Svg from "../Assets/Group 261.svg";
const Subscribe = () => {
  return (
    <>
      <Container>
        <Icon>
          <img src={Svg} alt="icon" />
        </Icon>
        <Title>Subscribe to Our Newsletter</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SubTitle>

        <Form>
          <input type="text" placeholder="Enter your email" />
          <a href="#"> Subscribe</a>
        </Form>
      </Container>
    </>
  );
};

export default Subscribe;

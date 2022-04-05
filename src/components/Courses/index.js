import React from "react";
import SvgOne from "./Assets/Group 254.svg";
import SvgTwo from "./Assets/Group 252.svg";
import {
  Container,
  Info,
  Icon,
  Title,
  Subtitle,
  CardWraper,
  Cards,
  Svgs,
  CardTitle,
  CardSubTitle,
} from "./CourseStyle";
const Course = () => {
  return (
    <>
      <Container>
        <Info>
          <Icon>
            <img src={SvgOne} alt="icon" />
          </Icon>

          <Title>Welcome to On line learning </Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Subtitle>
        </Info>
        <CardWraper>
          <Cards>
            <Svgs>
              <img src={SvgTwo} alt="icon" />
            </Svgs>
            <CardTitle> Online learning</CardTitle>
            <CardSubTitle>Lorem ipsum dolor sit amet, consectetur</CardSubTitle>
          </Cards>
          <Cards>
            <Svgs>
              <img src={SvgTwo} alt="icon" />
            </Svgs>
            <CardTitle> Online learning</CardTitle>
            <CardSubTitle>Lorem ipsum dolor sit amet, consectetur</CardSubTitle>
          </Cards>
          <Cards style={{ background: "#EE8700", color: "#fff" }}>
            <Svgs>
              <img src={SvgTwo} alt="icon" />
            </Svgs>
            <CardTitle> Online learning</CardTitle>
            <CardSubTitle>Lorem ipsum dolor sit amet, consectetur</CardSubTitle>
          </Cards>
          <Cards>
            <Svgs>
              <img src={SvgTwo} alt="icon" />
            </Svgs>
            <CardTitle> Online learning</CardTitle>
            <CardSubTitle>Lorem ipsum dolor sit amet, consectetur</CardSubTitle>
          </Cards>
        </CardWraper>
      </Container>
    </>
  );
};

export default Course;

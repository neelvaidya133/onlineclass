import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  background-color: #1a1f58;
  clip-path: ellipse(129% 100% at -5.3% 100%);
  color: #fff;
  padding: 5rem;
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 2rem;
`;
export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;
export const Title = styled.div`
  font-size: 2rem;
  padding-bottom: 2rem;
`;
export const Subtitle = styled.div`
  text-align: left;
  max-width: 25rem;
`;
export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    padding-top: 2rem;
    text-decoration: none;
    color: #fff;
  }
`;

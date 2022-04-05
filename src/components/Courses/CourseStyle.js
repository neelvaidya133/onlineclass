import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
`;
export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 50rem;
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 2rem;
`;
export const Subtitle = styled.div`
  font-size: 1.1rem;
`;
export const CardWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid gray;
  border-style: dotted;
  border-radius: 1rem;
  margin: 1rem;
`;
export const Svgs = styled.div``;
export const CardTitle = styled.div`
  font-size: 1.2rem;
  padding-top: 1rem;
`;
export const CardSubTitle = styled.div`
  padding-top: 1rem;
  text-align: center;
`;

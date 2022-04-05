import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 15rem;
  padding-left: 5rem;
  padding-right: 5rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const Icon = styled.div`
  padding-bottom: 10rem;
`;
export const Title = styled.div`
  padding-top: 2rem;
  font-size: 2rem;
  max-width: 30rem;
`;
export const SubTitle = styled.div`
  font-size: 1rem;
  padding-top: 2rem;
  max-width: 30rem;
  text-align: center;
  max-width: 30rem;
`;
export const Form = styled.div`
  padding-top: 2rem;
  padding-bottom: 5rem;
  display: flex;

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    text-decoration: none;
    border: none;
    border-radius: 3rem;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: antiquewhite;

    :focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 3rem;
    background-color: #ffc107;
    position: relative;
    left: -10%;
  }
`;

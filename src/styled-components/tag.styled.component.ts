import styled from "styled-components";

export const SuperhostTag = styled.div`
  border: 0.1rem solid #4f4f4f;
  border-radius: 1.2rem;
  padding: 0.5rem 1.2rem;

  & > span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: #4f4f4f;
  }
`;

export const RatingTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.72rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #4f4f4f;

  & > span {
    color: #eb5757;
  }
`;

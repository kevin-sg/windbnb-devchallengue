import styled from "styled-components";

export const CardImage = styled.img`
  /* width: 39.5rem; */
  width: 100%;
  height: 26.9rem;
  border-radius: 2.4rem;
  /* background-color: aqua; */
  object-fit: cover;
  object-position: center center;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.95rem;
  text-align: left;
  font-family: "Montserrat";
  margin-top: 1.7rem;
  user-select: all;
`;

export const CardDescription = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.707rem;
  /* text-align: right; */
  color: #828282;
  font-family: "Montserrat";
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  /* max-width: 39.5rem; */
  border-radius: 2.4rem;
`;

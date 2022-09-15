import type { CSSProperties } from "react";
import styled from "styled-components";

interface ILayoutContainerProps {
  display?: CSSProperties["display"];
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
}

export const CardLayout = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  display: grid;
  grid-template-columns: repeat(1, 30rem);
  grid-template-rows: auto;
  /* justify-items: center; */
  gap: 1rem;
  background-color: beige;

  @media (min-width: 32rem) {
    grid-template-columns: repeat(2, 25rem);
    gap: 1rem;
  }

  @media (min-width: 92rem) {
    grid-template-columns: repeat(3, 39.5rem);
    gap: 2rem;
  }

  @media (min-width: 120rem) {
    grid-template-columns: repeat(3, 39.5rem);
    gap: 2rem;
  }
`;

export const LayoutContainer = styled.div<ILayoutContainerProps>((props) => ({
  display: props.display,
  flexDirection: props.direction,
  justifyContent: props.justify,
  alignItems: props.align,
  margin: props.margin,
  padding: props.padding,
}));

export const MainContainer = styled.div`
  width: 130rem;
  max-width: 90%;
  margin: 0 auto;
  background-color: aqua;
`;

export const AppContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

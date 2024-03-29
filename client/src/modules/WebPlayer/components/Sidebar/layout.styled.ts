import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 230px;
  height: 100vh;
  background-color: black;
  z-index: 2;

  @media ${width[990]} {
    display: none;
  }
`;

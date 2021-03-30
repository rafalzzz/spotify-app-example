import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: none;

  @media ${width[990]} {
    position: fixed;
    z-index: 5;
    left: 30px;
    top: 19px;
    font-size: 0.85em;
    font-weight: 400;
    text-align: center;
    background-color: transparent;
    word-spacing: 2px;
    flex: 1 1 auto;
    padding-top: 2px;
    margin-bottom: 2px;
    display: none;
    :hover {
      cursor: pointer;
    }
    font-size: 1.5em;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    flex: 0 0 auto;
    display: block;
  }
`;

type BurgerButtonProps = {
  isOpen: boolean;
};

export const BurgerButton = styled.button<BurgerButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  overflow: hidden;
  height: 18px;
  background: black;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;
  padding-bottom: 0px;
  &:focus {
    outline: none;
  }
  @media ${width[990]} {
    button {
      display: none;
    }
    div {
      width: 20px;
      height: 3px;
      background: white;
      border-radius: 10px;
      transition: all 0.2s linear;
      position: relative;
      transform-origin: 1px;
      :first-child {
        transform: ${({ isOpen }) => (isOpen ? "rotate(43deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      }
      :nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-43deg)" : "rotate(0)")};
      }
    }
  }
`;

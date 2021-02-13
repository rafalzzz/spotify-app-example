import styled from "styled-components";

export const PlayButton = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${(props) => props.theme.background.playButton};
  margin: 20px 0px 30px 0px;
  border-radius: 35px;
  color: ${(props) => props.theme.color.secondary};
  font-size: 1.5em;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: none;

  :hover {
    -webkit-box-shadow: 0px 0px 0px 3px #1db954;
    box-shadow: 0px 0px 0px 3px #1db954;
    font-size: 1.6em;
    cursor: pointer;
  }
`;
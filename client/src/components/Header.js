import styled from "styled-components";
import { ConnectButton, darkTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="button-wrapper">
        <button>HOME</button>
        <button>ABOUT US</button>
        <button>SERVICE</button>
      </div>
      <ConnectButton className="connect-button" />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  position: absolute;
  top: 0;
  height: 7rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 3rem 0 3rem;
  .button-wrapper {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    margin: 0 0 0 1rem;
  }
`;

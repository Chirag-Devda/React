import React from "react";
import styled, { css, keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

const ReversedButton = (props) => (
  <Buttons {...props} children={props.children.split("").reverse()} />
);
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #82a711;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
const Button = () => {
  return (
    <>
      <GlobalStyle />
      <BtnContainer>
        <h1>Buttons styled by using styled components props</h1>
        <div>
          <Buttons as="a" href="https://www.google.com">
            Goggle
          </Buttons>
          <Buttons as={ReversedButton}>
            Custom Button with Normal Button styles
          </Buttons>
          <Buttons primary>Primary Button</Buttons>
          <Buttons secondary>Secondary Button</Buttons>
          <BigButton primary>Extend Button</BigButton>
          <ThemeBtn primary>Themed</ThemeBtn>
          <Buttons secondary>
            <Link href="https://www.google.co.in/">Styled Attributes</Link>
          </Buttons>
        </div>
      </BtnContainer>
    </>
  );
};

export default Button;

const BtnContainer = styled.div`
  flex-direction: column;
  background: #2abdb0;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

const Buttons = styled.button`
  all: unset;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 18px;
  background-color: black;
  color: white;

  ${(props) =>
    props.primary &&
    css`
      background-color: blue;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: #f20028;
    `}
`;

const BigButton = styled(Buttons)`
  font-size: 44px;
  animation: ${rotate} 2s linear infinite;
`;

const ThemeBtn = styled(Buttons)`
  background-color: ${(props) => props.theme.background.dark};
`;

// Added Attributes by attrs function
const Link = styled.a.attrs({
  target: "_blank",
})`
  color: white;
`;

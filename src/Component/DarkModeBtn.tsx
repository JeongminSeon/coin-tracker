import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import styled from "styled-components";

export default function DarkModeBtn() {
  const { toggleDarkMode } = useContext(ThemeContext);

  return <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>;
}

const Button = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.textColor};
  &: hover {
    color: orange;
    transition: color 0.5s, transform 0.2s;
  }
`;

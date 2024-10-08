// src/shared/styles/theme.ts
import { DefaultTheme } from "styled-components";

// 공통 스타일 정의
export const commonFonts = {
  lang: {
    korean: "Pretendard Variable",
    english: "Montserrat",
  },
  weight: {
    bold: 900,
    light_bold: 700,
    regular: 500,
    thin: 300,
    light_thin: 200,
  },
};

export const commonColors = {
  primary: "#733FF1",
  valid_green: "#A7D2B3",
  warning_yellow: "#E6B91E",
  alert_red: "#F93208",
  text_in_box: "#FCFCFC",
  border_gray: "#2E2E3E",
};

const lightTheme: DefaultTheme = {
  colors: {
    ...commonColors,
    background: "#F6F6F6",
    modal_bg: "#FFFFFF",
    text: "#121225",
  },
  fonts: commonFonts,
};

const darkTheme: DefaultTheme = {
  colors: {
    ...commonColors,
    background: "#121225",
    modal_bg: "#202032",
    text: "#F6F6F6",
  },
  fonts: commonFonts,
};

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;

/*
  primary: "#733FF1",
  border_gray: "#2E2E3E",
  box_gray: "#202032",
  warning_yellow: "#E6B91E",
  alert_red: "#F93208",
  valid_green: "#A7D2B3",
  background: "#F6F6F6",
  text: "#121225",
*/

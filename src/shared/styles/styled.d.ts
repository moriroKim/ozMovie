// src/shared/styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      valid_green: string;
      warning_yellow: string;
      alert_red: string;
      text_in_box: string;
      border_gray: string;
      background: string;
      modal_bg: string;
      text: string;
    };
    fonts: {
      lang: {
        korean: string;
        english: string;
      };
      weight: {
        bold: number;
        light_bold: number;
        regular: number;
        thin: number;
        light_thin: number;
      };
    };
  }
}

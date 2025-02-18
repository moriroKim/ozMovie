import { createGlobalStyle } from "styled-components";
import { commonTransition } from "./GlobalTransitions";

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*, *::before, *::after {
	box-sizing: border-box;
	font-family: "Pretendard Variable", Pretendard, "Montserrat", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: inherit;
  }

  &:focus,
  &:active {
    outline: none;
    text-decoration: none;
  }
}
button{
	all: unset;
  display: inline-block;
  cursor: pointer;
}
html, body {
	height: 100%;
	font-size: 62.5%;
	letter-spacing: -0.6px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};

	${commonTransition}
  }


	@media (max-width: 1920px) {
		html {
			font-size: 50%;
		}
	}

	@media (max-width: 1080px) {
		html {
			font-size: 45%;
		}
	}

	@media (max-width: 768px) {
		html {
			font-size: 40%;
		}
	}

	@media (max-width: 468px) {
		html {
			font-size: 35%;
		}
	}
`;

export default GlobalStyles;

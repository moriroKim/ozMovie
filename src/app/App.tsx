import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes";
import theme from "../shared/styles/theme";
import CommonLayout from "./CommonLayout";
import GlobalStyles from "../shared/styles/GlobalStyles";
import { useRecoilValue } from "recoil";
import { darkModeAtom } from "./store/atoms";

const App = () => {
  const isDarkMode = useRecoilValue(darkModeAtom);
  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyles />
      <CommonLayout>
        <AppRoutes />
      </CommonLayout>
    </ThemeProvider>
  );
};

export default App;

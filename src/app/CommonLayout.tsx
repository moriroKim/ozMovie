import Footer from "../shared/ui/Footer";
import Header from "../shared/ui/Header";
import { CommonLayoutProps } from "../shared/types/types";

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;

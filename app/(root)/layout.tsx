import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";

type TLayout = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayout) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

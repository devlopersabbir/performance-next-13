import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

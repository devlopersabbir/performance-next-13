import React from "react";

type TLayout = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayout) => {
  return (
    <>
      navbar
      {children}
      footer
    </>
  );
};

export default Layout;

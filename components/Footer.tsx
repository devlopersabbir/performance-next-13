import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-1 max-md:flex-col">
      <p>Copyright © 2023 ST Sabbir | All Rights Reserved</p>
      <div className="gap-x-9 flex">
        <Link href="#">Terms & conditions</Link>
        <Link href="#">Praivacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;

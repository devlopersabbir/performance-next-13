import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed flex-center top-0 z-50 w-full border-b-2 border-black-200  py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          {/* <Image src="/jsm-logo.svg" alt="LOGO" width={55} height={40} /> */}
          <h1 className="text-3xl">Sabbir</h1>
        </Link>
        <Image
          className="sm:hidden"
          src="/hamburger-menu.svg"
          alt="hamburger menu"
          height={30}
          width={30}
        />
        {/* menu item */}
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_purple-blue !font-bold">
            <Link href="https://youtube.com/c/stsabbir" target="_blank">
              JavaScript Course
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="https://showwcase.com/devlopersabbir" target="_blank">
              ST SABBIR
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

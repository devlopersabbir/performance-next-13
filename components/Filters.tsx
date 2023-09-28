"use client";

import React, { useState } from "react";
import { filterLinks } from "@/constants/__data";

const Filters = () => {
  const [active, setActive] = useState<string>("");

  const handleFilter = (link: string) => {
    setActive(link);
  };
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {filterLinks.map((link: string, index: number) => (
        <li
          key={index}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize cursor-pointer`}
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

export default Filters;

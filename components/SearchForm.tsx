"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "./ui/input";

const SearchForm = () => {
  const [search, setSearch] = useState<string>("");
  console.log(search);
  return (
    <form className="flex-center mx-auto m-10 w-full sm:-mt-10 sm:px-5">
      <label htmlFor="search" className="flex-center relative w-full max-w-3xl">
        <Image
          src="magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="search icon"
        />
        <Input
          id="search"
          className="base-regular h-fit boder-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800 "
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        />
      </label>
    </form>
  );
};

export default SearchForm;

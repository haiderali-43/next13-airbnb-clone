"use client";
import Container from "../Container";
import React from "react";
import Logo from "../Navbar/Logo";
import Search from "../Navbar/Search";
import UserMenu from "../Navbar/UserMenu";
import Categories from "../Navbar/Categories";

const Navbar = ({currentUser}) => {
  console.log(currentUser)
  return (
    <div className="fixed bg-white z-10 shadow-sm w-full">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row item-center justify-between gap-3  md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories/>
    </div>
  );
};

export default Navbar;

/** @format */

"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  {
    label: "Home",
    href: "#"
  },
  {
    label: "About",
    href: "#"
  },
  {
    label: "Services",
    href: "#"
  },
  {
    label: "Contact",
    href: "#"
  },
  {
    label: "Services",
    href: "#"
  }
];
const Navbar = () => {
  const [animationParent] = useAutoAnimate();
  const [showMenu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!showMenu);
  }

  return (
    <nav className="flex w-full max-w-[100%] items-center justify-between px-8 bg-background">
      <section className="flex items-center sm:gap-16 lg:gap-48">
        <div className="logo">
            <Image src="/coastresearch.svg" alt='coast research technology brand logo' width={150} height={50} />
        </div>

        <div className="hidden md:flex my-8 items-center gap-6 text-gray-700 ">
          {navLinks.map((d, i) => (
            <Link key={i} className="hover:opacity-70 slide slide-left relative" href={d.href}>
              {d.label}
            </Link>
          ))}
        </div>
      </section>

      <section className=" hidden md:flex  gap-8 items-center">
        <Link href={"#"} className="hover:opacity-80 font-semibold">
          Login
        </Link>

        <Link
          className="rounded-md bg-[#500480] px-4 py-2 font-semibold text-center text-[14px] text-background hover:opacity-80"
          href={"#"}
        >
          Sign Up
        </Link>
      </section>

      {showMenu && (
        <div className="fixed inset-x-0 top-24 mx-8 flex flex-col items-center rounded-xl bg-#500480 text-white md:hidden z-50">
          <section className=" my-8 flex flex-col items-center gap-6 ">
            {navLinks.map((navlink, i) => (
              <Link key={i} className="hover:opacity-70" href={navlink.href}>
                {navlink.label}
              </Link>
            ))}
          </section>
          <hr className="mx-auto w-[80%] border-gray-600" /> 

          <section className="flex flex-col gap-6 items-center w-full">
            <Link href={"#"} className="hover:opacity-70 font-semibold">
              Login
            </Link>

            <Link
              className="w-[80%] rounded-full bg-Cyan px-6 py-2 font-semibold text-center text-white hover:opacity-50"
              href={"#"}
            >
              Sign Up
            </Link>
          </section>
        </div>
      )}

      <button
        ref={animationParent}
        onClick={toggleMenu}
        className="text-4xl md:hidden text-gray-400 "
      >
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
}

export default Navbar;

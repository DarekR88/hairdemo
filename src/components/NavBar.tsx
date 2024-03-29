"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";
import PhoneSvg from "../../public/icons/phone-svgrepo-com.svg";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed flex flex-col w-screen h-screen z-10 bg-button-primary text-center pt-20 gap-8 ${
          isOpen
            ? "transition ease-in-out translate-y-0 duration-500"
            : "transition ease-in-out -translate-y-full duration-500"
        }`}
      >
        <Link onClick={handleClick} className="text-3xl" href="/">
          Home
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/howitworks">
          How it Works
        </Link> */}
        <Link onClick={handleClick} className="text-3xl" href="/plans&pricing">
          Plans & Pricing
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/programs">
          Programs
        </Link> */}
        {/* <Link onClick={handleClick} className="text-3xl" href="/nutrition">
          Nutrition
        </Link> */}
        {/* <Link onClick={handleClick} className="text-3xl" href="/testimonials">
          Testimonials
        </Link> */}
        <Link onClick={handleClick} className="text-3xl" href="/contact">
          Contact
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/about">
          About
        </Link>
      </div>
      <header className="flex flex-wrap gap-10 py-4 justify-center items-center w-screen lg:flex-row lg:justify-between lg:px-20 lg:h-28 lg:mb-[20px]">
        <Link href={"/"} className="font-Anton flex flex-col tracking-widest text-xl z-0 px-3">
          <p className="text-2xl text-button-primary">INSIGHT</p>
          <p className="text-base">Personal</p>
          <p className="text-base">Training</p>
        </Link>
        <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="lg:hidden"
        >
          <Image src={PhoneSvg} alt="pfp" width={23} />
        </a>
        <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden lg:inline lg:flex"
        >
          <Image src={PhoneSvg} alt="pfp" width={23} />
          <span className="pl-1">Call or Text</span>
        </a>

        <div className="hidden lg:flex gap-6">
          <Link className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center" href="/">
            Home
          </Link>
          <Link className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center" href="/plans&pricing">
            Plans & Pricing
          </Link>
          <Link className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center" href="/contact">
            Contact
          </Link>
          <Link className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center" href="/about">
            About
          </Link>
        </div>
        <div className="flex gap-4 px-2 z-0">
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={InstaIcon} alt="pfp" width={27} />
          </a>
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={FacebookIcon} alt="pfp" width={25} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={XIcon} alt="pfp" width={23} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={TiktokIcon} alt="pfp" width={25} />
          </a> */}
        </div>
        <button
          onClick={handleClick}
          className="inline flex flex-col justify-center items-center z-20 lg:hidden"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
                    }`}
          ></span>
        </button>
      </header>
    </>
  );
}

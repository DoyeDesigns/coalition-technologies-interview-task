"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./components/navBar";
import StickyBar from "./components/stickyBar";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = ["/image1.png", "/image2.png", "/image1.png", "/image2.png"];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const changeSlide = () => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
    const interval = setInterval(changeSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* hero section */}
      <section
        id="hero-section"
        className="{/*bg-hero-img h-[800px]*/} relative"
      >
        <ResponsiveAppBar />
        <Image
          src="/hero-section.jpg"
          width={500}
          height={500}
          alt="hero-section-img"
          className="w-[600px] sm:w-full sm:h-screen"
        />
      </section>

      {/* sticky bar */}
      <section id="sticky-bar" className="sticky top-0 z-50 bg-white">
        <StickyBar />
      </section>

      {/* history section */}
      <section
        id="history-section"
        className="bg-history-section bg-cover bg-center h-[1000px] flex flex-col justify-between relative"
      >
        <div>
          <div className="relative pt-3 mx-auto">
            <h1 className="ml-5 lg:m-0 text-[80px] lg:ml-64 lg:text-[135px] font-bold text-[#657691]">
              01.
            </h1>
            <span
              id="number-letter"
              className="absolute left-[98px] lg:left-[387px] bottom-[35px] lg:bottom-[60px] font-bold text-[20px] lg:text-[32px] text-[#3b485f]"
            >
              HISTORY
            </span>
          </div>
          <p className="max-w-2xl px-2 mx-auto break-words">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.{" "}
          </p>
        </div>

        {/* carousel */}
        <div className="flex flex-col max-w-lg mx-auto gap-3 absolute bottom-1.5 left-[25%] sm:left-[43%] z-40">
          <div className={`flex gap-2 justify-center`}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-[200px] ${
                  index === activeSlide ? "block" : "hidden"
                }`}
              >
                <img
                  src={image}
                  alt={`image ${index + 1}`}
                  className="h-[120px]"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-center">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeSlide ? "bg-[#ffffff]" : "bg-[#b0b0b0]"
                }`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>

        <div className="py-2 bg-[#3b485f] opacity-60 h-40"></div>
      </section>

      {/* 02 team section */}
      <section id="team-section" className="flex justify-center">
        <div className="flex justify-center items-center gap-24 w-[70%] py-6">
          <div className="relative">
            <h1 className="text-[80px] lg:text-[135px] font-bold text-[#a0a7b5]">
              02.
            </h1>
            <span
              id="number-letter"
              className="absolute left-[88px] lg:left-[148px] bottom-[35px] lg:bottom-[60px] font-bold text-[20px] lg:text-[32px] text-[#3b485f]"
            >
              CLIMB
            </span>
          </div>
          <p className="text-[14px] break-words sm:text-[16px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor aenean massa.
          </p>
        </div>
      </section>

      {/* mountain section */}
      <section className="bg-mountain-section bg-cover bg-center h-[550px]">
        <div className="bg-[#3b485f] py-1.5 flex">
          <div className="lg:w-[60%] mx-auto">
            <Link href="" className="active-link py-1.5">
              MOUNTAIN 1
            </Link>
            <Link
              href=""
              className="py-1.5 text-[#b0b4be] hover:text-[#3b485f] hover:bg-[#b0b4be] hover:px-[12px] hover:underline underline-offset-4 ml-4"
            >
              MOUNTAIN 2
            </Link>
          </div>
        </div>
        <div className="bg-white max-w-sm py-5 px-10 flex flex-col justify-center opacity-90 mt-20 mx-5 md:ml-80">
          <h1 className="text-[32px]">SCHEDULE</h1>
          <div>
            <div className="flex gap-8 justify-between">
              <span>25 NOV 2016</span>
              <span>Vestibulum viverra</span>
            </div>
            <div className="flex gap-8 justify-between">
              <span>28 NOV 2016</span>
              <span>Vestibulum viverra</span>
            </div>

            <div className="flex gap-8 justify-between my-5">
              <span>18 DEC 2016</span>
              <span>Vestibulum viverra</span>
            </div>

            <div className="flex gap-8 justify-between">
              <span>7 JAN 2017</span>
              <span>Vestibulum viverra</span>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-[#3b485f] bg-center py-3">
        <div className="flex w-[95%] lg:w-[55%] mx-auto  items-center justify-between opacity-40">
          <div className="flex gap-2 items-center">
            <Image src="/Logo.png" alt="" width={35} height={35} />
            <div
              id="stickyBar-text"
              className="leading-none text-2xl text-[#b0b4be]"
            >
              <span className="tracking-normal">LOSANGELES</span>
              <br />
              <span className="tracking-[.030em]">MOUNTAINS</span>
            </div>
          </div>
          <span className="ml-10 italic text-[12px] md:text-[16px] text-[#b0b4be]">
            COPYRIGHT 2016, ALL RIGHTS RESERVED
          </span>
        </div>
      </footer>
    </main>
  );
};

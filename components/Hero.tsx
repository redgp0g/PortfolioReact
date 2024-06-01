import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SparklesCore } from "./ui/Sparkles";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  flex items-center justify-center absolute top-0 left-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Mágica Dinâmica de Site em Next.js
          </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl mb-5"
              words={"Transformando Conceitos em Experiências Surreais"}
            />
          <div className="w-full">
          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Oi, eu sou Guilherme Gordiano, um Desenvolvedor Web
          </p>
            <div className="relative inset-x-40 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="relative inset-x-60 bottom-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/4 blur-sm" />
            <div className="relative inset-x-60 bottom-1.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/4" />
          </div>

          <a href="#about">
            <MagicButton
              title="Mostrar meu trabalho"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

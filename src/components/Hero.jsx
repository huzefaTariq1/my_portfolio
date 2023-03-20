import React from "react";
import hero from "../assets/images/hero.png";
import Hi from "../assets/images/hi.json"
import Lottie from "lottie-react"
import { Typewriter } from "react-simple-typewriter"
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex pt-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        {/* <img src={hero} alt="" className="md:w-11/12 h-full object-cover" /> */}
        <Lottie animationData={Hi}/>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black font-bold">
            <span className="text-purple-500 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Huzefa Tariq</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          <Typewriter words={[" MERN Stack Developer.", "React Native Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-purple-500 hover:translate-y-2 cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

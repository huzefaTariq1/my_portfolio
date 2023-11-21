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
      {/* <div className="flex-1 flex items-center justify-center h-full">
    
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M61.7,-26C67.4,-2.6,50.8,22.2,29.2,37.1C7.7,51.9,-18.6,56.9,-38.9,44.3C-59.2,31.8,-73.4,1.6,-65.9,-24.3C-58.4,-50.2,-29.2,-71.9,-0.6,-71.7C28,-71.5,56,-49.4,61.7,-26Z" transform="translate(100 100)" />
        </svg>
      </div> */}


      <div className="flex-1 flex items-center justify-center h-full relative">
        <Lottie
          animationData={Hi} // Replace 'Hi' with your actual Lottie animation data
          className="absolute inset-0"
        />
        {/* <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        //  style={{ zIndex: 1 }} // Ensure the SVG is above the Lottie animation
        >
          <path
            fill="#FF0066"
            d="M61.7,-26C67.4,-2.6,50.8,22.2,29.2,37.1C7.7,51.9,-18.6,56.9,-38.9,44.3C-59.2,31.8,-73.4,1.6,-65.9,-24.3C-58.4,-50.2,-29.2,-71.9,-0.6,-71.7C28,-71.5,56,-49.4,61.7,-26Z"
            transform="translate(100 100)"
          />
        </svg> */}
   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#3b82f6" d="M41.4,-69.2C52.6,-65.3,60,-52.1,68.1,-39C76.3,-25.9,85.3,-12.9,81.8,-2.1C78.2,8.8,62.1,17.7,54.1,31C46,44.4,46.1,62.2,38.5,69.8C30.8,77.4,15.4,74.7,-0.3,75.1C-15.9,75.5,-31.9,79.2,-40.7,72.2C-49.4,65.3,-51.1,47.9,-57.8,34.1C-64.6,20.3,-76.4,10.2,-79.2,-1.6C-81.9,-13.3,-75.6,-26.7,-68.6,-40C-61.6,-53.3,-53.9,-66.6,-42.3,-70.4C-30.8,-74.1,-15.4,-68.3,-0.1,-68.1C15.1,-67.8,30.2,-73.2,41.4,-69.2Z" transform="translate(100 100)" />
</svg>
      </div>



      
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black font-bold">
            <span className="text-blue-600 md:text-6xl text-5xl">
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
                className="text-gray-600 hover:text-blue-600 hover:translate-y-2 cursor-pointer "
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



{/* <img src={hero} alt="" className="md:w-11/12 h-full object-cover" /> */}
        {/* <Lottie animationData={Hi}/> */}

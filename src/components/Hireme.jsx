import React from "react";
import hireMe from "../assets/images/hireMe.png";
import aboutImg from "../assets/images/giphy.gif";
import Hi from "../assets/images/hi.json"
import Lottie from "lottie-react"
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-black">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Working <span className="text-purple-500">Experiance</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p> */}
      </div>
      <div className="bg-gray-200 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-10 flex gap-6 lg:flex-row flex-col-reverse items-center">
        {/* <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            soluta quos tempore eos accusamus cupiditate, amet in similique
            sapiente obcaecati odio deleniti architecto corporis ratione.
            Consequatur a quidem maiores!
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div> */}


<ol class="relative border-l break-all border-gray-400 dark:border-gray-700">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -left-3 ring-8 ring-gray-200 dark:ring-gray-900 dark:bg-purple-500">
            <svg aria-hidden="true" class="w-3 h-3 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex justify-between items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Renexcode<span class="bg-purple-100 text-purple-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-purple-300 ml-3">Nov 2021 - jan 2022</span></h3>
        <time class="block mb-2  font-normal leading-none text-gray-400 dark:text-gray-500">MERN & React Native Developer</time>
       
        <ul class=" text-sm text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, atque. Dolor alias doloremque ducimus assumenda, quas, necessitatibus dolorum consequuntur quibusdam dignissimos nihil tempore sed repudiandae fugiat harum consectetur repellendus iusto!
    </li>
    <li>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, atque. Dolor alias doloremque ducimus assumenda, quas, necessitatibus dolorum consequuntur quibusdam dignissimos nihil tempore sed repudiandae fugiat harum consectetur repellendus iusto!
    </li>
 
    </ul>
    </li>

    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -left-3 ring-8 ring-gray-200 dark:ring-gray-900 dark:bg-purple-500">
            <svg aria-hidden="true" class="w-3 h-3 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex justify-between items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Esspfa<span class="bg-purple-100 text-purple-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-purple-300 ml-3">Nov 2021 - jan 2022</span></h3>
        <time class="block mb-2  font-normal leading-none text-gray-400 dark:text-gray-500">Trainee Front-end Developer</time>
       
        <ul class="text-sm text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, atque. Dolor alias doloremque ducimus assumenda, quas, necessitatibus dolorum consequuntur quibusdam dignissimos nihil tempore sed repudiandae fugiat harum consectetur repellendus iusto!
    </li>
    <li>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, atque. Dolor alias doloremque ducimus assumenda, quas, necessitatibus dolorum consequuntur quibusdam dignissimos nihil tempore sed repudiandae fugiat harum consectetur repellendus iusto!
    </li>

    </ul>
    </li>
</ol>


        {/* <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        /> */}
          
      </div>
    </section>
  );
};

export default Hireme;

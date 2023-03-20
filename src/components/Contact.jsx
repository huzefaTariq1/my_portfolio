import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "huzefatariq5@gmail.com" },
    { logo: "logo-whatsapp", text: "+92341-2848955" },
    {
      logo: "location",
      text: "Islambad,Pakistan",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-black">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-purple-500">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-200 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input className="bg-gray-200 border-2 border-purple-500" type="text" placeholder="Your Name" />
            <input className="bg-gray-200 border-2 border-purple-500" type="Email" placeholder="Your Email Address" />
            <textarea className="bg-gray-200 border-2 border-purple-500" placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-purple-500 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

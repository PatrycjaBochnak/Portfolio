import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/lbkmlljb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <div className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </div>
          <p className="text-gray-300 pt-4">
            Feel free to submit the form below or hit me an up by email -{" "}
            <span className="font-bold">patrycjabochnak@protonmail.com</span>
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="p-2 bg-[#ccd6f6]"
          type="text"
          cols="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;

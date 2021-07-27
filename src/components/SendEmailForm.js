import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaWindowClose } from "react-icons/fa";
import { functionTypeAnnotation } from "@babel/types";

export default function SendEmailForm() {
  const email = useRef();
  const user = useRef();
  const message = useRef();

  const [userMessage, setUserMessage] = useState("message");

  function closeUserMessage() {
    document.getElementById("user-message").classList.add("hidden")
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vgfkrve",
        "template_m519wm6",
        e.target,
        "user_X8kHVVh3FSqfD33H629kx"
      )
      .then(
        (result) => {
          email.current.value = "";
          user.current.value = "";
          message.current.value = "";
          setUserMessage("Thank you your message was sent")
          document.getElementById("user-message").classList.remove("hidden");
          setTimeout(function() {
            document.getElementById("user-message").classList.add("hidden");
            setUserMessage(" ")
          }, 5000);
        },
        (error) => {
          document.getElementById("user-message").classList.remove("hidden");
          setUserMessage("Sorry an error occurred, please try again");
          setTimeout(function() {
            document.getElementById("user-message").classList.add("hidden")
            setUserMessage(" ")
          }, 5000);
        }

      );
  }

  return (
    <>
    <div id="user-message" className="hidden center-absolute border-4 rounded px-6 bg-white py-3 my-3 border-darker-green">{ userMessage }  
     <FaWindowClose onClick={closeUserMessage} size={25} className="m-auto my-4 cursor-pointer" />
     </div>
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="w-full m-auto">
      <input type="hidden" name="contact_number" />
      <label className="text-lg font-bold text-left block">
        Enter your name
      </label>
      <input
        ref={user}
        className="block mb-2 w-full rounded  border-2 border-gray-200 focus:ring-2 focus:ring-yellow-100 focus:outline-none shadow-md"
        type="text"
        name="from_name"
        required
      />
      <label className="text-lg font-bold text-left block">
        Enter your email
      </label>
      <input
        ref={email}
        className="block mb-2 w-full rounded  border-2 border-gray-200 focus:ring-2 focus:ring-yellow-100 focus:outline-none shadow-md"
        type="email"
        name="from_email"
        required
      />
      <label className="text-lg font-bold text-left block">
        Write your message
      </label>
      <textarea
        ref={message}
        className="rounded block mb-2 w-full h-48 resize-none border-2 border-gray-200 focus:ring-2 focus:ring-yellow-100 focus:outline-none shadow-md"
        name="message"
        required
      />
       <div className="my-8 pt-8 relative ">
            <button type="submit" className="no-bg-gradient green-gradient rounded-lg py-3 px-16 font-bold hover-medium-green shadow-xl center-absolute-xy">
              Send
            </button>
            </div>
            </div>
    </form>
    </>
  );
}

"use client";
import React from "react";
import { Button } from "@/components/Button";

function ContactMe() {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8696291b-0cee-480b-bf4e-5e16c90ca01c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json();
      console.log(data);
      } catch (error) {
        console.error(error);
        }
 
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Get in Touch with Us!
        </h2>
        <p className="text-lg md:text-xl text-white/70 text-center tracking-tight mt-5 max-w-2xl mx-auto">
          Have a question or need more information? Feel free to reach out and
          we will get back to you soon!
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 max-w-lg mx-auto bg-white/10 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-3 rounded-md bg-white/10 text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-3 rounded-md bg-white/10 text-white"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full p-3 rounded-md bg-white/10 text-white"
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;

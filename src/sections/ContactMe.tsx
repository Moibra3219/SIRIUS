"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";

function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key",  "8696291b-0cee-480b-bf4e-5e16c90ca01c");

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

      if (data.success) {
        setSubmissionMessage("Message sent successfully!");
        event.currentTarget.reset();
      } else {
        setSubmissionMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmissionMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-24" id="contact" >
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Get in Touch with Us!
        </h2>
        <p className="text-lg md:text-xl text-white/70 text-center tracking-tight mt-5 max-w-2xl mx-auto">
          Have a question or need more information? Feel free to reach out and
          we will get back to you soon!
        </p>

        {submissionMessage && (
          <div className={`
            text-center mt-4 p-3 rounded 
            ${submissionMessage.includes("successfully") 
              ? "bg-green-500 text-white" 
              : "bg-red-500 text-white"}
          `}>
            {submissionMessage}
          </div>
        )}

        <form
          onSubmit={sendMessage}
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
            <Button 
              type="submit" 
              className="w-full md:w-auto" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
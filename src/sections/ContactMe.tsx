"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/Button";

export const ContactMe = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
    const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitted(false);
      setIsLoading(true);
      setErrorMessage(null);
  
      const form = e.target as HTMLFormElement;
 
      try {
        await emailjs.sendForm('service_1jcq632', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID');
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error sending email:", error);
        setErrorMessage("There was an error sending your message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <section className="py-20 md:py-24">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
            Get in Touch with Us!
          </h2>
          <p className="text-lg md:text-xl text-white/70 text-center tracking-tight mt-5 max-w-2xl mx-auto">
            Have a question or need more information? Feel free to reach out and we will get back to you soon!
          </p>
  
          {isSubmitted ? (
            <div className="mt-10 text-center text-xl font-semibold text-white">
              Thank you for reaching out! We'll get back to you shortly.
            </div>
          ) : (
            <>
              {errorMessage && <div className="mt-5 text-center text-red-500">{errorMessage}</div>}
              <form onSubmit={handleFormSubmit} className="mt-10 max-w-lg mx-auto bg-white/10 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
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
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
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
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    i
                    d="message"
                    className="w-full p-3 rounded-md bg-white/10 text-white"
                    placeholder="Your Message"
                    rows={4}
                    required
                  />
                </div>
  
                <div className="flex justify-center mt-6">
                  <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Submit'}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    );
  };
  
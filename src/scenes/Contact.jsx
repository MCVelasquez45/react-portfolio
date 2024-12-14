import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "3ecc1d5b-73a6-4913-8d87-ba44f6e35b7d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <h2 className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </h2>
          <div className="flex md:justify-end my-5">
            <div className="w-1/2 h-1 bg-gradient-to-r from-yellow to-red"></div>
          </div>
        </div>
      </motion.div>

      {/* Form and Image Section */}
      <div className="md:flex md:justify-between gap-16 mt-10">
        {/* Left Side: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img
            src="../assets/contact-image.jpeg"
            alt="Contact"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="3ecc1d5b-73a6-4913-8d87-ba44f6e35b7d"
            />

            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow"
            />

            {/* Message Input */}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-4 bg-yellow font-semibold text-deep-blue rounded-md shadow-md hover:bg-red hover:text-white transition duration-300"
            >
              Send Message
            </button>
          </form>
          {/* Result Message */}
          <span className="mt-4 block text-center font-semibold text-red">
            {result}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
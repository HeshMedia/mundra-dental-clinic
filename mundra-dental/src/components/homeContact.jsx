import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const HomeContact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      "service_snk1f6a",
      "template_4bybfte",
      formRef.current,
      "K6Pz3ZgmJbzvUzmC1"
    )    
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          alert("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section className="bg-white md:h-[65vh] w-[90vw] my-16 flex justify-center px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-transparent p-6 order-2 md:order-1"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-lg"
                  required
                />
              </div>

              {/* Email & Phone Row */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-lg"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="from_phone"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-lg"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-lg"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-4 text-center">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-block px-8 py-4 md:w-[10vw] bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 hover:scale-105"
                >
                  {isSending ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 py-8 order-1 md:order-2"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-[#213f8e] pb-5"
          >
            CONTACT US
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[2px] w-[300px] bg-gray-800 mb-12"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-[30vw] text-lg text-gray-600 mb-8"
          >
            Contact us for questions, technical assistance, or collaboration opportunities via the contact information provided.
          </motion.p>

          {/* Icons with Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E3EBFE]"
              >
                <Phone className="w-6 h-6 text-[#213f8e]" />
              </motion.div>
              <p className="text-lg text-gray-700">+91123456789</p>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E3EBFE]"
              >
                <a href="mailto:drmundra@gmail.com">
                  <Mail className="w-6 h-6 text-[#213f8e] cursor-pointer" />
                </a>
              </motion.div>
              <a
                href="mailto:drmundra@gmail.com"
                className="text-lg text-gray-700 hover:underline hover:text-blue-700"
              >
                drmundra@gmail.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E3EBFE]"
              >
                <MapPin className="w-6 h-6 text-[#213f8e]" />
              </motion.div>
              <p className="text-lg text-gray-700 hover:text-blue-700 hover:underline">
                <a href="https://maps.app.goo.gl/458vMNuQi8Y2wzhj9" target="_blank" rel="noopener noreferrer"> 
                  24-A, 100 Feet Rd, East Mohan Nagar, <br />Amritsar, Amritsar Cantt., Punjab 143001
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContact;

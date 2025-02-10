import React from "react";
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <section className="bg-white md:h-[60vh] w-[90vw] my-16 flex justify-center px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Contact Form */}
        <div className="bg-transparent p-6">
        <form className="max-w-md mx-auto p-4">
            <div className="space-y-4">
                {/* Name Field */}
                <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-lg"
                />
                </div>

                {/* Email & Phone Row */}
                <div className="flex gap-4">
                <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-lg"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                    <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-lg"
                    />
                </div>
                </div>

                {/* Message Field */}
                <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-lg"
                ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-4 text-center">
                <button
                    type="submit"
                    className="inline-block px-8 py-4 md:w-[10vw] bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 hover:scale-105"
                >
                    Submit
                </button>
                </div>
            </div>
        </form>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-extrabold text-[#213f8e] pb-5">CONTACT US</h2>
        <div className="h-[2px] w-[300px] bg-gray-800 mb-12"></div>
        <p className="md:w-[30vw] text-lg text-gray-600 mb-8">
          Contact us for questions, technical assistance, or collaboration opportunities
          via the contact information provided.
        </p>

        {/* Icons with Contact Info */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E3EBFE]">
              <Phone className="w-6 h-6 text-[#213f8e]" />
            </div>
            <p className="text-lg text-gray-700">+91123456789</p>
          </div>

          {/* Email */}
            <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E3EBFE]">
                <a href="mailto:drmundra@gmail.com">
                <Mail className="w-6 h-6 text-[#213f8e] cursor-pointer" />
                </a>
            </div>
            <a
                href="mailto:drmundra@gmail.com"
                className="text-lg text-gray-700 hover:underline hover:text-blue-700"
            >
                drmundra@gmail.com
            </a>
            </div>

          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E3EBFE]">
              <MapPin className="w-6 h-6 text-[#213f8e]" />
            </div>
            <p className="text-lg text-gray-700 hover:text-blue-700 hover:underline">
                <a href="https://maps.app.goo.gl/458vMNuQi8Y2wzhj9" target="_blank" rel="noopener noreferrer"> 
                24-A, 100 Feet Rd, East Mohan Nagar, Amritsar, Amritsar Cantt., Punjab 143001
                </a>
                </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactPage;

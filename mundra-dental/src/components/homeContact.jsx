import React from "react";

const ContactPage = () => {
  return (
    <section className="bg-white h-screen w-[80vw] flex items-center justify-center px-4 overflow-hidden">
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
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                />
                </div>

                {/* Email & Phone Row */}
                <div className="flex gap-4">
                <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                    <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    />
                </div>
                </div>

                {/* Message Field */}
                <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-4 text-center">
                <button
                    type="submit"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Submit
                </button>
                </div>
            </div>
        </form>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-sm text-gray-700 mb-6">
            Contact us for questions, technical assistance, or collaboration opportunities via the contact information provided.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-orange-500 text-xl">
                <i className="fas fa-phone"></i>
              </span>
              <p className="text-sm text-gray-700">+91 123456789</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-orange-500 text-xl">
                <i className="fas fa-envelope"></i>
              </span>
              <p className="text-sm text-gray-700">mundradental@gmail.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-orange-500 text-xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p className="text-sm text-gray-700">24-A, 100 Feet Rd, East Mohan Nagar, Amritsar, Amritsar Cantt., Punjab 143001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

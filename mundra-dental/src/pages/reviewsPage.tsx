import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/ui/footer";

// Using the same reviews data from homeReviews
const reviews = [
  {
    client: "Gurnoor Kaur",
    review: "I had a wonderful experience at the dental office with Dr. Mundra. From the moment I walked in, the staff was friendly and welcoming, creating a comfortable atmosphere. Dr. Mundra is incredibly skilled and attentive.",
    stars: 5,
    date: "a month ago"
  },
  {
    client: "Sonali Sharma",
    review: "Got my fillings done. The clinic has calm and clean environment. I'm impressed by Dr. Keshav's professionalism and dedication for his patients. He is best at his work. Highly recommended.",
    stars: 5,
    date: "2 months ago"
  },
  {
    client: "Sarabjeet Kaur Virk",
    review: "I highly recommend this dentist! He is incredibly skilled and takes great care to ensure that the experience is pain-free. He is thorough, attentive, and truly makes his patients feel comfortable.",
    stars: 5,
    date: "5 months ago"
  },
  {
    client: "Ranjit Kaur Butter",
    review: "Dr. Keshav Mundra is an exceptional dentist! He is highly skilled, patient, and makes you feel at ease. The clinic is well-equipped,staff is friendly and professional. I'm extremely satisfied with the quality of care.",
    stars: 5,
    date: "6 months ago"
  },
  {
    client: "Amandeep Kaur",
    review: "Excellent experience!!! Dr. Keshav and his team have done a brilliant job with my RCT. I will highly recommend this clinic.",
    stars: 5,
    date: "2 weeks ago"
  },
  {
    client: "Rajbir Singh",
    review: "Had a great experience. Everyone here is very nice and works very professionally specially Keshav sir and Aman mam and Khushi.",
    stars: 5,
    date: "2 months ago"
  },
  {
    client: "Sarthak Chawla",
    review: "Very polite and professional. Dr Keshav is very skilled at hand. I feel he's the best dentist in Amritsar.",
    stars: 5,
    date: "3 months ago"
  },
  {
    client: "Gurmukh Singh",
    review: "I have the best experience with the services and treatment by Dr Keshav Mundra. The staff is very cooperative and humble, hygiene is upto mark. They provide painless treatment. I highly recommend it to all.",
    stars: 5,
    date: "4 months ago"
  },
  {
    client: "Sahil Negi",
    review: "I got my tooth extracted from Dr Keshav Mundra, it was completely painless. If you want best dental treatment I would recommend Mundra dental and implant clinic.",
    stars: 5,
    date: "4 months ago"
  },
  {
    client: "Major Singh",
    review: "Mundra Dental Clinic 100 Feet Road Mohan Nagar Amritsar is hands down the best I've ever been to! I am using their services for the past 5 years during my annual visit from New Zealand.",
    stars: 5,
    date: "2 months ago"
  },
  {
    client: "Bairaj Singh",
    review: "If you're looking for a dentist who combines expertise with genuine compassion for his patients, I highly recommend Dr. Keshav Mundra. You'll be in excellent hands!",
    stars: 5,
    date: "6 months ago"
  },
  {
    client: "Chanpreet Kaur Sandhu",
    review: "After undergoing braces treatment at this dental clinic, I can confidently say it was a truly positive experience. Dr. Mundra explained the treatment plan thoroughly and addressed all my concerns with patience and expertise.",
    stars: 5,
    date: "a year ago"
  },
  {
    client: "Shivam Aggarwal",
    review: "I was having tooth ache they removed my akai daar but I have Very good experience it was highly professional & loving environment.",
    stars: 5,
    date: "4 months ago"
  },
  {
    client: "Gaganjot Singh",
    review: "Very experienced & very Knowledgeable Doctor. Very Humble personality. I wish him luck in future.",
    stars: 5,
    date: "a month ago"
  },
  {
    client: "Prakriti Khanna",
    review: "Oh, Dr. Keshav Mundral I recently had an amazing experience with him. He's a fantastic dentist in Amritsar. Dr. Mundra is not only highly skilled but also very friendly and approachable. He made me feel comfortable throughout the entire visit.",
    stars: 5,
    date: "a year ago"
  },
  {
    client: "Sukrit Singh",
    review: "It was wonderful experience with Mundra dental clinic. Dr keshav is very good in his work. Must visit if anyone have dental concern.",
    stars: 5,
    date: "4 months ago"
  },
  {
    client: "Gurmit Singh Sandhu",
    review: "I was travelling from Canada and had to get teeth checked. What I liked about Dr Keshav is that he listens to you patiently and provides vest possible solution and explains the procedure very well.",
    stars: 5,
    date: "7 months ago"
  },
  {
    client: "Jobandeep Singh",
    review: "Amazing clinic! Reception staff were very welcoming and friendly. Dr. made me feel very relaxed and cared for. He is Very intelligent and experienced doctor .. Best treatment with advance technology... and experienced staff .",
    stars: 5,
    date: "a year ago"
  }
];

// Sample testimonials data with video URLs
const testimonials = [
  {
    name: "Gurnoor Kaur",
    videoUrl: "/testimonials/video1.mp4",
    thumbnail: "/testimonials/1.png",
    description: "Patient testimonial about dental treatment"
  },
  {
    name: "Sonali Sharma",
    videoUrl: "/testimonials/video2.mp4",
    thumbnail: "/testimonials/2.png",
    description: "Patient testimonial about dental treatment"
  },
  {
    name: "Sarabjeet Kaur Virk",
    videoUrl: "/testimonials/video3.mp4",
    thumbnail: "/testimonials/3.png",
    description: "Patient testimonial about dental treatment"
  }
];

const navItems = [
    { label: "Home", href: "/#homehero" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/#homeservices",
      subItems: [
        { label: "Orthodontics", href: "/services/orthodontics" },
        { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
        { label: "Dental Implants", href: "/services/dental-implants" },
        { label: "Teeth Whitening", href: "/services/teeth-whitening" },
        { label: "Extractions", href: "/services/tooth-extractions" },
        { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
        { label: "Full and Partial Dentures", href: "/services/full-and-partial-dentures" },
        { label: "Smile Designing", href: "/services/smile-designing" },
      ],
    },
    { label: "Team", href: "/team" },
    { label: "Contact Us", href: "/#homecontact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: "/path-to-instagram-icon.png" },
    { label: "Google", href: "https://google.com", icon: "/path-to-google-icon.png" },
  ];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={i < rating ? "text-yellow-400" : "text-gray-300"} 
          size={24}
        />
      ))}
    </div>
  );
};

const ReviewsPage = () => {
  // Add scroll to top effect on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);

  return (
    <div className="py-12 bg-white">
      <Navbar navItems={navItems} socialLinks={socialLinks} />
      <div className="container mx-auto px-4 mt-24">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#213f8e] mb-4">
            Reviews and Testimonials
          </h1>
          <div className="h-[2px] w-[300px] bg-gray-800 mx-auto mb-8"></div>
        </motion.div>

        {/* Google Reviews Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <FaGoogle className="text-[#4285F4] text-4xl mr-2" />
            <h2 className="text-3xl font-semibold text-gray-800">Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className=" bg-[#E3EBFE] rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow hover:border-2 hover:border-blue-500"
              >
                <div className="flex items-center mb-4 ml-2">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{review.client}</h3>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.stars} />
                <p className="text-gray-600 mt-3 italic">"{review.review}"</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-9 aspect-h-16 bg-gray-200">
                  {/* Video player with poster/thumbnail */}
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    autoPlay
                    muted
                    loop
                    poster={testimonial.thumbnail}
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default ReviewsPage;

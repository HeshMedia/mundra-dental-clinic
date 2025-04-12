import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

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

const optionsRow1 = {
  type: "loop",
  perPage: 20,
  pagination: false,
  arrows: false,
  drag: "free",
  autoScroll: {
    speed: 1.1,
    pauseOnHover: true,
  },
  breakpoints: {
    640: {
      perPage: 40,
      speed: 4,
    },
    1024: {
      perPage: 40,
      speed: 4,
    },
  },
};

const optionsRow2 = {
  ...optionsRow1,
  autoScroll: {
    speed: -1.2,
    pauseOnHover: true,
  },
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-1">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={i < rating ? "text-yellow-400" : "text-gray-300"} 
          size={16}
        />
      ))}
    </div>
  );
};

const HomeReviews = () => {
  return (
    <section id="reviews" className="py-12 bg-white overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-[98vw] px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-[#213f8e] pb-5"
        >
          Client Reviews
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-[2px] w-[300px] bg-gray-800 mb-8"
        />
        {/* Row 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Splide options={optionsRow1} extensions={{ AutoScroll }}>
            {reviews.map((review, index) => (
              <SplideSlide key={`row1-${index}`}>
                <div className="flex-none w-full md:max-w-[540px] max-w-[90vw] bg-[#E3EBFE] md:p-3 p-2 rounded-lg shadow-md text-center md:h-[20vh] h-[18vh] flex flex-col hover:border-2 hover:border-blue-500 mx-0.5">
                  <div className="flex flex-col items-center mb-2">
                    <p className="font-bold text-lg pt-2 text-[#3975FA]">
                      {review.client}
                    </p>
                    <StarRating rating={review.stars} />
                    <p className="text-xs text-gray-500 mb-1">{review.date}</p>
                  </div>
                  <p className="italic text-sm text-gray-600 overflow-hidden line-clamp-4">
                    "{review.review}"
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
        {/* Row 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6"
          id="homecontact"
        >
          <Splide options={optionsRow2} extensions={{ AutoScroll }}>
            {reviews.map((review, index) => (
              <SplideSlide key={`row2-${index}`}>
                <div className="flex-none w-full md:max-w-[510px] max-w-[90vw] bg-[#E3EBFE] md:p-3 p-2 rounded-lg shadow-md text-center md:h-[20vh] h-[19vh] flex flex-col hover:border-2 hover:border-blue-500 mx-0.5">
                  <div className="flex flex-col items-center mb-2">
                    <p className="font-bold pt-2 text-lg text-[#3975FA]">
                      {review.client}
                    </p>
                    <StarRating rating={review.stars} />
                    <p className="text-xs text-gray-500 mb-1">{review.date}</p>
                  </div>
                  <p className="italic text-sm text-gray-600 overflow-hidden line-clamp-4">
                    "{review.review}"
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeReviews;
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const reviews = [
    {
      client: "John Smith",
      review:
        "The experience was absolutely fantastic. Everything exceeded my expectations!",
    },
    {
      client: "Emma Johnson",
      review:
        "Superb service and attention to detail. I’m beyond satisfied with the results!",
    },
    {
      client: "Michael Brown",
      review:
        "Professional and reliable from start to finish. I couldn’t have asked for more.",
    },
    {
      client: "Sophia Davis",
      review:
        "Everything was handled perfectly. The team’s creativity and dedication are unmatched.",
    },
    {
      client: "James Wilson",
      review:
        "An exceptional experience! Everything was delivered with such precision and care.",
    },
    {
      client: "Olivia Miller",
      review:
        "Absolutely amazing! The service provided was thorough, efficient, and top-notch.",
    },
    {
      client: "William Taylor",
      review:
        "I’m extremely happy with the results. A true example of excellence and dedication.",
    },
    {
      client: "Isabella Moore",
      review:
        "The team did a phenomenal job! I highly recommend them to anyone looking for outstanding service.",
    },
    {
      client: "Henry Anderson",
      review:
        "Such a great experience! Every detail was handled with care and professionalism.",
    },
    {
      client: "Charlotte Thomas",
      review:
        "Fantastic service! I’m so pleased with the outcome and the personalized attention I received.",
    },
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
    }
  },
};

const optionsRow2 = {
  ...optionsRow1,
  autoScroll: {
    speed: -1.2,
    pauseOnHover: true,
  },
};

const HomeReviews = () => {
  return (
    <section id="reviews" className="py-12 bg-white overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-[98vw] px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#213f8e] pb-5">
          Client Reviews
        </h2>
        <div className="h-[2px] w-[300px] bg-gray-800 mb-8"></div>
        {/* Row 1 */}
        <Splide options={optionsRow1} extensions={{ AutoScroll }}>
          {reviews.map((review, index) => (
            <SplideSlide key={`row1-${index}`}>
              <div className="flex-none w-full md:max-w-[510px] max-w-[90vw] bg-[#E3EBFE] md:p-6 p-2 rounded-lg shadow-md text-center md:h-[20vh] h-[18vh] flex flex-col hover:border-2 hover:border-blue-500">
                <div className="flex flex-col items-center mb-6">
                  <p className="font-bold text-lg mb-1 text-[#3975FA]">
                    {review.client}
                  </p>
                </div>
                <p className="italic text-sm text-gray-600 overflow-hidden line-clamp-4">
                  "{review.review}"
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        {/* Row 2 */}
        <Splide options={optionsRow2} extensions={{ AutoScroll }} className="mt-6">
          {reviews.map((review, index) => (
            <SplideSlide key={`row2-${index}`}>
              <div className="flex-none w-full md:max-w-[510px] max-w-[90vw] bg-[#E3EBFE] md:p-6 p-2 rounded-lg shadow-md text-center md:h-[20vh] h-[18vh] flex flex-col hover:border-2 hover:border-blue-500">
                <div className="flex flex-col items-center mb-6">
                  <p className="font-bold text-lg mb-1 text-[#3975FA]">
                    {review.client}
                  </p>
                </div>
                <p className="italic text-sm text-gray-600 overflow-hidden line-clamp-4">
                  "{review.review}"
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default HomeReviews;

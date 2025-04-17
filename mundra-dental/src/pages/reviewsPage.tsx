import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/ui/footer";
import WhatsApp from "../components/ui/whatsapp";

// Interface for API response
interface ReviewerInfo {
  profilePhotoUrl: string;
  displayName: string;
}

interface ReviewReply {
  comment: string;
  updateTime: string;
}

interface Review {
  reviewId: string;
  reviewer: ReviewerInfo;
  starRating: number;
  comment: string;
  createTime: string;
  updateTime: string;
  reviewReply?: ReviewReply;
}

interface ApiResponse {
  success: boolean;
  totalReviewCount: number;
  averageRating: number;
  reviews: Review[];
}

// Sample testimonials data with video URLs
const testimonials = [
  {
    name: "Gurnoor Kaur",
    videoUrl: "/testimonials/video1.mp4",
    thumbnail: "/testimonials/thumbnail.png",
    description: "Patient testimonial about dental treatment"
  },
  {
    name: "Sonali Sharma",
    videoUrl: "/testimonials/video2.mp4",
    thumbnail: "/testimonials/thumbnail.png",
    description: "Patient testimonial about dental treatment"
  },
  {
    name: "Sarabjeet Kaur Virk",
    videoUrl: "/testimonials/video3.mp4",
    thumbnail: "/testimonials/thumbnail.png",
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

// Helper function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays <= 7) {
    return "a week ago";
  } else if (diffDays <= 14) {
    return "2 weeks ago";
  } else if (diffDays <= 30) {
    return "a month ago";
  } else if (diffDays <= 60) {
    return "2 months ago";
  } else if (diffDays <= 150) {
    return Math.floor(diffDays / 30) + " months ago";
  } else {
    return "a year ago";
  }
};

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleReviews, setVisibleReviews] = useState(9);

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://featurable.com/api/v1/widgets/0c362587-5a69-41fd-b697-c2a322abfd6a");
        
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        
        const data: ApiResponse = await response.json();
        // Filter only 5-star reviews
        const fiveStarReviews = data.reviews.filter(review => review.starRating === 5);
        setReviews(fiveStarReviews);
        setLoading(false);
      } catch (err) {
        setError("Failed to load reviews. Please try again later.");
        setLoading(false);
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  // Load more reviews
  const handleSeeMore = () => {
    setVisibleReviews(reviews.length);
  };

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

          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading reviews...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.slice(0, visibleReviews).map((review, index) => (
                  <motion.div
                    key={review.reviewId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-[#E3EBFE] rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow hover:border-2 hover:border-blue-500 flex flex-col h-[280px]"
                  >
                    <div className="mb-2">
                      <h3 className="font-semibold text-lg text-gray-800">{review.reviewer.displayName}</h3>
                      <p className="text-xs text-gray-500">{formatDate(review.createTime)}</p>
                    </div>
                    <StarRating rating={review.starRating} />
                    <div className="mt-3 overflow-y-auto flex-grow">
                      <p className="text-gray-600 italic">{review.comment}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {visibleReviews < reviews.length && (
                <div className="text-center mt-8">
                  <button 
                    onClick={handleSeeMore}
                    className="bg-[#213f8e] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    See More
                  </button>
                </div>
              )}
            </>
          )}
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
        <WhatsApp />
      </div>
    </div>
  );
};

export default ReviewsPage;

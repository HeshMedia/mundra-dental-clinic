import homeaboutpic from "../assets/homeaboutpic.jpg";

const HomeAbout = () => {
  return (
    <div className="w-full">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 md:pr-10 gap-8 md:pt-0 pt-5">
            {/* Left Image*/}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full">
                <img 
                  className="w-full md:w-[50vw] h-[380px] md:h-screen object-cover rounded-md border-4 hover:border-blue-500 border-gray-500 md:border-0 transition-all"
                  src={homeaboutpic} 
                  alt="Dr Mundra Clinic, Amritsar" 
                />
              </div>
            </div>
            {/* Right Content */}
            <div className="md:w-1/2 flex flex-col md:items-start md:mr-10 md:pl-10 ">
              <h1 className="text-[#213f8e] font-extrabold text-4xl pb-5 md:text-5xl md:leading-tight">
              Your Trusted Partner
              in Oral Health
              </h1>
              <div className="h-[2px] w-[170px] bg-gray-800 md:mt-5"></div>
              <p className="pt-4 text-2xl text-gray-700 font-semibold md:pr-8 md:mt-5">
              At Mundra Dental Clinic, we believe in delivering
              exceptional dental care with precision and
              compassion. With years of experience and the
              latest technology, our expert team offers a wide
              range of treatments.
              </p>
              <p className="pt-2 text-2xl text-gray-700 font-semibold md:pr-8 md:mt-5">
              Our mission is to provide pain-free, high-quality
              dental services in a comfortable environment,
              ensuring every patient leaves with a confident
              smile.
              </p>
            </div>
          </section>
        </div>
  )
}

export default HomeAbout
import homeheropic from "../assets/homeheropic.jpg";

const HomeHero = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 md:pl-10 pb-8 md:pb-0 gap-8 pt-32 md:pt-0 ">
        {/* Left Content - Order first on desktop */}
        <div className="md:w-1/2 flex flex-col md:items-start">
          {/* <img
            src={} 
            alt="Teeth"
            className="w-40 h-14 md:w-52 md:h-16"
           /> */}
          <h1 className="text-[#213f8e] font-extrabold text-4xl pb-5 md:text-5xl md:leading-tight md:ml-10">
            Your smile, our passion – experience dentistry like never before!
          </h1>
          <div className="h-[2px] w-[150px] bg-gray-800 md:ml-10"></div>
          <p className="pt-4 text-2xl text-gray-700 font-semibold md:pr-8 md:ml-10">
            Providing advanced dental solutions with a gentle touch. From
            preventive care to implants, we ensure your best smile.
          </p>
          <button className="bg-[#213f8e] text-white font-semibold px-6 py-3 rounded-3xl hover:bg-blue-600 hover:scale-105 transition-colors mt-8 md:mt-12 md:text-xl md:px-4 md:py-4 md:ml-10 w-[20vh] md:w-[27vh]">
            Book Appointment
          </button>
        </div>

        {/* Right Image - Order second on desktop */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full">
            <img 
              className="w-full h-[320px] md:h-screen object-cover rounded-md border-4 hover:border-blue-500 border-gray-500 md:border-0 transition-all"
              src={homeheropic} 
              alt="Dentist with patient" 
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeHero
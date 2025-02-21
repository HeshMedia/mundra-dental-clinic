import React from 'react';

const Team = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-[#E3EBFE] py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#213f8e]">
          Team of Doctors
        </h1>
        <hr className="mt-4 w-48 h-1 bg-gray-700 mx-auto" />
      </div>

      {/* Doctor Card */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-8 mt-16 mb-16 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300">
        {/* Basic Info Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          {/* Text Section */}
          <div className="md:w-[70vw]">
            <h2 className="text-4xl font-bold text-[#213f8e]">Dr. Keshav Mundra</h2>
            <p className="text-gray-600 pt-2">
              BDS, MDS Consultant Oral and Maxillofacial Prosthodontist and
              Implantologist.
            </p>
            <p className="mt-8 text-gray-700">
              Dr. Keshav Mundra, a specialist in prosthodontics, excels in dental
              implants, full-mouth rehabilitation, and smile makeovers. With
              expertise in restorative and cosmetic dentistry, he provides
              personalised care focused on aesthetics and functionality.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
            {/* Replace the src with the actual path to your doctor's image */}
            <img
              src="team/mundra.JPG"
              alt="Dr. Keshav Mundra"
              className="w-48 h-60 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 space-y-6">
          {/* Qualification */}
          <div>
            <h3 className="text-xl font-semibold text-[#213f8e]">Qualification</h3>
            <p className="text-gray-700 mt-2">
              B.D.S, Genesis Institute of Dental Sciences and Research, Ferozepur under Baba Farid University of Health Sciences, Faridkot (2005-2010)
            </p>
            <p className="text-gray-700 mt-2">
              M.D.S (Dept of Prosthodontics Including Crown and Bridge And Implantology), 
              College of Dental Sciences, Davangere Under Rajiv Gandhi University of 
              Health Sciences, Bangalore, Karnataka (2011-2014).
            </p>
          </div>

          {/* Publication */}
          <div>
            <h3 className="text-xl font-semibold text-[#213f8e]">Publication</h3>
            <p className="text-gray-700 mt-2">
              A comparative study to Evaluate the Effect of Polyethylene and 
              Polypropylene Fibers Reinforcement on the Flexural Strength of 
              Dentures Base Resin – An In Vitro Study – Global Journal For Research Analysis.
            </p>
          </div>

          {/* Regd. No. */}
          <div>
            <h3 className="text-xl font-semibold text-[#213f8e]">Regd. No.</h3>
            <p className="text-gray-700 mt-2">Regd. No. – 7631-A</p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold text-[#213f8e]">Experience</h3>
            <p className="text-gray-700 mt-2">8 Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

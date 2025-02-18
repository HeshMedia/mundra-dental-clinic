import PropTypes from 'prop-types';
import WhatsApp from './ui/whatsapp';
import Footer from './ui/footer';

const ServiceLayout = ({ 
  title, 
  description,
  contentSections,
  beforeAfterImages,
  heroImage,
  imagePosition = 'left' 
}) => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      {/* Hero Section */}
      <section className="bg-[#E3EBFE] p-8 rounded-lg shadow-md mb-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">{title}</h1>
        <hr className="w-48 h-1 bg-gray-700 mx-auto my-4" />
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <p className="text-lg pt-10 text-gray-600 mb-8 max-w-4xl">
            {description}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="space-y-8">
        {contentSections.map((section, index) => (
          <section
          key={index}
          className="bg-[#E3EBFE] p-16 rounded-lg shadow-md mb-8"
        >
          {/* Main two-column content */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">
                {section.title}
              </h2>
              <div className="pt-10 space-y-4 text-gray-600">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
        
            <div
              className={`w-full md:w-1/2 ${
                imagePosition === 'right' ? 'md:order-2' : ''
              }`}
            >
              {heroImage && index === 0 && (
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>
        
          {/* Book Appointment + Before/After Images BELOW the two-column content */}
          {index === contentSections.length - 1 && (
            <div className="mt-8 w-full flex flex-col md:flex-row gap-6 items-start">
              {/* Book Appointment Button */}
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 w-full md:w-auto">
                Book Appointment
              </button>
        
              {/* Before/After Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 w-full">
                {beforeAfterImages.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Before/After ${imgIndex + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {/* Labels */}
                    {imgIndex % 2 === 0 ? (
                      <span className="absolute bottom-0 left-0 bg-white text-gray-600 px-4 py-2 rounded-tr-lg">
                        BEFORE
                      </span>
                    ) : (
                      <span className="absolute bottom-0 right-0 bg-white text-gray-600 px-4 py-2 rounded-tl-lg">
                        AFTER
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
cd         
        ))}
      </div>

      {/* Footer and WhatsApp */}
      <Footer />
      <WhatsApp />
    </div>
  );
};

ServiceLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contentSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired,
  beforeAfterImages: PropTypes.arrayOf(PropTypes.string),
  heroImage: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right'])
};

export default ServiceLayout;
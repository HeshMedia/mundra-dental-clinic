import ServiceLayout from '../components/serviceLayout';

const SmileDesigning = () => {
  return (
    <ServiceLayout
      title="Smile Designing"
      description="At Mundra Dental Clinic, we offer customized smile designing treatments to enhance your smile and boost your confidence."
      contentSections={[
        {
          title: "What is Smile Designing?",
          content: [
            "Smile designing is a specialized cosmetic dental procedure that focuses on improving the aesthetics of your smile by addressing issues like discolored, misaligned, chipped, or unevenly spaced teeth. This treatment is tailored to an individual's facial structure, dental health, and personal preferences to create a balanced, symmetrical, and beautiful smile.",
            "At Mundra Dental Clinic, we use advanced digital technology and precise treatment planning to design smiles that not only look stunning but also function optimally. Our smile designing process may involve teeth whitening, veneers, orthodontics, gum contouring, or dental bonding, depending on the patient's needs."
          ]
        },
        {
          title: "Why Choose Smile Designing?",
          content: [
            "A confident smile can have a significant impact on self-esteem and overall appearance. Smile designing enhances facial aesthetics, restores dental symmetry, and improves oral functionality. This procedure is perfect for individuals who want to correct imperfections and achieve a more youthful, harmonious smile.",
            "At Mundra Dental Clinic, our team of experts ensures that your smile transformation is carried out with precision and care. We use the latest techniques and high-quality materials to create natural-looking results. Whether you want a subtle enhancement or a complete smile makeover, we are here to help you achieve your dream smile."
          ]
        }
      ]}
      heroImage={'/services/smile.jpg'}
    />
  );
};

export default SmileDesigning;

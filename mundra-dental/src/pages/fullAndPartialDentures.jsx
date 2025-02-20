import ServiceLayout from '../components/serviceLayout';

const FullAndPartialDentures = () => {
  return (
    <ServiceLayout
      title="Full & Partial Dentures"
      description="At Mundra Dental Clinic, we provide high-quality full and partial dentures to restore your smile and improve oral functionality."
      contentSections={[
        {
          title: "What are Full & Partial Dentures?",
          content: [
            "Dentures are removable dental appliances used to replace missing teeth and restore function and aesthetics. Full dentures are designed for patients who have lost all their teeth in the upper or lower jaw, while partial dentures are used when some natural teeth remain. These dentures help in improving chewing ability, speech, and overall facial structure by providing support to the cheeks and lips.",
            "Modern dentures are crafted with advanced materials to ensure a comfortable and natural-looking fit. At Mundra Dental Clinic, we customize dentures to match the shape, size, and color of your natural teeth, giving you a confident and seamless smile."
          ]
        },
        {
          title: "Why Choose Full & Partial Dentures?",
          content: [
            "Dentures offer a cost-effective and non-invasive solution for tooth replacement. They help restore oral function, improve facial aesthetics, and prevent remaining teeth from shifting out of position. With proper care, dentures can provide a durable and comfortable solution for missing teeth.",
            "At Mundra Dental Clinic, we focus on providing well-fitted, high-quality dentures that enhance your comfort and confidence. Whether you need a full set of dentures or a partial solution, our expert team will guide you through the process to ensure a perfect fit. Schedule a consultation today to explore the best options for restoring your smile."
          ]
        }
      ]}
      heroImage={'/services/dentures.jpg'}
    />
  );
};

export default FullAndPartialDentures;

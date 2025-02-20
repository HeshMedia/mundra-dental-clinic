import ServiceLayout from '../components/serviceLayout';

const CrownsAndBridges = () => {
  return (
    <ServiceLayout
      title="Ceramic Crowns & Bridges"
      description="At Mundra Dental Clinic, we offer high-quality ceramic crowns and bridges to restore the strength, function, and aesthetics of your smile."
      contentSections={[
        {
          title: "What are Ceramic Crowns & Bridges?",
          content: [
            "Ceramic crowns and bridges are restorative dental solutions designed to replace missing or damaged teeth while maintaining a natural and aesthetic appearance. A crown is a tooth-shaped cap that is placed over a damaged or weakened tooth to restore its strength and function. A bridge, on the other hand, is used to replace one or more missing teeth by anchoring onto adjacent healthy teeth or implants.",
            "Unlike traditional metal-based restorations, ceramic crowns and bridges provide a more natural look, blending seamlessly with your existing teeth. They are durable, stain-resistant, and biocompatible, making them an excellent choice for those seeking a long-lasting and aesthetically pleasing dental restoration."
          ]
        },
        {
          title: "Why Choose Ceramic Crowns & Bridges?",
          content: [
            "Ceramic crowns and bridges offer numerous advantages over traditional restorations. They provide superior aesthetics, as they closely mimic the translucency and color of natural teeth. Additionally, they are metal-free, making them a great option for patients with metal allergies or sensitivities.",
            "At Mundra Dental Clinic, we use the latest dental technology to create customized ceramic crowns and bridges that fit perfectly and function naturally. Our expert team ensures that your restoration is designed with precision, offering both durability and comfort. If you have damaged or missing teeth, schedule a consultation with us to explore the best restoration options for a confident and healthy smile."
          ]
        }
      ]}
      heroImage={'/services/crowns-and-bridges.webp'}
    />
  );
};

export default CrownsAndBridges;

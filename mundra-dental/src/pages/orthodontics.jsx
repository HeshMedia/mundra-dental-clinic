import ServiceLayout from '../components/serviceLayout';

const Orthodontics = () => {
  return (
    <ServiceLayout
      title="Orthodontics"
      description="At Mundra Dental Clinic, we specialize in orthodontic treatments that enhance smiles and improve oral health with precision and care."
      contentSections={[
        {
          title: "What is Orthodontics?",
          content: [
            "Orthodontics is a specialized branch of dentistry that focuses on diagnosing, preventing, and treating misaligned teeth and jaw irregularities. This field primarily deals with correcting issues like crooked teeth, gaps, overbites, underbites, and overcrowding, using appliances such as braces, clear aligners, and retainers. By aligning the teeth and jaws properly, orthodontic treatments not only enhance the aesthetics of a smile but also contribute to better oral function and long-term dental health.",
            "Misaligned teeth can lead to difficulties in chewing, speech problems, and an increased risk of tooth decay and gum disease due to improper cleaning. Orthodontic treatments gradually move teeth into their ideal positions, ensuring a balanced bite and reducing strain on jaw muscles. Whether for children, teenagers, or adults, orthodontic care is a highly effective way to achieve a healthier and more confident smile."
          ]
        },
        {
          title: "Why Choose Orthodontic Treatment?",
          content: [
            "Orthodontic treatment goes beyond aesthetics—it plays a crucial role in maintaining overall dental health. Properly aligned teeth are easier to clean, reducing the risk of cavities and gum disease. Additionally, correcting bite issues can prevent excessive wear on teeth and help avoid jaw discomfort or TMJ disorders. At Mundra Dental Clinic, we offer a range of orthodontic solutions tailored to each patient's needs, including traditional metal braces, ceramic braces, and clear aligners such as Invisalign.",
            "Our experienced orthodontic team ensures that every patient receives personalized care, using the latest advancements in orthodontic technology. Whether you need minor adjustments or comprehensive treatment, we are committed to providing high-quality care in a comfortable and professional setting. Start your journey to a healthier, more confident smile with us today!"
          ]
        }
      ]}
      heroImage={'/services/orthodontics.webp'}
    />
  );
};

export default Orthodontics;

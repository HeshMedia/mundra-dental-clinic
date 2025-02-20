import ServiceLayout from '../components/serviceLayout';

const Whitening = () => {
  return (
    <ServiceLayout
      title="Teeth Whitening"
      description="At Mundra Dental Clinic, we offer professional teeth whitening treatments to brighten your smile and restore confidence."
      contentSections={[
        {
          title: "What is Teeth Whitening?",
          content: [
            "Teeth whitening is a cosmetic dental procedure designed to remove stains and discoloration from teeth, resulting in a brighter and whiter smile. Over time, teeth can become stained due to various factors such as coffee, tea, red wine, smoking, and aging. Professional whitening treatments effectively lighten the shade of your teeth, enhancing their natural appearance.",
            "At Mundra Dental Clinic, we use safe and effective whitening techniques that provide quick and noticeable results. Whether you choose in-office whitening or take-home kits, our treatments are designed to be safe for your enamel while delivering long-lasting brightness. A whiter smile not only boosts confidence but also enhances overall facial aesthetics."
          ]
        },
        {
          title: "Why Choose Professional Teeth Whitening?",
          content: [
            "Unlike over-the-counter whitening products, professional teeth whitening is tailored to your specific needs, ensuring even and consistent results. Our treatments use clinically tested whitening agents that are stronger and more effective than store-bought alternatives, reducing the risk of sensitivity and damage to your teeth.",
            "At Mundra Dental Clinic, we provide customized whitening solutions to help you achieve your desired shade safely and effectively. Whether you're preparing for a special occasion or simply want to rejuvenate your smile, our team is dedicated to giving you the best results with minimal discomfort. Schedule a consultation today and let us help you achieve a brighter, more radiant smile!"
          ]
        }
      ]}
      heroImage={'/services/whitening.webp'}
    />
  );
};

export default Whitening;

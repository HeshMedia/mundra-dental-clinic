import ServiceLayout from '../components/serviceLayout';

const Extractions = () => {
  return (
    <ServiceLayout
      title="Teeth Extractions"
      description="At Mundra Dental Clinic, we provide safe and painless tooth extraction procedures to protect your oral health."
      contentSections={[
        {
          title: "What is Tooth Extraction?",
          content: [
            "Tooth extraction is a dental procedure in which a tooth is removed from its socket in the jawbone. This is usually done when a tooth is severely damaged, decayed, or impacted and cannot be saved with restorative treatments like fillings or root canals. Extractions may also be necessary to resolve overcrowding, prepare for orthodontic treatment, or remove wisdom teeth that are causing pain or alignment issues.",
            "Our experienced team at Mundra Dental Clinic ensures that the extraction process is as comfortable and painless as possible. We use modern anesthesia techniques and minimally invasive methods to reduce discomfort and promote faster healing. Whether you need a simple extraction or a surgical removal, our goal is to protect your oral health while making the procedure stress-free."
          ]
        },
        {
          title: "When is a Tooth Extraction Necessary?",
          content: [
            "A tooth may need to be extracted in cases of severe decay, infection, gum disease, or trauma that makes restoration impossible. Impacted wisdom teeth, which do not fully emerge or grow at an incorrect angle, often require removal to prevent pain, swelling, and complications.",
            "At Mundra Dental Clinic, we carefully evaluate each patient's condition before recommending an extraction. Our priority is to preserve your natural teeth whenever possible, but when removal is necessary, we ensure a smooth procedure with post-extraction care guidelines to promote healing. If you're experiencing severe tooth pain or discomfort, consult with us to determine the best course of action for your dental health."
          ]
        }
      ]}
      heroImage={'/services/extraction.webp'}
    />
  );
};

export default Extractions;

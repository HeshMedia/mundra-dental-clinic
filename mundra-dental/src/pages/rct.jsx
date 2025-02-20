import ServiceLayout from '../components/serviceLayout';

const Rct = () => {
  return (
    <ServiceLayout
      title="Root Canal Treatment (RCT)"
      description="At Mundra Dental Clinic, we specialize in painless and effective root canal treatments to save and restore damaged teeth."
      contentSections={[
        {
          title: "What is Root Canal Treatment (RCT)?",
          content: [
            "Root Canal Treatment (RCT) is a dental procedure designed to save a severely infected or decayed tooth by removing the infected pulp and sealing it to prevent further damage. The pulp, located inside the tooth, contains nerves and blood vessels that can become inflamed due to deep cavities, cracks, or repeated dental procedures. If left untreated, this infection can spread, causing severe pain, abscess formation, and even tooth loss.",
            "During an RCT, the infected pulp is carefully removed, and the inside of the tooth is cleaned, disinfected, and filled with a biocompatible material. The tooth is then sealed with a filling or a crown to restore its strength and function. This procedure not only eliminates pain but also helps preserve the natural tooth, avoiding the need for extraction."
          ]
        },
        {
          title: "Why Choose Root Canal Treatment?",
          content: [
            "Root canal treatment is a highly effective way to relieve tooth pain and save a natural tooth from extraction. Modern RCT techniques, combined with local anesthesia, make the procedure virtually painless. It restores normal chewing function, prevents the spread of infection, and maintains the natural alignment of teeth, avoiding complications associated with tooth loss.",
            "At Mundra Dental Clinic, we ensure a comfortable and precise root canal experience using advanced technology and expert care. Our team is dedicated to making the procedure as smooth as possible while ensuring long-term dental health. If you're experiencing severe tooth pain or sensitivity, RCT might be the best solution to preserve your smile."
          ]
        }
      ]}
      heroImage={'/services/rct.jpg'}
    />
  );
};

export default Rct;

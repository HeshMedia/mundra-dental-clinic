import ServiceLayout from '../components/serviceLayout';

const DentalImplants = () => {
  return (
    <ServiceLayout
      title="Dental Implants"
      description="At Mundra Dental Clinic, we believe in delivering exceptional dental care with precision and compassion."
      contentSections={[
        {
          title: "What are Dental Implants?",
          content: [
            "Dental Implants are metal posts or frames that are surgically positioned into the jawbone beneath your gums.",
            "Once in place, they allow your dentist to mount replacement teeth onto them."
          ]
        },
        {
          title: "Why Dental Implants?",
          content: [
            "Because implants fuse to your jawbone, they provide stable support for artificial teeth. Dentures and bridges mounted to implants won't slip or shift in your mouth - an especially important benefit when eating and speaking. This secure fit helps the dentures and bridges - as well as individual crowns placed over implants - feels more natural than conventional bridges or dentures.",
            "For some people, ordinary bridges and dentures are simply not comfortable or even possible, due to sore spots, poor ridges or gagging. In addition, ordinary bridges must be attached to teeth on either side of the space left by the missing tooth. An advantage of implants is that no adjacent teeth need to be prepared or ground down to hold your new replacement tooth/teeth in place.",
            "To receive implants, you need to have healthy gums and adequate bone to support the implant. You must also commit to keeping these structures healthy. Meticulous oral hygiene and regular dental visits are critical to the long term success of dental implants.",
            "Our Team at Mundra dental and Implant clinic collectively focuses on rendering the patient with paramount service as implantation is carried out in the safest and most effective manner as possible. We incorporate the latest equipment and fathom the best methods and techniques of performing implantation."
          ]
        }
      ]}
      beforeAfterImages={[
        '/services/implants-before.jpg',
        '/services/implants-after.jpg'
      ]}
      heroImage={'/services/implants.jpg'}
      imagePosition='right'
    />
  );
};

export default DentalImplants;
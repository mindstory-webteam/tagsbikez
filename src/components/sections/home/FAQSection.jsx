"use client";
import { useState } from "react";
import AnimatedBtn from "@/components/AnimatedBtn";

const defaultFaqs = [
  {
    id: 1,
    question: "Which Royal Enfield model should I choose?",
    answer:
      "It depends on your riding style. For city rides, models like Hunter or Classic are ideal. For long touring, Himalayan or Interceptor are better choices due to comfort and performance.",
  },
  {
    id: 2,
    question: "What is the mileage of Royal Enfield bikes?",
    answer:
      "Most Royal Enfield bikes offer mileage between 30–40 km/l depending on the model, riding style, and road conditions.",
  },
  {
    id: 3,
    question: "Is Royal Enfield good for long rides?",
    answer:
      "Yes, Royal Enfield bikes are well known for touring. Models like Himalayan and Meteor are specifically designed for long-distance comfort and stability.",
  },
  {
    id: 4,
    question: "Are spare parts easily available?",
    answer:
      "Yes, spare parts are widely available across India through authorized service centers and local markets.",
  },
  {
    id: 5,
    question: "What documents are required to buy a bike?",
    answer:
      "You will need a valid ID proof, address proof, PAN card, and a driving licence. For financed purchases, income proof may also be required.",
  },
  {
    id: 6,
    question: "Can I take a test ride before buying?",
    answer:
      "Yes, all authorized dealerships offer test rides so you can experience the bike before making a decision.",
  },
];

const locationData = {
  Chalakudy: {
    heading: "Chalakudy Royal Enfield FAQs",
    subtext: "Find answers to all your questions about purchasing and servicing your motorcycle at TagsBikez Chalakudy.",
    faqs: [
      { id: 1, question: "How can I book a Royal Enfield test ride in Chalakudy?", answer: "You can book a Royal Enfield test ride in Chalakudy by contacting TagsBikez through phone, WhatsApp, or the website." },
      { id: 2, question: "Can I service my Royal Enfield at TagsBikez Chalakudy?", answer: "Yes, you can contact TagsBikez Chalakudy for Royal Enfield service support and availability details." },
      { id: 3, question: "Are genuine Royal Enfield spare parts available in Chalakudy?", answer: "Yes, TagsBikez Chalakudy can help you enquire about genuine Royal Enfield spare parts for your motorcycle." },
      { id: 4, question: "Can I buy Royal Enfield accessories at the Chalakudy showroom?", answer: "Yes, you can enquire about Royal Enfield accessories at TagsBikez Chalakudy based on your bike model and needs." },
      { id: 5, question: "Are EMI options available for Royal Enfield bikes in Chalakudy?", answer: "Yes, TagsBikez Chalakudy can guide you with EMI and finance options for Royal Enfield bike purchases." },
      { id: 6, question: "How long does Royal Enfield bike delivery take?", answer: "Delivery time depends on model availability, booking status, registration, and showroom updates." },
      { id: 7, question: "Can I contact the Chalakudy showroom through WhatsApp?", answer: "Yes, you can use WhatsApp to enquire about models, test rides, accessories, finance, and delivery updates." },
      { id: 8, question: "Does TagsBikez Chalakudy provide delivery support?", answer: "Yes, the team assists with booking updates, documentation, registration guidance, and delivery coordination." },
      { id: 9, question: "Which Royal Enfield bike is best for me?", answer: "TagsBikez Chalakudy can help you choose the right Royal Enfield based on your riding style, budget, and comfort." }
    ]
  },
  Irinjalakuda: {
    heading: "Irinjalakuda Showroom FAQs",
    subtext: "Got questions? We have answers. Learn more about buying your dream Royal Enfield in Irinjalakuda.",
    faqs: [
      { id: 1, question: "How can I book a Royal Enfield test ride in Irinjalakuda?", answer: "You can book a Royal Enfield test ride in Irinjalakuda by contacting TagsBikez through phone, WhatsApp, or the website." },
      { id: 2, question: "Can I service my Royal Enfield at TagsBikez Irinjalakuda?", answer: "Yes, you can contact TagsBikez Irinjalakuda for Royal Enfield service support and availability details." },
      { id: 3, question: "Are genuine Royal Enfield spare parts available in Irinjalakuda?", answer: "Yes, TagsBikez Irinjalakuda can help you enquire about genuine Royal Enfield spare parts for your bike." },
      { id: 4, question: "Can I buy Royal Enfield accessories at the Irinjalakuda showroom?", answer: "Yes, you can enquire about Royal Enfield accessories at TagsBikez Irinjalakuda based on your model and needs." },
      { id: 5, question: "Are EMI options available for Royal Enfield bikes in Irinjalakuda?", answer: "Yes, TagsBikez Irinjalakuda can guide you with EMI and finance options for Royal Enfield purchases." },
      { id: 6, question: "How long does Royal Enfield bike delivery take?", answer: "Delivery time depends on model availability, booking status, registration, and showroom updates." },
      { id: 7, question: "Can I contact the Irinjalakuda showroom through WhatsApp?", answer: "Yes, you can use WhatsApp to enquire about models, test rides, accessories, finance, and delivery updates." },
      { id: 8, question: "Does TagsBikez Irinjalakuda provide delivery support?", answer: "Yes, the team assists with booking updates, documentation, registration guidance, and delivery coordination." },
      { id: 9, question: "Which Royal Enfield bike is best for me?", answer: "TagsBikez Irinjalakuda can help you choose the right Royal Enfield based on your riding style, comfort, and budget." }
    ]
  },
  Kodakara: {
    heading: "Your Kodakara Dealership FAQs",
    subtext: "Everything you need to know about purchasing, servicing, and riding Royal Enfield motorcycles in Kodakara.",
    faqs: [
      { id: 1, question: "How can I book a Royal Enfield test ride in Kodakara?", answer: "You can book a Royal Enfield test ride in Kodakara by contacting the showroom through phone, WhatsApp, or the website." },
      { id: 2, question: "Can I service my Royal Enfield at TagsBikez Kodakara?", answer: "Yes, you can contact TagsBikez Kodakara for Royal Enfield service support and availability details." },
      { id: 3, question: "Are genuine Royal Enfield spare parts available in Kodakara?", answer: "Yes, TagsBikez Kodakara can help you enquire about genuine Royal Enfield spare parts for your motorcycle." },
      { id: 4, question: "Can I buy Royal Enfield accessories at the Kodakara showroom?", answer: "Yes, you can enquire about Royal Enfield accessories at TagsBikez Kodakara based on your bike model and needs." },
      { id: 5, question: "Are EMI options available for Royal Enfield bikes in Kodakara?", answer: "Yes, TagsBikez Kodakara can guide you with EMI and finance options for Royal Enfield bike purchases." },
      { id: 6, question: "How long does Royal Enfield bike delivery take?", answer: "Delivery time depends on model availability, booking status, registration, and showroom updates." },
      { id: 7, question: "Can I contact the showroom through WhatsApp?", answer: "Yes, you can use WhatsApp to enquire about models, test rides, accessories, finance, and delivery updates." },
      { id: 8, question: "Does TagsBikez Kodakara provide delivery support?", answer: "Yes, the showroom team assists customers with booking updates, documentation, registration guidance, and delivery coordination." },
      { id: 9, question: "Which Royal Enfield bike is best for me?", answer: "The TagsBikez Kodakara team can help you choose the right Royal Enfield based on your riding style and budget." }
    ]
  },
  Kuriachira: {
    heading: "TagsBikez Kuriachira FAQs",
    subtext: "Your top questions answered regarding the Royal Enfield experience at our premium Kuriachira dealership.",
    faqs: [
      { id: 1, question: "Where in Kuriachira are you located?", answer: "We are situated in the heart of Kuriachira, easily accessible for all your Royal Enfield needs." },
      { id: 2, question: "Do you stock genuine RE spare parts?", answer: "Yes, our Kuriachira service center exclusively uses 100% genuine Royal Enfield parts." },
      { id: 3, question: "How long does a regular service take?", answer: "Routine maintenance typically takes a few hours. We recommend booking an appointment at our Kuriachira center to save time." },
      { id: 4, question: "Can I buy riding jackets and helmets here?", answer: "Yes, our Kuriachira showroom has a dedicated section for official Royal Enfield riding gear and apparel." },
      { id: 5, question: "What documents do I bring for a test ride?", answer: "Please bring your valid driving licence and wear closed shoes when visiting Kuriachira for a test ride." },
      { id: 6, question: "Do you offer loan assistance?", answer: "Absolutely. Our finance team in Kuriachira will guide you through the best EMI plans available." }
    ]
  },
  Patturaikkal: {
    heading: "Patturaikkal Showroom FAQs",
    subtext: "Get all the details about owning and maintaining your Royal Enfield from TagsBikez Patturaikkal.",
    faqs: [
      { id: 1, question: "How can I book a Royal Enfield test ride in Patturaikkal?", answer: "You can book a Royal Enfield test ride in Patturaikkal by contacting TagsBikez through phone, WhatsApp, or the website." },
      { id: 2, question: "Can I service my Royal Enfield at TagsBikez Patturaikkal?", answer: "Yes, you can contact TagsBikez Patturaikkal for Royal Enfield service support and availability details." },
      { id: 3, question: "Are genuine Royal Enfield spare parts available in Patturaikkal?", answer: "Yes, TagsBikez Patturaikkal can help you enquire about genuine Royal Enfield spare parts for your motorcycle." },
      { id: 4, question: "Can I buy Royal Enfield accessories at the Patturaikkal showroom?", answer: "Yes, you can enquire about Royal Enfield accessories at TagsBikez Patturaikkal based on your bike model and needs." },
      { id: 5, question: "Are EMI options available for Royal Enfield bikes in Patturaikkal?", answer: "Yes, TagsBikez Patturaikkal can guide you with EMI and finance options for Royal Enfield bike purchases." },
      { id: 6, question: "How long does Royal Enfield bike delivery take?", answer: "Delivery time depends on model availability, booking status, registration, and showroom updates." },
      { id: 7, question: "Can I contact the Patturaikkal showroom through WhatsApp?", answer: "Yes, you can use WhatsApp to enquire about models, test rides, accessories, finance, and delivery updates." },
      { id: 8, question: "Does TagsBikez Patturaikkal provide delivery support?", answer: "Yes, the team assists with booking updates, documentation, registration guidance, and delivery coordination." },
      { id: 9, question: "Which Royal Enfield bike is best for me?", answer: "TagsBikez Patturaikkal can help you choose the right Royal Enfield based on your riding style, budget, and comfort." }
    ]
  },
  Vadakkencherry: {
    heading: "Vadakkencherry Royal Enfield FAQs",
    subtext: "Learn more about our services, test rides, and the Royal Enfield lineup available at Vadakkencherry.",
    faqs: [
      { id: 1, question: "How can I book a Royal Enfield test ride in Vadakkencherry?", answer: "You can book a Royal Enfield test ride in Vadakkencherry by contacting TagsBikez through phone, WhatsApp, or the website." },
      { id: 2, question: "Can I service my Royal Enfield at TagsBikez Vadakkencherry?", answer: "Yes, you can contact TagsBikez Vadakkencherry for Royal Enfield service support and availability details." },
      { id: 3, question: "Are genuine Royal Enfield spare parts available in Vadakkencherry?", answer: "Yes, TagsBikez Vadakkencherry can help you enquire about genuine Royal Enfield spare parts for your motorcycle." },
      { id: 4, question: "Can I buy Royal Enfield accessories at the Vadakkencherry showroom?", answer: "Yes, you can enquire about Royal Enfield accessories at TagsBikez Vadakkencherry based on your bike model and needs." },
      { id: 5, question: "Are EMI options available for Royal Enfield bikes in Vadakkencherry?", answer: "Yes, TagsBikez Vadakkencherry can guide you with EMI and finance options for Royal Enfield bike purchases." },
      { id: 6, question: "How long does Royal Enfield bike delivery take?", answer: "Delivery time depends on model availability, booking status, registration, and showroom updates." },
      { id: 7, question: "Can I contact the Vadakkencherry showroom through WhatsApp?", answer: "Yes, you can use WhatsApp to enquire about models, test rides, accessories, finance, and delivery updates." },
      { id: 8, question: "Does TagsBikez Vadakkencherry provide delivery support?", answer: "Yes, the team assists with booking updates, documentation, registration guidance, and delivery coordination." },
      { id: 9, question: "Which Royal Enfield bike is best for me?", answer: "TagsBikez Vadakkencherry can help you choose the right Royal Enfield based on your riding needs, budget, and comfort." }
    ]
  },
  Kunnamkulam: {
    heading: "Kunnamkulam Royal Enfield FAQs",
    subtext: "Learn more about our services, test rides, and the Royal Enfield lineup available at Kunnamkulam.",
    faqs: [
      { id: 1, question: "How can I book a Royal Enfield test ride in Kunnamkulam?", answer: "You can book a Royal Enfield test ride in Kunnamkulam by contacting TagsBikez by phone, WhatsApp, or the website." },
      { id: 2, question: "Can I service my Royal Enfield at TagsBikez Kunnamkulam?", answer: "Yes, you can contact TagsBikez Kunnamkulam for Royal Enfield service support and availability details." },
      { id: 3, question: "Are genuine Royal Enfield spare parts available in Kunnamkulam?", answer: "Yes, TagsBikez Kunnamkulam can help you enquire about genuine Royal Enfield spare parts for your motorcycle." },
      { id: 4, question: "Can I buy Royal Enfield accessories at the Kunnamkulam showroom?", answer: "Yes, you can enquire about Royal Enfield accessories at TagsBikez Kunnamkulam based on your bike model and needs." },
      { id: 5, question: "Are EMI options available for Royal Enfield bikes in Kunnamkulam?", answer: "Yes, TagsBikez Kunnamkulam can guide you with EMI and finance options for Royal Enfield bike purchases." },
      { id: 6, question: "How long does Royal Enfield bike delivery take?", answer: "Delivery time depends on model availability, booking status, registration, and showroom updates." },
      { id: 7, question: "Can I contact the Kunnamkulam showroom through WhatsApp?", answer: "Yes, you can use WhatsApp to enquire about models, test rides, accessories, finance, and delivery updates." },
      { id: 8, question: "Does TagsBikez Kunnamkulam provide delivery support?", answer: "Yes, the team assists with booking updates, documentation, registration guidance, and delivery coordination." },
      { id: 9, question: "Which Royal Enfield bike is best for me?", answer: "TagsBikez Kunnamkulam can help you choose the right Royal Enfield based on your riding style, purpose, and budget." }
    ]
  }
};

const FAQSection = ({ location = "Thrissur", customFaqs, customHeading, customSubtext }) => {
  const [open, setOpen] = useState(1);

  const locInfo = locationData[location] || {};
  const faqs = customFaqs || locInfo.faqs || defaultFaqs;
  const heading = customHeading || locInfo.heading || "Everything You Need to Know Before You Ride";
  const subtext = customSubtext || locInfo.subtext || "We're here to make your rental experience easy and enjoyable. Browse through our most common questions to get started with confidence.";

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .faq-section {
          background: #fff;
          padding: 0px 50px 80px 50px;
          box-sizing: border-box;
          width: 100%;
        }

        .faq-inner {
          max-width: 1450px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
          align-items: start;
        }

        /* ── Left ── */
        .faq-left {
          top: 40px;
        }

        .faq-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e02020;
          margin: 0 0 16px;
        }

        .faq-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .faq-subtext {
          font-size: 14px;
          color: #777;
          line-height: 1.75;
          margin: 0 0 32px;
          max-width: 320px;
        }

        .faq-divider {
          width: 40px;
          height: 3px;
          background: #e02020;
          border-radius: 2px;
          margin-bottom: 32px;
        }

        .faq-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e02020;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          padding: 13px 24px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .faq-contact-btn:hover {
          background: #c01010;
        }

        .faq-contact-btn svg {
          flex-shrink: 0;
        }

        /* ── Right ── */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          border: 1px solid #ececec;
          overflow: hidden;
          background: #fff;
          transition: box-shadow 0.2s;
        }

        .faq-item.active {
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          border-color: transparent;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
          transition: background 0.18s;
        }

        .faq-item.active .faq-question {
          background: #e02020;
        }

        .faq-q-text {
          font-size: 14.5px;
          font-weight: 500;
          color: #111;
          line-height: 1.4;
          transition: color 0.18s;
        }

        .faq-item.active .faq-q-text {
          color: #fff;
        }

        .faq-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.18s, background 0.18s;
          background: #fff;
        }

        .faq-item.active .faq-icon {
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.15);
        }

        .faq-icon svg path {
          stroke: #555;
          transition: stroke 0.18s;
        }

        .faq-item.active .faq-icon svg path {
          stroke: #fff;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.2s ease;
          padding: 0 20px;
        }

        .faq-answer.open {
          max-height: 300px;
          padding: 16px 20px 20px;
        }

        .faq-answer p {
          font-size: 13.5px;
          color: #666;
          line-height: 1.75;
          margin: 0;
        }

        @media (max-width: 768px) {
          .faq-section { padding: 48px 20px 80px 20px; }
          .faq-inner { grid-template-columns: 1fr; gap: 40px; }
          .faq-left { position: static; }
          .faq-heading {
            font-size: 28px;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">
          {/* Left */}
          <div className="faq-left">
            <p className="faq-eyebrow">Frequently Asked Questions</p>
            <h2 className="faq-heading">{heading}</h2>
            <p className="faq-subtext">
              {subtext}
            </p>
            <AnimatedBtn href="/contact">
              Contact
            </AnimatedBtn>
          </div>

          {/* Right */}
          <div className="faq-list">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item${open === faq.id ? " active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={open === faq.id}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-icon">
                    {open === faq.id ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`faq-answer${open === faq.id ? " open" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
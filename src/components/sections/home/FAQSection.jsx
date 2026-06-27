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
      { id: 1, question: "Where is your Chalakudy showroom located?", answer: "Our showroom is centrally located in Chalakudy. You can find our exact address and directions on the Contact page." },
      { id: 2, question: "Can I book a test ride in Chalakudy?", answer: "Absolutely. We offer test rides for all the latest models directly from our Chalakudy location." },
      { id: 3, question: "Do you provide servicing in Chalakudy?", answer: "Yes, our Chalakudy facility includes a fully equipped service center with certified Royal Enfield mechanics." },
      { id: 4, question: "Are genuine accessories available here?", answer: "Yes, we stock a wide range of official Royal Enfield accessories and riding gear at our Chalakudy outlet." },
      { id: 5, question: "What finance options do you offer?", answer: "We partner with leading banks to provide attractive EMI schemes and quick loan approvals at our Chalakudy branch." },
      { id: 6, question: "How quickly can I get my bike delivered?", answer: "Delivery times depend on the model and color availability, but we strive for the fastest possible handover in Chalakudy." }
    ]
  },
  Irinjalakuda: {
    heading: "Irinjalakuda Showroom FAQs",
    subtext: "Got questions? We have answers. Learn more about buying your dream Royal Enfield in Irinjalakuda.",
    faqs: [
      { id: 1, question: "Is TagsBikez Irinjalakuda an authorized dealer?", answer: "Yes, we are a fully authorized Royal Enfield dealership serving the Irinjalakuda region." },
      { id: 2, question: "Which models are available for a test ride?", answer: "We have test ride vehicles for popular models like Classic 350, Hunter 350, Meteor, and Himalayan at our Irinjalakuda showroom." },
      { id: 3, question: "Do you offer exchange programs?", answer: "Yes, we provide easy exchange options where you can trade in your old bike for a brand new Royal Enfield." },
      { id: 4, question: "Can I service my bike here?", answer: "Yes, our Irinjalakuda service center is equipped with genuine parts and trained technicians to maintain your motorcycle." },
      { id: 5, question: "Do you sell official riding gear?", answer: "Yes, you can browse and purchase authentic Royal Enfield apparel and gear directly at our Irinjalakuda location." },
      { id: 6, question: "What are the showroom timings?", answer: "Our Irinjalakuda showroom is open from Monday to Saturday, 9 AM to 6 PM." }
    ]
  },
  Kodakara: {
    heading: "Your Kodakara Dealership FAQs",
    subtext: "Everything you need to know about purchasing, servicing, and riding Royal Enfield motorcycles in Kodakara.",
    faqs: [
      { id: 1, question: "Does the Kodakara showroom have all models?", answer: "We showcase the complete range of Royal Enfield motorcycles. Drop by our Kodakara showroom to explore them." },
      { id: 2, question: "Can I get my bike serviced in Kodakara?", answer: "Yes, our Kodakara location features a dedicated service center to handle all your maintenance needs." },
      { id: 3, question: "Are financing facilities available?", answer: "We offer hassle-free finance options with minimum documentation right here at TagsBikez Kodakara." },
      { id: 4, question: "Do I need to pre-book a test ride?", answer: "While walk-ins are welcome, we recommend pre-booking a test ride online or via phone to ensure availability." },
      { id: 5, question: "Can I customize my bike?", answer: "Yes, you can choose from a variety of genuine accessories to personalize your Royal Enfield before delivery." },
      { id: 6, question: "Is the Kodakara showroom open on Sundays?", answer: "Please contact our Kodakara showroom directly or check our Contact page for Sunday working hours." }
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
      { id: 1, question: "Is the Patturaikkal showroom an official dealer?", answer: "Yes, TagsBikez Patturaikkal is an authorized Royal Enfield dealership offering sales, service, and spares." },
      { id: 2, question: "How can I book my motorcycle?", answer: "You can book your bike directly at our Patturaikkal showroom or securely online through the Royal Enfield website." },
      { id: 3, question: "Are test rides free?", answer: "Yes, test rides are completely free. Just visit our Patturaikkal dealership with your driving licence." },
      { id: 4, question: "What is the warranty on a new bike?", answer: "All new Royal Enfield motorcycles come with a standard manufacturer's warranty. Ask our Patturaikkal team about extended warranty options." },
      { id: 5, question: "Can I purchase accessories later?", answer: "Yes, you can buy and install genuine accessories at our Patturaikkal center anytime after your purchase." },
      { id: 6, question: "How often should I service my bike?", answer: "Service intervals vary by model. Our Patturaikkal service advisors will provide you with a detailed maintenance schedule." }
    ]
  },
  Vadakkencherry: {
    heading: "Vadakkencherry Royal Enfield FAQs",
    subtext: "Learn more about our services, test rides, and the Royal Enfield lineup available at Vadakkencherry.",
    faqs: [
      { id: 1, question: "What models are displayed in Vadakkencherry?", answer: "Our Vadakkencherry showroom features the latest models including the Classic, Hunter, Meteor, and Himalayan." },
      { id: 2, question: "Do you provide after-sales service here?", answer: "Yes, our Vadakkencherry branch has a fully operational service center to take care of your motorcycle." },
      { id: 3, question: "Can I get my bike washed during service?", answer: "Yes, a professional wash and detailing are part of our standard servicing procedures in Vadakkencherry." },
      { id: 4, question: "Are financing options fast?", answer: "We partner with top financiers to ensure quick loan processing and delivery from our Vadakkencherry showroom." },
      { id: 5, question: "Do you sell Royal Enfield merchandise?", answer: "Yes, check out our collection of official t-shirts, jackets, and accessories at the Vadakkencherry store." },
      { id: 6, question: "How do I schedule a service appointment?", answer: "You can book your service slot via phone or WhatsApp using the contact numbers provided for our Vadakkencherry center." }
    ]
  },
  Kunnamkulam: {
    heading: "Kunnamkulam Royal Enfield FAQs",
    subtext: "Learn more about our services, test rides, and the Royal Enfield lineup available at Kunnamkulam.",
    faqs: [
      { id: 1, question: "What models are displayed in Kunnamkulam?", answer: "Our Kunnamkulam showroom features the latest models including the Classic, Hunter, Meteor, and Himalayan." },
      { id: 2, question: "Do you provide after-sales service here?", answer: "Yes, our Kunnamkulam branch has a fully operational service center to take care of your motorcycle." },
      { id: 3, question: "Can I get my bike washed during service?", answer: "Yes, a professional wash and detailing are part of our standard servicing procedures in Kunnamkulam." },
      { id: 4, question: "Are financing options fast?", answer: "We partner with top financiers to ensure quick loan processing and delivery from our Kunnamkulam showroom." },
      { id: 5, question: "Do you sell Royal Enfield merchandise?", answer: "Yes, check out our collection of official t-shirts, jackets, and accessories at the Kunnamkulam store." },
      { id: 6, question: "How do I schedule a service appointment?", answer: "You can book your service slot via phone or WhatsApp using the contact numbers provided for our Kunnamkulam center." }
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
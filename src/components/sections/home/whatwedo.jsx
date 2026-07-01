"use client";
import Image from "next/image";
import { img } from "@/assets/assest";
import AnimatedBtn from "@/components/AnimatedBtn";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const locationData = {
  Chalakudy: {
    image: img.whatwedochalukady,
    steps: [
      {
        number: "01",
        title: "Royal Enfield Dealer in Chalakudy",
        description: "Are you searching for a reliable Royal Enfield dealer in Chalakudy? TagsBikez helps riders explore Royal Enfield motorcycles with confidence, clarity, and proper guidance. Whether you want a stylish bike for daily use, a powerful motorcycle for highway rides, or a touring-friendly model for weekend trips, our team helps you find the right match. At our Royal Enfield showroom in Chalakudy, you can get support with model selection, colour options, booking procedures, finance guidance, genuine accessories, and delivery updates. We make the buying journey simple and transparent for every rider. Visit TagsBikez Chalakudy and start your Royal Enfield experience with trusted support.",
      },
      {
        number: "02",
        title: "Reliable Royal Enfield Service Support",
        description: "Every Royal Enfield needs regular care to stay smooth, safe, and road-ready. TagsBikez Chalakudy supports riders with service guidance, maintenance assistance, genuine spare parts enquiries, and expert support. Whether you need help with routine service, inspection, repair guidance, or part replacement enquiries, our team is ready to assist. Riders in Chalakudy and nearby Thrissur locations can contact us to know the latest service support and availability.",
      },
      {
        number: "03",
        title: "Easy Booking & Finance Guidance",
        description: "Owning a Royal Enfield becomes easier when you get the right guidance. At our Royal Enfield showroom in Chalakudy, we explain model prices, booking steps, EMI options, exchange support, and dealership offers in a clear and simple way. Our team helps you plan your purchase without confusion. From comparing models to understanding finance options, we support you at every stage. Enquire today and move closer to your dream Royal Enfield.",
      },
      {
        number: "04",
        title: "Smooth Delivery Experience",
        description: "TagsBikez Chalakudy gives importance to a smooth and organized delivery experience. From booking confirmation to final delivery, our team helps you with documentation, registration guidance, payment coordination, accessory fitting updates, and delivery scheduling. We keep you informed throughout the process so you can take your Royal Enfield home with confidence. For riders in Chalakudy and nearby areas, we make every delivery step clear and convenient.",
      },
    ]
  },
  Irinjalakuda: {
    image: img.whatwedoirinjalakuda,
    steps: [
      {
        number: "01",
        title: "Royal Enfield Dealer in Irinjalakuda",
        description: "Looking for a trusted Royal Enfield dealer in Irinjalakuda? TagsBikez helps local riders explore the Royal Enfield motorcycle range with clear guidance and complete support. Whether you need a classic bike for daily rides or a touring-ready motorcycle for long journeys, our team helps you choose the right model based on your riding style, comfort, budget, and purpose. At our Royal Enfield showroom in Irinjalakuda, you can get assistance with model comparison, colour options, booking details, finance support, accessories, and delivery updates. We keep the process simple, transparent, and rider-friendly so you can make the right decision with confidence. Visit TagsBikez Irinjalakuda and begin your Royal Enfield journey with expert support.",
      },
      {
        number: "02",
        title: "Reliable Royal Enfield Service Support",
        description: "Your Royal Enfield deserves proper care to perform well on every ride. TagsBikez Irinjalakuda supports riders with service guidance, maintenance assistance, genuine spare parts enquiries, and expert support. Whether you need regular service information, inspection guidance, or part replacement support, our team helps make the process easier. For riders in Irinjalakuda and nearby Thrissur areas, we provide clear service-related guidance so you can maintain your motorcycle with confidence. Contact our team to know the latest service support and availability.",
      },
      {
        number: "03",
        title: "Easy Booking & Finance Guidance",
        description: "Buying a Royal Enfield should be exciting and stress-free. At our Royal Enfield showroom in Irinjalakuda, we explain model pricing, booking steps, EMI options, exchange support, and available dealership offers in a simple way. Our team helps you understand the complete purchase process before making a decision. From choosing the right bike to planning the payment, we guide you at every step. Enquire today and get the right support for your dream Royal Enfield.",
      },
      {
        number: "04",
        title: "Smooth Delivery Experience",
        description: "TagsBikez Irinjalakuda focuses on giving every customer a smooth and well-organized delivery experience. From booking confirmation to final delivery, our team assists with documentation, registration guidance, payment coordination, accessory fitting updates, and delivery scheduling. We make every step clear before you take your Royal Enfield home. For riders in Irinjalakuda and nearby locations, our goal is to make the delivery process simple, transparent, and memorable.",
      },
    ]
  },
  Kodakara: {
    image: img.whatwedokodakara,
    steps: [
      {
        number: "01",
        title: "ROYAL ENFIELD DEALER IN KODAKARA",
        description: "Are you looking for a trusted Royal Enfield dealer in Kodakara? TagsBikez helps local riders explore the Royal Enfield range with confidence. From everyday classics to touring-ready motorcycles, our team helps you choose the right model that suits your needs. We explain model choices, colours, booking details, finance support, accessories, and delivery updates in a simple and rider-friendly way. Visit our Kodakara showroom and start your Royal Enfield journey with the right guidance.",
      },
      {
        number: "02",
        title: "RELIABLE ROYAL ENFIELD SERVICE SUPPORT",
        description: "Your Royal Enfield needs proper care after every ride. At TagsBikez Kodakara, we help riders with service guidance, maintenance support, genuine spare parts enquiries, and expert assistance. Whether you need regular service, inspection, or part replacement support, our team is always ready to make the process easier for riders in Kodakara and nearby Thrissur areas. Contact us to know the current service availability.",
      },
      {
        number: "03",
        title: "EASY BOOKING & FINANCE GUIDANCE",
        description: "Owning a Royal Enfield should feel exciting, not confusing. At our Royal Enfield Showroom in Kodakara, our team clearly explains model pricing, booking steps, EMI options, exchange support, and the latest dealership offers. We keep the purchase process transparent so you can plan your bike purchase with confidence. Enquire today and get the right support for your dream ride.",
      },
      {
        number: "04",
        title: "SMOOTH DELIVERY EXPERIENCE",
        description: "From booking confirmation to vehicle delivery, TagsBikez Kodakara always focuses on a smooth and well-organized customer experience. Our team assists you with documentation, registration guidance, payment coordination, accessory fitting updates, and delivery scheduling. For riders in Kodakara and nearby areas, we make every step clear before you take your Royal Enfield home. Book your bike and enjoy a confident delivery experience.",
      },
    ]
  },
  Kunnamkulam: {
    image: img.whatwedokunnamkulam,
    steps: [
      {
        number: "01",
        title: "Royal Enfield Dealer in Kunnamkulam",
        description: "Looking for a trusted Royal Enfield dealer in Kunnamkulam? TagsBikez helps riders explore Royal Enfield motorcycles with clear information and friendly support. Whether you need a bike for daily rides, relaxed weekend trips, or long-distance touring, our team helps you choose a model that suits your riding style and budget. At our Royal Enfield showroom in Kunnamkulam, you can get support with model choices, colour options, booking details, finance guidance, accessories, and delivery updates. We explain every step in a simple and transparent way so you can make your purchase decision with confidence.",
      },
      {
        number: "02",
        title: "Reliable Royal Enfield Service Support",
        description: "Your Royal Enfield needs proper maintenance to stay safe, smooth, and road-ready. TagsBikez Kunnamkulam helps riders with service guidance, maintenance support, genuine spare parts enquiries, and expert assistance. Whether you need regular service information, inspection guidance, or part replacement support, our team makes the process easier. Riders in Kunnamkulam and nearby Thrissur areas can contact us for current service availability and support.",
      },
      {
        number: "03",
        title: "Easy Booking & Finance Guidance",
        description: "Owning a Royal Enfield becomes easier when the purchase process is clear. At our Royal Enfield showroom in Kunnamkulam, we help you understand model pricing, booking steps, EMI options, exchange support, and the latest dealership offers. Our team keeps the process simple and transparent from enquiry to booking. You can plan your bike purchase confidently with the right guidance. Contact TagsBikez Kunnamkulam today and take the next step toward your dream ride.",
      },
      {
        number: "04",
        title: "Smooth Delivery Experience",
        description: "TagsBikez Kunnamkulam focuses on giving customers a smooth and well-managed delivery experience. From booking confirmation to vehicle handover, our team assists with documentation, registration guidance, payment coordination, accessory fitting updates, and delivery scheduling. We make sure every customer understands the process before taking the Royal Enfield home. For riders in Kunnamkulam and nearby areas, we make the delivery journey simple and memorable.",
      },
    ]
  },
  Kuriachira: {
    image: img.whatwedokuriachira,
    steps: [
      {
        number: "01",
        title: "KURIACHIRA'S FINEST DEALER",
        description: "Welcome to TagsBikez Kuriachira, where the Royal Enfield legacy thrives. We offer a premium showroom experience with an extensive display of the latest models. Let us help you find the motorcycle that resonates with your spirit of exploration.",
      },
      {
        number: "02",
        title: "AUTHORISED SERVICE",
        description: "Experience top-tier maintenance at our Kuriachira service center. Equipped with advanced tools and genuine parts, our certified mechanics ensure that your Royal Enfield maintains its iconic roar and reliability.",
      },
      {
        number: "03",
        title: "SMART FINANCING",
        description: "Make a smart investment with our clear pricing and easy financing solutions in Kuriachira. We partner with top financiers to provide you with affordable EMI options and a hassle-free purchasing experience.",
      },
      {
        number: "04",
        title: "PERFECT HANDOVER",
        description: "Celebrate your new ride with our flawless handover experience in Kuriachira. We meticulously inspect and prepare every motorcycle, ensuring it meets the highest standards before you take it home.",
      },
    ]
  },
  Patturaikkal: {
    image: img.whatwedopatturaikkal,
    steps: [
      {
        number: "01",
        title: "Royal Enfield Dealer in Patturaikkal",
        description: "Are you looking for a trusted Royal Enfield dealer in Patturaikkal? TagsBikez helps riders explore the Royal Enfield range with clear information, friendly guidance, and complete support. Whether you want a motorcycle for daily use, city rides, weekend travel, or long-distance touring, our team helps you choose the right model based on your needs. At our Royal Enfield showroom in Patturaikkal, you can get support with model comparison, colour options, booking details, finance guidance, genuine accessories, and delivery updates. We keep the process simple and transparent so you can make the right decision without confusion. Visit TagsBikez Patturaikkal and begin your Royal Enfield journey with confidence.",
      },
      {
        number: "02",
        title: "Reliable Royal Enfield Service Support",
        description: "Your Royal Enfield needs timely care to perform well on every ride. TagsBikez Patturaikkal helps riders with service guidance, maintenance support, genuine spare parts enquiries, and expert assistance. Whether you need regular service guidance, inspection support, or part replacement information, our team helps make the process easier. Riders in Patturaikkal, Thrissur city, and nearby areas can contact us to know the latest service support and availability.",
      },
      {
        number: "03",
        title: "Easy Booking & Finance Guidance",
        description: "Buying a Royal Enfield should feel exciting, not complicated. At our Royal Enfield showroom in Patturaikkal, our team explains model pricing, booking steps, EMI options, exchange support, and dealership offers in a clear and simple way. We help you understand the complete purchase process before booking your bike. From choosing the right model to planning your payment, TagsBikez Patturaikkal gives you the support you need for a confident purchase.",
      },
      {
        number: "04",
        title: "Smooth Delivery Experience",
        description: "TagsBikez Patturaikkal focuses on giving customers a smooth and well-organized delivery experience. From booking confirmation to final handover, our team assists with documentation, registration guidance, payment coordination, accessory fitting updates, and delivery scheduling. We keep every step clear before you take your Royal Enfield home. For riders in Patturaikkal and nearby Thrissur areas, our goal is to make the delivery process simple, transparent, and memorable.",
      },
    ]
  },
  Vadakkencherry: {
    image: img.whatwedovadakkencherry,
    steps: [
      {
        number: "01",
        title: "Royal Enfield Dealer in Vadakkencherry",
        description: "Searching for a trusted Royal Enfield dealer in Vadakkencherry? TagsBikez helps local riders explore the Royal Enfield motorcycle range with the right guidance and support. Whether you are looking for a comfortable bike for everyday travel, a stylish machine for city rides, or a strong touring motorcycle for long-distance journeys, our team helps you choose the right model. At our Royal Enfield showroom in Vadakkencherry, you can get help with model comparison, colour options, booking details, finance support, genuine accessories, and delivery updates. We keep the process simple, transparent, and easy to understand. Visit TagsBikez Vadakkencherry and start your Royal Enfield journey with confidence.",
      },
      {
        number: "02",
        title: "Reliable Royal Enfield Service Support",
        description: "A Royal Enfield performs better when it receives the right care at the right time. TagsBikez Vadakkencherry helps riders with service guidance, maintenance support, genuine spare parts enquiries, and expert assistance. Whether you need regular service guidance, inspection support, or part replacement information, our team helps you understand the next steps clearly. Riders in Vadakkencherry and nearby areas can contact us for current service support and availability.",
      },
      {
        number: "03",
        title: "Easy Booking & Finance Guidance",
        description: "Buying a Royal Enfield should be clear, simple, and enjoyable. At our Royal Enfield showroom in Vadakkencherry, our team explains model pricing, booking steps, EMI options, exchange support, and dealership offers in a customer-friendly way. We help you plan your purchase based on your budget and riding needs. From enquiry to booking, our team gives proper support so you can make a confident decision. Contact us today to get started.",
      },
      {
        number: "04",
        title: "Smooth Delivery Experience",
        description: "TagsBikez Vadakkencherry focuses on making the bike delivery process smooth and well-organized. From booking confirmation to final handover, our team assists with documentation, registration guidance, payment coordination, accessory fitting updates, and delivery scheduling. We make sure every important step is clearly explained before you take your Royal Enfield home. For riders in Vadakkencherry and nearby locations, we aim to deliver a comfortable and confident customer experience.",
      },
    ]
  },
  Thriprayar: {
    image: img.whatwedothriprayar,
    steps: [
      {
        number: "01",
        title: "THRIPRAYAR SHOWROOM",
        description: "TagsBikez Thriprayar is your premier destination for Royal Enfield. Experience the perfect blend of classic design and modern engineering as you explore our wide range of motorcycles suited for every kind of rider.",
      },
      {
        number: "02",
        title: "RELIABLE MAINTENANCE",
        description: "Rely on our Thriprayar service experts to keep your motorcycle in prime condition. With state-of-the-art facilities and genuine spares, we deliver maintenance services you can trust for a safe and smooth ride.",
      },
      {
        number: "03",
        title: "FLEXIBLE PURCHASE OPTIONS",
        description: "We offer flexible purchase options at our Thriprayar branch, including attractive loan schemes and zero hidden fees. Buying your favorite Royal Enfield is now a straightforward and joyous process.",
      },
      {
        number: "04",
        title: "ON-TIME DELIVERY",
        description: "We value your time and excitement. Our Thriprayar team is committed to on-time delivery, managing all documentation and pre-ride inspections so you can start making memories immediately.",
      },
    ]
  }
};

const getSteps = (location = "Thrissur") => {
  if (locationData[location]) {
    return locationData[location].steps;
  }
  return [
    {
      number: "01",
      title: "ROYAL ENFIELD DEALER",
      description:
        `At Royal Enfield ${location}, we don't just sell motorcycles we deliver legends on two wheels. From the timeless charm of the Classic 350 to the rugged spirit of the Himalayan and the thrilling performance of the Continental GT & Super Meteor range, we bring you the complete world of Royal Enfield under one roof. As an authorized dealership, every motorcycle comes with genuine documentation, factory-backed warranty, certified service support, and the confidence of dealing with a trusted official partner. Whether you're a daily rider, weekend explorer, or passionate touring enthusiast, our team is here to help you find the perfect machine that matches your style and journey. Ride with authenticity. Ride with confidence. Ride the soul of motorcycling with Royal Enfield ${location}.`,
    },
    {
      number: "02",
      title: "HIGH QUALITY SERVICE",
      description:
        `Your Royal Enfield deserves nothing less than expert attention. At our advanced service centre in ${location}, every motorcycle is handled by factory-trained technicians who understand the true DNA of Royal Enfield machines. From quick periodic maintenance and precision diagnostics to complete engine rebuilds and performance care, we ensure every ride leaves our workshop smoother, stronger, and road-ready. Using only genuine Royal Enfield parts, advanced equipment, and manufacturer-approved practices, we maintain the performance, reliability, and character your motorcycle was built for. Because for us, service is not just maintenance it's preserving the soul of your ride.`,
    },
    {
      number: "03",
      title: "ATTRACTIVE PRICING",
      description:
        "Owning a Royal Enfield should feel exciting not complicated. That's why we offer transparent pricing, zero hidden charges, and complete guidance at every step of your purchase journey. From affordable EMI plans and fast loan approvals with leading finance partners to exclusive seasonal offers and dealership benefits, we make it easier than ever to bring home the Royal Enfield you've always dreamed of. Whether you're buying your first motorcycle or upgrading to your next adventure machine, our team ensures a smooth, hassle-free ownership experience built on trust, value, and customer satisfaction. Your dream ride is closer than you think ride home with confidence today.",
    },
    {
      number: "04",
      title: "READY WHEN YOU ARE",
      description:
        `At our authorized Royal Enfield dealership in ${location}, we understand that the excitement of owning your dream motorcycle shouldn't be delayed. That's why we ensure a smooth, fast, and hassle-free delivery experience from booking to handover. From registration and insurance coordination to documentation and final vehicle preparation, our team takes care of every detail with precision and transparency. Every motorcycle undergoes a complete pre-delivery inspection, professional detailing, and quality check to ensure it reaches you in perfect condition fully road-ready from day one. With committed timelines, seamless processing, and customer-first support, we make sure your Royal Enfield journey begins exactly the way it should stress-free, memorable, and right on time.`,
    },
  ];
};

function StepCard({ step, i, onRef, onBorderRef }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={(el) => onRef(i, el)}
      style={{ opacity: 0 }}
    >
      <div
        ref={(el) => onBorderRef(i, el)}
        className="wwd-card-border"
      >
        <div className="wwd-card-header">
          <p className="wwd-step-num">{step.number}</p>
          <p className="step-title">{step.title}</p>
        </div>
        <p className={`step-desc${expanded ? "" : " step-desc-clamp"}`}>
          {step.description}
        </p>
        <button
          className="read-more-btn"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default function WhatWeDoSection({
  location = "Thrissur",
  heading = "WHAT WE DO",
  image,
  customSteps,
  btnText = "CONTACT",
  btnLink = "https://api.whatsapp.com/send/?phone=917594960023&text=Hi%21+I+have+an+enquiry+regarding+Royal+Enfield.&type=phone_number&app_absent=0"
}) {
  const steps = customSteps || getSteps(location);
  const displayImage = image || (locationData[location] ? locationData[location].image : img.whatwedoimg);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepRefs = useRef([]);
  const cardBorderRefs = useRef([]);
  const gridWrapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stepEls = stepRefs.current;
    const cardBorderEls = cardBorderRefs.current;
    const gridWrap = gridWrapRef.current;

    const ctx = gsap.context(() => {
      const colorTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          once: true,
        },
      });

      colorTl.to(gridWrap, {
        borderTopColor: "#2a2a2a",
        borderLeftColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);

      colorTl.to(cardBorderEls, {
        backgroundColor: "#1a1a1a",
        borderRightColor: "#2a2a2a",
        borderBottomColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);

      stepEls.forEach((el) => {
        if (!el) return;
        const title = el.querySelector(".step-title");
        const desc = el.querySelector(".step-desc");
        colorTl.to(title, { color: "#ffffff", duration: 0.8, ease: "power2.inOut" }, 0);
        colorTl.to(desc, { color: "rgba(255,255,255,0.85)", duration: 0.8, ease: "power2.inOut" }, 0);
      });

      // ── Fade-in stagger for each card (separate trigger, also once) ──
      stepEls.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <style>{`
        .wwd-section {
          background-color: #ffffff;
          padding: 20px 40px 80px 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .wwd-inner {
          max-width: 1450px;
          margin: 0 auto;
          width: 100%;
        }

        .wwd-heading {
          font-size:42px;
          line-height: 1.15;
          max-width: 480px;
          color: #111111;
          font-weight: 400;
          margin: 0 0 56px 0;
        }

        /* Desktop layout: image left, grid right */
        .wwd-body {
          display: flex;
          gap: 56px;
          align-items: flex-start;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .wwd-image-wrap {
          flex: 0 0 400px;
          overflow: hidden;
          position: relative;
          border-radius: 5px;
          height: 425px;
        }

        .wwd-grid-side {
          flex: 1;
          min-width: 280px;
        }

        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .wwd-card-border {
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 28px 24px;
          box-sizing: border-box;
          height: 100%;
          background-color: #ffffff;
          transition: background 0.3s ease;
        }

        .wwd-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .wwd-step-num {
          font-size: 36px;
          font-weight: 700;
          margin: 0;
          line-height: 1;
          flex-shrink: 0;
          color: #f51b24;
        }

        .step-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0;
          line-height: 1.3;
          text-transform: uppercase;
          color: #111111;
        }

        .step-desc {
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
          color: #555555;
        }

        /* Clamps text to 5 lines */
        .step-desc-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more-btn {
          background: none;
          border: none;
          padding: 6px 0 0 0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #f51b24;
          cursor: pointer;
          display: block;
          margin-top: 4px;
          text-transform: uppercase;
          text-decoration: none;
        }

        .read-more-btn:hover {
          opacity: 0.75;
        }

        .wwd-cta {
          margin-top: 44px;
        }

        .wwd-btn {
          background: #f51b24;
          border: none;
          padding: 13px 36px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          color: #fff;
        }

        /*  MEDIUM SCREEN & IPAD PRO  */
        @media (max-width: 1100px) {
          .wwd-section {
            padding: 60px 40px;
            min-height: auto;
            align-items: flex-start;
          }

          .wwd-body {
            flex-direction: column;
            gap: 32px;
          }

          .wwd-image-wrap {
            flex: none;
            width: 100%;
            height: 480px;
            border-radius: 8px;
          }

          .wwd-grid-side {
            width: 100%;
          }

          .wwd-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /*  MOBILE  */
        @media (max-width: 767px) {
          .wwd-section {
            padding: 20px 20px;
            min-height: unset;
            align-items: flex-start;
          }

          .wwd-heading {
            font-size: 28px;
            margin-bottom: 32px;
          }

          .wwd-body {
            flex-direction: column;
            gap: 0;
          }

          .wwd-image-wrap {
            flex: none;
            width: 100%;
            height: 240px;
            border-radius: 8px;
            margin-bottom: 32px;
          }

          .wwd-grid-side {
            width: 100%;
            min-width: unset;
          }

          .wwd-grid {
            grid-template-columns: 1fr;
          }

          .wwd-card-border {
            padding: 20px 16px;
          }

          .wwd-step-num {
            font-size: 28px;
          }

          .wwd-cta {
            margin-top: 28px;
          }

          .wwd-btn {
            width: 100%;
            text-align: center;
            padding: 14px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="wwd-section">
        <div className="wwd-inner">

          <h2 ref={headingRef} className="wwd-heading">{heading}</h2>

          <div className="wwd-body">

            {/* Image */}
            <div className="wwd-image-wrap">
              <Image
                src={displayImage}
                alt="What we do"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Steps grid */}
            <div className="wwd-grid-side">
              <div ref={gridWrapRef} className="wwd-grid">
                {steps.map((step, i) => (
                  <StepCard
                    key={step.number}
                    step={step}
                    i={i}
                    onRef={(idx, el) => {
                      stepRefs.current[idx] = el;
                    }}
                    onBorderRef={(idx, el) => {
                      cardBorderRefs.current[idx] = el;
                    }}
                  />
                ))}
              </div>

              <div className="wwd-cta">
                <AnimatedBtn bgColor="red" href={btnLink}>{btnText}</AnimatedBtn>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
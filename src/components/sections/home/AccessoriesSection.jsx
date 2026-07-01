"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { img } from "@/assets/assest";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBtn from "@/components/AnimatedBtn";

gsap.registerPlugin(ScrollTrigger);

const defaultCategories = [
    {
    id: "Lifestyle Apparels",
    title: "Lifestyle Apparels",
    description: "Discover stylish lifestyle apparel inspired by the spirit of motorcycling, combining everyday comfort with premium quality and timeless design. Perfect for riders who want to carry their passion beyond the road.",
    image: img.lifestyle,
    link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield."
  },
  {
    id: "accessories",
    title: "Motorcycle Accessories",
    description: "Upgrade your motorcycle with premium genuine accessories designed for durability, enhanced performance, and timeless style. From touring essentials to everyday upgrades, every accessory is crafted to elevate your riding experience.",
    image: img.parts,
    link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield."
  },
  {
    id: "gear",
    title: "Riding Gear",
    description: "Ride confidently with premium riding gear engineered for safety, comfort, and long-distance performance. From protective jackets to helmets and gloves, every piece is built for modern adventure riders.",
    image: img.gear,
    link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield."
  }
];

const locationCategories = {
  Chalakudy: [
    {
      id: "Lifestyle Apparels",
      title: "Royal Enfield Riding Apparel in Chalakudy",
      description: "Enhance your riding lifestyle with Royal Enfield riding apparel made for comfort, style, and regular use. TagsBikez Chalakudy helps you explore rider wear and motorcycling essentials that suit your bike and personality. WhatsApp our team to know the latest collections.",
      image: img.lifestyle,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Chalakudy."
    },
    {
      id: "accessories",
      title: "Royal Enfield Accessories in Chalakudy",
      description: "Make your motorcycle more comfortable, stylish, and travel-ready with genuine Royal Enfield accessories. From guards and seats to mirrors, luggage options, and model-specific add-ons, our Chalakudy team helps you choose accessories based on your riding needs.",
      image: img.parts,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Chalakudy."
    },
    {
      id: "gear",
      title: "Riding Safety Gear for Chalakudy Riders",
      description: "Safety gear is important for both daily rides and long-distance journeys. TagsBikez Chalakudy helps riders explore helmets, gloves, jackets, and protective essentials for better comfort and confidence. Message us on WhatsApp to check available options and sizes.",
      image: img.gear,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Chalakudy."
    }
  ],
  Irinjalakuda: [
    {
      id: "Lifestyle Apparels",
      title: "Royal Enfield Riding Apparel in Irinjalakuda",
      description: "Complete your riding lifestyle with Royal Enfield riding apparel designed for comfort, style, and everyday use. From casual rider wear to motorcycling essentials, TagsBikez Irinjalakuda helps you explore apparel that matches your bike and personality. WhatsApp our team to know the latest collection and availability.",
      image: img.lifestyle, 
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Irinjalakuda."
    },
    {
      id: "accessories",
      title: "Royal Enfield Accessories in Irinjalakuda",
      description: "Personalize your bike with genuine Royal Enfield accessories that improve style, comfort, utility, and touring convenience. Whether you need guards, seats, mirrors, luggage options, or model-specific add-ons, our Irinjalakuda team will guide you based on your riding needs.",
      image: img.parts,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Irinjalakuda."
    },
    {
      id: "gear",
      title: "Riding Safety Gear for Irinjalakuda Riders",
      description: "Ride with better confidence using quality safety gear suitable for Royal Enfield riders. TagsBikez Irinjalakuda helps customers explore helmets, gloves, jackets, and protective riding essentials for daily rides and long trips. Message us on WhatsApp to check available sizes and options.",
      image: img.gear,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Irinjalakuda."
    }
  ],
  Kodakara: [
    {
      id: "Lifestyle Apparels",
      title: "Royal Enfield Riding Apparel in Kodakara",
      description: "Complete your riding lifestyle with Royal Enfield-inspired apparel designed for comfort, style, and everyday use. From casual rider wear to premium motorcycling essentials, TagsBikez Kodakara helps you explore apparel that matches your bike and your personality. It is a perfect choice for city rides, weekend trips, and gifting. WhatsApp our Kodakara team to know the latest collections and availability.",
      image: img.lifestyle,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Kodakara."
    },
    {
      id: "accessories",
      title: "Royal Enfield Accessories in Kodakara",
      description: "Personalize your motorcycle with genuine Royal Enfield accessories that improve style, comfort, utility, and touring convenience. Whether you need guards, seats, mirrors, luggage solutions, or model-specific add-ons, our Kodakara showroom team will guide you based on your riding needs. Make your bike truly yours by enquiring today through WhatsApp for accessory options and fitting support.",
      image: img.parts,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Kodakara."
    },
    {
      id: "gear",
      title: "Riding Safety Gear for Kodakara Riders",
      description: "Ride with more confidence by using quality safety gear suitable for Royal Enfield riders. TagsBikez Kodakara helps customers explore helmets, gloves, jackets, and protective riding essentials for daily commutes and long-distance trips. Good gear provides comfort, protection, and peace of mind on every ride. Message us on WhatsApp to know the available safety gear and sizes.",
      image: img.gear,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Kodakara."
    }
  ],
  Kuriachira: [
    {
      id: "Lifestyle Apparels",
      title: "Kuriachira Signature Wear",
      description: "Explore the newest collections of Royal Enfield lifestyle clothing at our Kuriachira showroom. Durable, comfortable, and distinctly Royal Enfield.",
      image: img.lifestyle,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Kuriachira."
    },
    {
      id: "accessories",
      title: "RE Accessories Kuriachira",
      description: "Outfit your motorcycle for the long haul. TagsBikez Kuriachira provides 100% genuine add-ons, from panniers to engine guards, for your Royal Enfield.",
      image: img.parts,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Kuriachira."
    },
    {
      id: "gear",
      title: "Kuriachira Rider Gear",
      description: "Never compromise on safety. Discover an elite range of riding gear in Kuriachira, featuring abrasion-resistant materials and impact protection.",
      image:  img.gear,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Kuriachira."
    }
  ],
  Patturaikkal: [
    {
      id: "Lifestyle Apparels",
      title: "Royal Enfield Riding Apparel in Patturaikkal",
      description: "Complete your riding lifestyle with Royal Enfield riding apparel designed for comfort, style, and everyday use. From casual rider wear to motorcycling essentials, TagsBikez Patturaikkal helps you explore apparel that matches your bike and personality. WhatsApp our team to know the latest collections and availability.",
      image: img.lifestyle,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Patturaikkal."
    },
    {
      id: "accessories",
      title: "Royal Enfield Accessories in Patturaikkal",
      description: "Personalize your motorcycle with genuine Royal Enfield accessories that improve style, comfort, utility, and touring convenience. Whether you need guards, seats, mirrors, luggage options, or model-specific add-ons, our Patturaikkal showroom team will guide you based on your riding needs.",
      image: img.parts,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Patturaikkal."
    },
    {
      id: "gear",
      title: "Riding Safety Gear for Patturaikkal Riders",
      description: "Ride with better protection and confidence using quality riding gear. TagsBikez Patturaikkal helps customers explore helmets, gloves, jackets, and protective essentials for daily commutes and long-distance trips. Message us on WhatsApp to know the available gear and sizes.",
      image: img.gear,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Patturaikkal."
    }
  ],
  Vadakkencherry: [
    {
      id: "Lifestyle Apparels",
      title: "Royal Enfield Riding Apparel in Vadakkencherry",
      description: "Complete your riding lifestyle with Royal Enfield riding apparel designed for comfort, style, and everyday use. TagsBikez Vadakkencherry helps riders explore apparel that matches their bike, personality, and riding needs. WhatsApp our team to know the latest collections and availability.",
      image: img.lifestyle, 
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Vadakkencherry."
    },
    {
      id: "accessories",
      title: "Royal Enfield Accessories in Vadakkencherry",
      description: "Upgrade your motorcycle with genuine Royal Enfield accessories that improve style, comfort, utility, and touring convenience. Whether you need guards, seats, mirrors, luggage support, or model-specific add-ons, our Vadakkencherry team will guide you based on your riding style.",
      image: img.parts,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Vadakkencherry."
    },
    {
      id: "gear",
      title: "Riding Safety Gear for Vadakkencherry Riders",
      description: "Good safety gear gives better comfort and protection on every ride. TagsBikez Vadakkencherry helps riders explore helmets, gloves, jackets, and protective essentials for daily commutes and long-distance trips. Message us on WhatsApp to check available gear and sizes.",
      image: img.gear,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Vadakkencherry."
    }
  ],
  Kunnamkulam: [
    {
      id: "Lifestyle Apparels",
      title: "Royal Enfield Riding Apparel in Kunnamkulam",
      description: "Complete your motorcycling lifestyle with Royal Enfield riding apparel designed for comfort, style, and regular use. TagsBikez Kunnamkulam helps riders explore apparel that suits their bike and personality. WhatsApp our team to know the latest collections and availability.",
      image: img.lifestyle, 
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Kunnamkulam."
    },
    {
      id: "accessories",
      title: "Royal Enfield Accessories in Kunnamkulam",
      description: "Personalize your motorcycle with genuine Royal Enfield accessories that improve style, comfort, utility, and touring convenience. Whether you need guards, seats, mirrors, luggage solutions, or model-specific accessories, our Kunnamkulam team will guide you properly.",
      image: img.parts,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Kunnamkulam."
    },
    {
      id: "gear",
      title: "Riding Safety Gear for Kunnamkulam Riders",
      description: "Ride with better safety and confidence using quality riding gear. TagsBikez Kunnamkulam helps customers explore helmets, gloves, jackets, and protective essentials for daily travel and long-distance rides. Message us on WhatsApp to know the available gear and sizes.",
      image: img.gear,
      link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Kunnamkulam."
    }
  ],
};

const getCategories = (location) => {
  return locationCategories[location] || defaultCategories;
};

const AccessoriesSection = ({ 
  location = "Thrissur",
  heading = "Essentials & Gear",
  customCategories
}) => {
  const categories = customCategories || getCategories(location);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    const cards = cardRefs.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(grid, {
        borderTopColor: "#2a2a2a",
        borderLeftColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut"
      }, 0);

      tl.to(cards, {
        backgroundColor: "#1a1a1a",
        borderRightColor: "#2a2a2a",
        borderBottomColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut"
      }, 0);

      cards.forEach((card) => {
        if (!card) return;
        const title = card.querySelector(".acc-title");
        const desc = card.querySelector(".acc-desc");
        tl.to(title, { color: "#ffffff", duration: 0.8, ease: "power2.inOut" }, 0);
        tl.to(desc, { color: "rgba(255,255,255,0.6)", duration: 0.8, ease: "power2.inOut" }, 0);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="acc-section">
      <style>{`
        .acc-section {
          background: #fff;
          padding: 60px 40px 80px 40px;
          overflow: hidden;
        }

        .acc-inner {
          max-width: 1425px;
          margin: 0 auto;
        }

        .acc-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          margin: 0 0 56px 0;
          letter-spacing: 0.02em;
        }

        .acc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .acc-card {
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 0;
          display: flex;
          flex-direction: column;
          transition: background 0.3s ease;
          background: #fff;
        }

      

        .acc-img-wrap {
          width: 100%;
          height: 320px;
          position: relative;
          overflow: hidden;
        }

        .acc-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }


        .acc-content {
          padding: 32px 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .acc-tag {
          font-size: 11px;
          font-weight: 700;
          color: #f51b24;
          letter-spacing: 0.15em;
          margin-bottom: 12px;
          display: block;
        }

        .acc-title {
          font-size: 20px;
          font-weight: 600;
          color: #111;
          margin: 0 0 14px 0;
          line-height: 1.2;
        }

        .acc-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 28px 0;
          flex-grow: 1;
        }

        @media (max-width: 1024px) {
          .acc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .acc-section {
            padding:0px 20px 40px 20px;
          }
          .acc-heading {
            font-size: 28px;
            margin-bottom: 32px;
          }
          .acc-grid {
            grid-template-columns: 1fr;
          }
          .acc-img-wrap {
            height: 240px;
          }
          .acc-content {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="acc-inner">
        <h2 className="acc-heading">{heading}</h2>

        <div ref={gridRef} className="acc-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="acc-card"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="acc-img-wrap">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="acc-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="acc-content">
                <h3 className="acc-title">{cat.title}</h3>
                <p className="acc-desc">{cat.description}</p>
                <AnimatedBtn
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="#25D366"
                  hoverColor="#25D366"
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  
                    Enquire via WhatsApp
                  </span>
                </AnimatedBtn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;

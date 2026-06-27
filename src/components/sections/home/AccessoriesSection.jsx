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
      title: "Chalakudy Rider Apparels",
      description: "Express your passion for Royal Enfield in Chalakudy with our premium lifestyle apparel. Discover t-shirts, jackets, and casual wear designed for pure motorcycling enthusiasts.",
      image: img.lifestyle,
      link: "https://wa.me/917594954444?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Chalakudy."
    },
    {
      id: "accessories",
      title: "Genuine Accessories Chalakudy",
      description: "Personalize your ride with 100% genuine Royal Enfield accessories available at our Chalakudy showroom. Enhance your motorcycle's performance, comfort, and style.",
      image: img.parts,
      link: "https://wa.me/917594954444?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Chalakudy."
    },
    {
      id: "gear",
      title: "Chalakudy Riding Gear",
      description: "Stay safe on the roads of Chalakudy and beyond with our high-quality riding gear. Find CE-certified helmets, protective jackets, and durable gloves built for every adventure.",
      image: img.gear,
      link: "https://wa.me/917594954444?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Chalakudy."
    }
  ],
  Irinjalakuda: [
    {
      id: "Lifestyle Apparels",
      title: "Irinjalakuda Lifestyle Wear",
      description: "Carry the Royal Enfield legacy wherever you go in Irinjalakuda. Our exclusive lifestyle apparel blends classic motorcycle culture with everyday comfort.",
      image: img.lifestyle, 
      link: "https://wa.me/917594951111?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Irinjalakuda."
    },
    {
      id: "accessories",
      title: "Motorcycle Parts Irinjalakuda",
      description: "Upgrade your Royal Enfield with certified genuine accessories from our Irinjalakuda outlet. Built for durability and perfectly matched to your machine.",
      image: img.parts,
      link: "https://wa.me/917594951111?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Irinjalakuda."
    },
    {
      id: "gear",
      title: "Protective Gear Irinjalakuda",
      description: "Ride with confidence. Explore our premium collection of riding gear in Irinjalakuda, including all-weather jackets, riding boots, and full-face helmets.",
      image: img.gear,
      link: "https://wa.me/917594951111?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Irinjalakuda."
    }
  ],
  Kodakara: [
    {
      id: "Lifestyle Apparels",
      title: "Kodakara Motorcycling Apparel",
      description: "Step out in style with our official Royal Enfield apparel in Kodakara. Designed for riders who appreciate quality and heritage off the saddle.",
      image: img.lifestyle,
      link: "https://wa.me/917594960033?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Kodakara."
    },
    {
      id: "accessories",
      title: "Custom Accessories Kodakara",
      description: "Transform your bike's look and functionality. TagsBikez Kodakara offers a wide range of official Royal Enfield accessories tailored to your needs.",
      image: img.parts,
      link: "https://wa.me/917594960033?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Kodakara."
    },
    {
      id: "gear",
      title: "Kodakara Safety Gear",
      description: "Gear up for your next long ride from Kodakara. We provide top-tier riding protective equipment ensuring maximum safety and unparalleled comfort.",
      image: img.gear,
      link: "https://wa.me/917594960033?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Kodakara."
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
      title: "Patturaikkal Casual Wear",
      description: "Show off your Royal Enfield pride in Patturaikkal. Our lifestyle apparel range includes premium t-shirts, shirts, and accessories for every rider.",
      image: img.lifestyle,
      link: "https://wa.me/917594960033?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Patturaikkal."
    },
    {
      id: "accessories",
      title: "Bike Accessories Patturaikkal",
      description: "Visit our Patturaikkal store to find official Royal Enfield accessories that perfectly blend aesthetics, utility, and factory-tested durability.",
      image: img.parts,
      link: "https://wa.me/917594960033?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Patturaikkal."
    },
    {
      id: "gear",
      title: "Premium Gear Patturaikkal",
      description: "Prepare for any terrain with our Patturaikkal collection of Royal Enfield riding gear. Engineered to protect, designed to look great.",
      image: img.gear,
      link: "https://wa.me/917594960033?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Patturaikkal."
    }
  ],
  Vadakkencherry: [
    {
      id: "Lifestyle Apparels",
      title: "Vadakkencherry Lifestyle Apparels",
      description: "Bring the essence of motorcycling into your daily wardrobe. Shop the official Royal Enfield lifestyle collection at TagsBikez Vadakkencherry.",
      image: img.lifestyle, 
      link: "https://wa.me/917025282011?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Vadakkencherry."
    },
    {
      id: "accessories",
      title: "Vadakkencherry RE Spares",
      description: "Equip your Royal Enfield with authentic accessories designed for superior performance and unmatched style, available now in Vadakkencherry.",
      image: img.parts,
      link: "https://wa.me/917025282011?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Vadakkencherry."
    },
    {
      id: "gear",
      title: "Riding Gear Vadakkencherry",
      description: "Ensure your safety on every journey. Get fitted with Royal Enfield's certified protective riding gear at our Vadakkencherry dealership.",
      image: img.gear,
      link: "https://wa.me/917025282011?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Vadakkencherry."
    }
  ],
  Kunnamkulam: [
    {
      id: "Lifestyle Apparels",
      title: "Kunnamkulam Lifestyle Apparels",
      description: "Bring the essence of motorcycling into your daily wardrobe. Shop the official Royal Enfield lifestyle collection at TagsBikez Kunnamkulam.",
      image: img.lifestyle, 
      link: "https://wa.me/917025282011?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Apparels%20in%20Kunnamkulam."
    },
    {
      id: "accessories",
      title: "Kunnamkulam RE Spares",
      description: "Equip your Royal Enfield with authentic accessories designed for superior performance and unmatched style, available now in Kunnamkulam.",
      image: img.parts,
      link: "https://wa.me/917025282011?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Accessories%20in%20Kunnamkulam."
    },
    {
      id: "gear",
      title: "Riding Gear Kunnamkulam",
      description: "Ensure your safety on every journey. Get fitted with Royal Enfield's certified protective riding gear at our Kunnamkulam dealership.",
      image: img.gear,
      link: "https://wa.me/917025282011?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Riding%20Gear%20in%20Kunnamkulam."
    }
  ]
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

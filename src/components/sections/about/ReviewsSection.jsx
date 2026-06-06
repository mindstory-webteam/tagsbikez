"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import reviewUserIcon from '@/assets/reviewusericon.png';

const mockReviews = [
  {
    id: 1,
    name: "Vishnu prasad",
    description: "Had a wonderful experience with my new Royal Enfield bike delivery. The entire process was smooth, well-coordinated, and hassle-free. The bike was delivered in perfect condition, and everything was clearly explained during the handover. Special appreciation to Jitheesh, for his professionalism, patience, and continuous support from booking till delivery. He made the whole experience easy and memorable. Highly recommend this showroom.",
    image: reviewUserIcon
  },
  {
    id: 2,
    name: "Shahir mon",
    description: "I recently bought the latest Royal Enfield Himalaya. I had a very good experience in the showroom. The sales executive named 'Divya' in particular inspired me to buy that bike. She was very polite and explained everything in detaily.. Great experience.. A special Thanks to Divya",
    image: reviewUserIcon
  },
  {
    id: 3,
    name: "Sathyadev mj",
    description: "Had a great experience at this dealership. The whole process was smooth and easy. A big thanks to Mr clinton & jithesh for helping me throughout. They where friendly, patient, and explained everything clearly. Really happy with the service. Highly recommended! ",
    image: reviewUserIcon
  },
  {
    id: 4,
    name: "Sunny Ittoop",
    description: "I recently purchased my Royal Enfield Meteor 350 from Tags Bikez Kuriyachira Thrissur, and I am very happier with the service! The sales team, especially Mr. Clinton, were extremely helpful and made the purchase process smooth and hassle-free. They took the time to understand my needs and provided excellent guidance.also delivered the bike very fast. I also bought a helmet from them, and their team helped me find the perfect one. Their service was top-notch, and I appreciate their efforts in ensuring I found the right fit. Thanks to Tags Bikez and Mr. Clinton for their outstanding service!",
    image: reviewUserIcon
  },
  {
    id: 5,
    name: "Sreehari A B",
    description: "I had a fantastic experience at this showroom, largely thanks to Clinton Chettan. His friendly nature made me feel welcome from the start. He was incredibly supportive and patient, answering every question I had without any sales pressure. If you're visiting, definitely look for him!. Huge shoutout to Clinton Chettan for his exceptional behavior. He went above and beyond to help me find exactly what I was looking for. His supportive attitude and genuine kindness are rare to find. A big thank you to the showroom for having such great staff!. 5 stars for the service! Clinton Chettan is a true professional with a very friendly and helpful nature. He made my purchase smooth and stress-free. Highly recommended for anyone who wants a supportive shopping experience.",
    image: reviewUserIcon
  },
  {
    id: 6,
    name: "Nikhil Babu",
    description: "​A huge shout-out and special thanks to Clinton, the staff member who handled the delivery. Clinton was exceptional—he was prompt, highly knowledgeable about the bike, and took the time to walk me through every feature and detail. He ensured the handover was not rushed and that I felt completely comfortable before riding off. Highly recommend the Royal Enfield team and especially Clinton for their excellent service. If you're picking up your new bike, you're in great hands!",
    image: reviewUserIcon
  },
  {
    id: 7,
    name: "Satheesh Sathi",
    description: "Highly recommended if you’re planning to buy a Royal Enfield! I had an excellent experience with the showroom. From my initial inquiry to the final delivery, everything was handled smoothly and professionally. There was a slight delay compared to the committed timeline, but overall the process was effortless and well managed. I would like to extend my sincere thanks to the entire team for their exceptional customer service and dedication. Special appreciation to Mr. Clinton, who supported me throughout the process. He patiently answered all my questions and provided valuable guidance at every step. Thank you, Clinton, and the entire team for making this a truly hassle-free experience. I highly recommend their services!",
    image: reviewUserIcon
  },
  {
    id: 8,
    name: "Samson Abraham",
    description: "Bought a Royal Enfield Hunter from here. Had a smooth and pleasant experience. Sales executive Jithesh was extremely helpful and guided us well. Truly appreciate the service. Highly recommended",
    image: reviewUserIcon
  },
  {
    id: 9,
    name: "Vinod Sudhan",
    description: "​I had a wonderful experience buying my bike at the tags bikez kuriyachira showroom yesterday. Mr. Jitesh was the representative who assisted me, and he was incredibly helpful. He was very knowledgeable about the different models and made sure I felt confident in my choice. The entire process, including the paperwork, was smooth and efficient thanks to him. I'm thrilled with my new bike and the service I received.",
    image: reviewUserIcon
  },
  {
    id: 10,
    name: "Jinson Rajan",
    description: "Excellent service! Mr. Hari and his team put in tremendous effort to ensure the fastest-ever Bullet 350 Standard delivery, setting a record timeframe in TAGS history. A truly great team with superb coordination and harmony. Mr. Hari, your team made my day truly memorable. Thank you very much!",
    image: reviewUserIcon
  },
  {
    id: 11,
    name: "Joseph Martin",
    description: "I recently bought a Royal Enfield Scram 440 (Trail Green) from Tags Bikez, Kuriachira. I had an urgency due to the GST hike, and they made sure the entire process was completed before the hike date. The staff were very well-mannered, had clear communication, and handled everything in a speedy and professional manner. Really happy with the way they managed everything smoothly. Highly recommend them!",
    image: reviewUserIcon
  }
];

function ReviewCard({ rev, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);
  const [shouldShowReadMore, setShouldShowReadMore] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    
    const isOverflowing = el.scrollHeight > el.clientHeight;
    setShouldShowReadMore(isOverflowing);
  }, [rev.description]);

  return (
    <div className="rev-card" key={`${rev.id}-${index}`}>
      <div className="rev-top-row">
        <div className="rev-img-wrap">
          {rev.image ? (
            <Image
              src={rev.image}
              alt={rev.name}
              fill
              className="rev-img"
            />
          ) : (
            <div className="rev-placeholder">
              <div className="rev-avatar-circle">
                {rev.name.split(" ").map(n => n[0]).join("")}
              </div>
            </div>
          )}
        </div>
        <span className="rev-name">{rev.name}</span>
      </div>
      <div className="rev-bottom">
        <p 
          ref={textRef}
          className={`rev-desc ${isExpanded ? 'expanded' : 'collapsed'}`}
        >
          "{rev.description}"
        </p>
        {shouldShowReadMore && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="rev-readmore-btn"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId;
    let scrollPos = 0;
    const speed = 0.5; 

    const scroll = () => {
      scrollPos += speed;
      const halfWidth = track.scrollWidth / 2;
      if (scrollPos >= halfWidth) {
        scrollPos = 0;
      }
      track.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (track) {
        track.removeEventListener("mouseenter", handleMouseEnter);
        track.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="rev-section">
      <style>{`
        .rev-section {
          background: #fff;
          padding: 0px 0 100px 0;
          overflow: hidden;
        }
        .rev-inner {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .rev-header {
          margin: 0 0 48px;
        }
        .rev-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          margin: 0;
          text-transform: uppercase;
        }
        .rev-track-outer {
          overflow: hidden;
          width: 100%;
          cursor: grab;
        }
        .rev-track {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          padding: 10px 0;
        }
        .rev-track::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .rev-card {
          flex: 0 0 340px; /* fixed width cards so they line up nicely in horizontal scroll */
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          border: 1px solid #e0e0e0;
          background: #fff;
          transition: height 0.3s ease;
        }
        .rev-top-row {
          padding: 24px 20px 16px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #e0e0e0;
          box-sizing: border-box;
          gap: 8px;
        }
        .rev-name {
          font-size: 16px;
          font-weight: 600;
          color: #111;
        }
        .rev-img-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          border: 1px solid #e0e0e0;
        }
        .rev-img {
          display: block;
          object-fit: cover;
          pointer-events: none;
          user-select: none;
        }
        .rev-placeholder {
          width: 100%;
          height: 100%;
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rev-avatar-circle {
          font-size: 14px;
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
        }
        .rev-bottom {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          box-sizing: border-box;
        }
        .rev-desc {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }
        .rev-desc.collapsed {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rev-desc.expanded {
          display: block;
        }
        .rev-readmore-btn {
          align-self: flex-start;
          background: transparent;
          border: none;
          color: #ff0000;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
          padding: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .rev-readmore-btn:hover {
          text-decoration: underline;
        }
        @media (max-width: 1200px) {
          .rev-inner {
            padding: 0 40px;
          }
        }
        @media (max-width: 600px) {
          .rev-section { padding: 0px 0 60px 0; }
          .rev-inner { padding: 0 16px; }
          .rev-heading { font-size: 28px; }
          .rev-header { margin: 0 0 24px; }
          .rev-card { flex: 0 0 280px; }
          .rev-top-row { padding: 16px 14px 12px; }
          .rev-bottom { padding: 14px; }
          .rev-track { gap: 12px; }
        }
      `}</style>
      <div className="rev-inner">
        <div className="rev-header">
          <h2 className="rev-heading">Customer Reviews</h2>
        </div>
        <div className="rev-track-outer">
          <div className="rev-track" ref={trackRef}>
            {mockReviews.map((rev, index) => (
              <ReviewCard key={`${rev.id}-${index}`} rev={rev} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { img } from '@/assets/assest';
import { ChevronRight, } from 'lucide-react';
import { bikeData } from '@/lib/data/bikes';

const Breadcrumb = () => {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(s => s);
  const pageName = pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ') || 'Page';

  const bgImage = img.banner5?.src || img.banner5;
  const isModelsPage = pathname.startsWith('/models');

  return (
    <div className="hero-breadcrumb">
      <style>{`
        .hero-breadcrumb {
          position: relative;
          width: 100%;
          height: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000;
          padding-top: 80px; /* Offset for the 80px fixed header */
          box-sizing: border-box;
        }

        .breadcrumb-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
          filter: grayscale(0.2) brightness(0.8);
          transform: scale(1.05);
          transition: transform 10s linear;
        }

        .hero-breadcrumb:hover .breadcrumb-bg {
          transform: scale(1);
        }

        .breadcrumb-overlay {
          position: absolute;
          inset: 0;
        }

        .breadcrumb-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          max-width: 1300px;
          width: 100%;
        }

        .breadcrumb-content h1 {
          font-size: clamp(40px, 8vw, 84px);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.04em;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1;
        }

        .breadcrumb-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .crumb-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .crumb-link:hover {
          color: #fff;
        }

        .crumb-sep {
          color: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
        }

        .crumb-current {
          color: #e63020;
          font-weight: 700;
        }

        .models-capsules {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .bike-capsule {
          padding: 8px 18px;
          border-radius: 0px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
        }

        .bike-capsule:hover, .bike-capsule.active {
          background: #e63020;
          border-color: #e63020;
          color: #fff;
        }

        @media (max-width: 768px) {
          .hero-breadcrumb {
            height: auto;
            min-height: 280px;
            padding: 110px 0 40px; /* 80px header + 30px top padding; 40px bottom padding */
          }
          .breadcrumb-content h1 {
            font-size: 40px;
          }
          .models-capsules {
            margin-top: 24px;
            gap: 8px;
          }
          .bike-capsule {
            padding: 6px 12px;
            font-size: 10px;
          }
        }

        @media (max-width: 640px) {
          .hero-breadcrumb {
            min-height: 280px;
            padding: 110px 16px 32px;
          }
          .breadcrumb-content h1 {
            font-size: 32px;
            margin-bottom: 12px;
          }
          .breadcrumb-links {
            gap: 6px 10px;
            font-size: 11px;
            padding: 0 10px;
          }
          .models-capsules {
            margin-top: 18px;
            gap: 6px;
            padding: 0 10px;
          }
          .bike-capsule {
            padding: 5px 10px;
            font-size: 9px;
            letter-spacing: 0.02em;
          }
        }

        @media (max-width: 480px) {
          .hero-breadcrumb {
            min-height: 260px;
            padding: 100px 12px 24px;
          }
          .breadcrumb-content h1 {
            font-size: 26px;
            margin-bottom: 8px;
          }
          .breadcrumb-links {
            gap: 4px 8px;
            font-size: 10px;
          }
          .crumb-sep svg, .crumb-link svg {
            width: 12px;
            height: 12px;
          }
          .models-capsules {
            margin-top: 14px;
            gap: 4px;
          }
          .bike-capsule {
            padding: 4px 8px;
            font-size: 8px;
            letter-spacing: 0.01em;
          }
        }
      `}</style>

      <img src={bgImage} alt="Breadcrumb Background" className="breadcrumb-bg" />
      <div className="breadcrumb-overlay" />
      
      <div className="breadcrumb-content">
        <h1>{pageName}</h1>
        <div className="breadcrumb-links">
          <Link href="/" className="crumb-link">
            <span>Home</span>
          </Link>
          
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;

            return (
              <React.Fragment key={href}>
                <span className="crumb-sep"><ChevronRight size={14} /></span>
                {isLast ? (
                  <span className="crumb-current">{segment.replace(/-/g, ' ')}</span>
                ) : (
                  <Link href={href} className="crumb-link">
                    {segment.replace(/-/g, ' ')}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
        
        {isModelsPage && (
          <div className="models-capsules">
            {bikeData.map(bike => {
              const isActive = pathname === `/models/${bike.slug}`;
              return (
                <Link 
                  key={bike.slug} 
                  href={`/models/${bike.slug}`} 
                  className={`bike-capsule ${isActive ? 'active' : ''}`}
                >
                  {bike.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <div className="breadcrumb-edge" />
    </div>
  );
};

export default Breadcrumb;
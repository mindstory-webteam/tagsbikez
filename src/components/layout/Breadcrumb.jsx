"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { img } from '@/assets/assest';
import { ChevronRight, } from 'lucide-react';

const Breadcrumb = () => {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(s => s);
  const pageName = pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ') || 'Page';

  const bgImage = img.banner5?.src || img.banner5;

  return (
    <div className="hero-breadcrumb">
      <style>{`
        .hero-breadcrumb {
          position: relative;
          width: 100%;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000;
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
        }

        .crumb-current {
          color: #e63020;
          font-weight: 700;
        }

      

        @media (max-width: 768px) {
          .hero-breadcrumb {
            height: 260px;
          }
          .breadcrumb-content h1 {
            font-size: 40px;
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
      </div>

      <div className="breadcrumb-edge" />
    </div>
  );
};

export default Breadcrumb;
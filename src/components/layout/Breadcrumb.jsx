"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  if (pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <style>{`
        .breadcrumb-nav {
          padding: 20px 0;
          max-width: 1300px;
          margin: 80px auto 0 auto;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .breadcrumb-list {
          display: flex;
          align-items: center;
          list-style: none;
          padding: 0 20px;
          margin: 0;
          gap: 8px;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          font-weight: 500;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .breadcrumb-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .breadcrumb-link:hover {
          color: #e63020;
        }

        .breadcrumb-separator {
          color: #444;
          display: flex;
          align-items: center;
        }

        .breadcrumb-current {
          color: #666;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .breadcrumb-nav {
            margin-top: 80px;
            padding: 15px 0;
          }
        }
      `}</style>

      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link href="/" className="breadcrumb-link">
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={href}>
              <li className="breadcrumb-separator">
                <ChevronRight size={14} />
              </li>
              <li className="breadcrumb-item">
                {isLast ? (
                  <span className="breadcrumb-current">{segment.replace(/-/g, ' ')}</span>
                ) : (
                  <Link href={href} className="breadcrumb-link">
                    {segment.replace(/-/g, ' ')}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogsData } from '@/data/blogs';
import { Star } from 'lucide-react';

export default function BlogsPage() {
  const latest = blogsData.filter(blog => !blog.popular);
  const popular = blogsData.filter(blog => blog.popular);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const popularItemsPerPage = 7;
  
  const totalPages = Math.max(
    Math.ceil(latest.length / itemsPerPage),
    Math.ceil(popular.length / popularItemsPerPage)
  );

  const currentLatest = latest.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  let currentPopular = popular.slice(
    (currentPage - 1) * popularItemsPerPage,
    currentPage * popularItemsPerPage
  );

  if (currentPopular.length === 0 && popular.length > 0) {
    currentPopular = popular.slice(0, popularItemsPerPage);
  }

  return (
    <div className="blogs-page">
      <style>{`
        .blogs-page {
          background-color: #ffffff;
          color: #111;
          padding: 100px 20px 60px;
          min-height: 100vh;
          font-family: var(--font-inter), sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-family: var(--font-oswald), sans-serif;
          font-size: 42px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
          display: inline-block;
          padding-bottom: 8px;
        }

        /* Common Image Styles */
        .img-wrapper img {
          object-fit: cover;
          background: #eaeaea; /* placeholder */
        }
        .card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .card-link .title:hover {
          color: #e8282b;
          text-decoration: underline;
        }

        .meta-bottom {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: #777;
        }
        .meta-bottom .author {
          color: #111;
          font-weight: 500;
        }

        /* --- Bottom Section (Latest & Popular) --- */
        .bottom-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
        }

        /* Latest Posts */
        .latest-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .card-latest {
          border: 1px solid #eaeaea;
          overflow: hidden;
          background: transparent;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .card-latest .title,
        .card-latest .excerpt,
        .card-latest .read-more-text,
        .card-latest .meta-bottom {
          padding: 0 24px;
        }
        .card-latest .title {
          padding-top: 20px;
        }
        .card-latest .meta-bottom {
          padding-bottom: 24px;
          margin-top: auto;
        }
        .card-latest .img-wrapper {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          margin-bottom: 16px;
        }
        .card-latest .title {
          font-family: var(--font-oswald), sans-serif;
          font-size: 22px;
          line-height: 1.3;
          margin-bottom: 12px;
          font-weight: 500;
        }
        .card-latest .excerpt {
          color: #555;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .read-more-text {
          color: #e8282b;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .read-more-text:hover {
          text-decoration: underline;
        }

        /* Popular Posts */
        .popular-section {
          background-color: #fafafa;
          border: 1px solid #eaeaea;
          padding: 24px;
          height: fit-content;
        }
        .popular-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .popular-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .popular-item .img-wrapper {
          width: 80px;
          height: 80px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .popular-content {
          flex: 1;
        }
        .popular-item .title {
          font-family: var(--font-oswald), sans-serif;
          font-size: 18px;
          line-height: 1.3;
          margin-bottom: 8px;
          font-weight: 500;
        }

        /* Pagination Styles */
        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 60px;
        }
        .pagination button {
          padding: 8px 16px;
          border: 1px solid #eaeaea;
          background: transparent;
          cursor: pointer;
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.05em;
          transition: all 0.3s;
        }
        .pagination button:hover:not(:disabled) {
          background: #e8282b;
          color: #fff;
          border-color: #e8282b;
        }
        .pagination button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .pagination span {
          font-size: 14px;
          color: #555;
        }

        /* --- Responsive --- */
        @media (max-width: 1024px) {
          .bottom-grid {
            display: flex;
            flex-direction: column;
          }
          .popular-section {
            order: 1;
          }
          .latest-posts-wrapper {
            order: 2;
          }
        }

        @media (max-width: 768px) {
          .blogs-page {
            padding: 80px 16px 40px;
          }
          .latest-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">

        {/* Bottom Section */}
        <div className="bottom-grid">

          {/* Latest Posts */}
          <div className="latest-posts-wrapper">
            <div className="latest-grid">
              {currentLatest.map(post => (
                <Link href={`/blogs/${post.slug}`} key={post.id} className="card-link card-latest">
                  <div className="img-wrapper">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <h3 className="title">{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <span className="read-more-text">Read more</span>
                  <div className="meta-bottom">
                    <span className="author">{post.author}</span>
                    <span className="date">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div className="popular-section">
            <h2 style={{ fontSize: '24px', fontFamily: 'var(--font-oswald), sans-serif', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>Popular</h2>
            <div className="popular-list">
              {currentPopular.map((post) => (
                <Link href={`/blogs/${post.slug}`} key={post.id} className="card-link popular-item">
                  <div className="img-wrapper">
                    <Image src={post.image} alt={post.title} fill sizes="80px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="popular-content">
                    <h3 className="title">{post.title}</h3>
                    <div className="meta-bottom">
                      <span className="author">{post.author}</span>
                      <span className="date">{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Pagination for Latest Posts */}
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

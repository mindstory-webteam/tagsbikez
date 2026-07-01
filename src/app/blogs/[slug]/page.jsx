import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  try {
    const res = await fetch('https://api.tagsbikez.com/api/blog/');
    const data = await res.json();
    return (data.results || []).map((post) => ({ 
      slug: post.slug,
    }));
  } catch (error) {
    return [];
  }
}

async function getPost(slug) {
  try {
    const res = await fetch(`https://api.tagsbikez.com/api/blog/${slug}/`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const prevPost = post.previous_post && typeof post.previous_post === 'object' ? post.previous_post : null;
  const nextPost = post.next_post && typeof post.next_post === 'object' ? post.next_post : null;

  const heroImage = post.image || "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1200";
  
  // Extract day from date if possible (e.g., "Mar 20, 2026" -> "20")
  let day = "23";
  if (post.date) {
    const parts = post.date.split(' ');
    if (parts.length > 1) {
      day = parts[1].replace(',', '');
    }
  }

  return (
    <div className="blog-detail-page">
      <style>{`
        .blog-detail-page {
          background-color: #ffffff;
          color: #111;
          min-height: 100vh;
          font-family: var(--font-inter), sans-serif;
          padding-bottom: 0;
        }


        /* --- Main Content Layout --- */
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 60px 20px 80px;
        }


      
      

        /* Header */
        .header-section {
          text-align: center;
          margin-bottom: 60px;
          padding-top: 20px;
        }
        .main-title {
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 800;
          color: #111;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .date-text {
          color: #888;
          font-size: 11px;
          font-weight: 500;
        }

        /* Grid Layout */
        .article-grid {
          display: block;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Article Body */
        .article-body {
          font-family: var(--font-inter), sans-serif;
          font-size: 18px;
          line-height: 1.8;
          color: #555;
          text-align: justify;
        }
        .article-body p {
          margin-bottom: 24px;
        }
        
        .pull-quote-container {
          display: flex;
          margin: 40px 0;
          align-items: flex-start;
          font-family: var(--font-inter), sans-serif;
        }
        .pull-quote {
          color: #e8282b;
          font-size: 30px;
          line-height: 1.3;
          font-weight: 300;
          flex: 1;
        }
        .quote-side {
          width: 150px;
          padding-left: 20px;
          font-size: 10px;
          color: #111;
          font-weight: 700;
          text-align: left;
        }
        
        .embedded-image {
          float: left;
          width: 500px;
          height: 330px;
          position: relative;
          margin: 12px 40px 24px 0;
        }
        .embedded-caption {
          font-family: var(--font-inter), sans-serif;
          font-size: 9px;
          color: #999;
          margin-top: 8px;
          text-align: left;
        }

        .clear-float {
          clear: both;
        }

        .sub-heading {
          font-family: var(--font-inter), sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #111;
          margin: 48px 0 24px;
        }

        /* Rating Section */
        .rating-section {
          display: flex;
          gap: 60px;
          margin-top: 32px;
          align-items: flex-start;
          font-family: var(--font-inter), sans-serif;
        }
        .rating-text {
          flex: 1;
          font-family: var(--font-inter), sans-serif;
        }
        


        /* Footer Nav */
        .footer-nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 0 20px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .nav-card {
          position: relative;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          text-decoration: none;
          overflow: hidden;
        }
        .nav-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .nav-bg img {
          object-fit: cover;
          filter: brightness(0.6);
          transition: transform 0.5s;
        }
        .nav-card:hover .nav-bg img {
          transform: scale(1.05);
        }
        .nav-content {
          position: relative;
          z-index: 1;
          padding: 24px;
          color: #fff;
        }
        .nav-label {
          font-family: var(--font-inter), sans-serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
          color: #ddd;
        }
        .nav-title {
          font-family: var(--font-inter), sans-serif;
          font-size: 20px;
          font-weight: 700;
        }
        .nav-banner {
          background-color: #e8282b;
          color: #fff;
          font-weight: 700;
          padding: 12px 24px;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-family: var(--font-inter), sans-serif;
        }
        .nav-banner.right {
          justify-content: space-between;
          flex-direction: row-reverse;
        }

        @media (max-width: 768px) {
          .pull-quote-container {
            flex-direction: column;
            gap: 20px;
          }
          .rating-section {
            flex-direction: column;
          }
          .footer-nav {
            grid-template-columns: 1fr;
          }
          .embedded-image {
            float: none;
            width: 100%;
            height: auto;
            aspect-ratio: 16/9;
            margin: 0 0 16px 0;
          }
        }
      `}</style>



      <div className="content-container">
        
        <div className="header-section">
          <h2 className="main-title">{post.title}</h2>
          <div className="date-text">{post.author} - {post.date}</div>
        </div>

        <div className="article-grid">


          {/* Right Content */}
          <div className="article-body">
            {post.content && post.content[0] ? (
              <p>{post.content[0]}</p>
            ) : null}

            <div className="pull-quote-container">
              <div className="pull-quote">
                {post.excerpt}
              </div>
            </div>

            <div>
              <div className="embedded-image">
                <Image src={heroImage} alt="Article Image" fill style={{ objectFit: 'cover' }} />
                <div className="embedded-caption">1/3 Scenic riding route captured</div>
              </div>
              {post.content && post.content.length > 1 ? (
                post.content.slice(1).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : null}
            </div>
            
            <div className="clear-float"></div>

            
            <div className="rating-section">
              <div className="rating-text">
                <p>
                  Make sure your machine is as ready as you are. Regular maintenance, using genuine spare parts, and wearing proper safety gear are the pillars of a successful long-distance journey. Visit any of our TagsBikez service centers to get your motorcycle thoroughly checked before you hit the highway. Safe riding!
                </p>
              </div>
              

            </div>

          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
        {prevPost && prevPost.slug ? (
          <div>
            <Link href={`/blogs/${prevPost.slug}`} className="nav-card">
              <div className="nav-bg">
                <Image src={prevPost.image || heroImage} alt={prevPost.title || "Previous article"} fill />
              </div>
              <div className="nav-content">
                <div className="nav-label">Previous</div>
                <div className="nav-title">{prevPost.title}</div>
              </div>
            </Link>
            <div className="nav-banner">
              <span> Previous article</span>
            </div>
          </div>
        ) : <div />}

        {nextPost && nextPost.slug ? (
          <div>
            <Link href={`/blogs/${nextPost.slug}`} className="nav-card">
              <div className="nav-bg">
                <Image src={nextPost.image || heroImage} alt={nextPost.title || "Next article"} fill />
              </div>
              <div className="nav-content">
                <div className="nav-label">Next</div>
                <div className="nav-title">{nextPost.title}</div>
              </div>
            </Link>
            <div className="nav-banner right">
              <span>Next article</span>
            </div>
          </div>
        ) : <div />}
      </div>

    </div>
  );
}

import BlogsPage from '@/components/sections/blogs/BlogsPage';

export const metadata = {
  title: 'Royal Enfield Blogs - Riding Tips, Motorcycle Features & RE Community | TagsBikez',
  description: 'Stay updated with the latest Royal Enfield blogs. Read expert riding tips, motorcycle feature insights, road trip stories, and community highlights from TagsBikez in Kunnamkulam, Thrissur.',
  keywords: 'Royal Enfield blogs, riding tips, motorcycle features, RE community, TagsBikez blogs, bike riding guide, Thrissur motorcycle stories',
  alternates: {
    canonical: 'https://tagsbikez.com/blogs',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Tags Bikez',
    url: 'https://tagsbikez.com/blogs',
    title: 'Royal Enfield Blogs - Riding Tips, Motorcycle Features & RE Community | TagsBikez',
    description: 'Stay updated with the latest Royal Enfield blogs. Read expert riding tips, motorcycle feature insights, road trip stories, and community highlights from TagsBikez in Kunnamkulam, Thrissur.',
    images: [
      {
        url: 'https://tagsbikez.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Royal Enfield Blogs - Tags Bikez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Enfield Blogs - Riding Tips, Motorcycle Features & RE Community | TagsBikez',
    description: 'Stay updated with the latest Royal Enfield blogs. Read expert riding tips, motorcycle feature insights, road trip stories, and community highlights from TagsBikez in Kunnamkulam, Thrissur.',
    images: ['https://tagsbikez.com/og-image.png'],
  },
};

function getBlogApiBase() {
  const envUrl = (process.env.NEXT_PUBLIC_API_URL || 'https://api.tagsbikez.com').trim().replace(/\/+$/, '');
  return envUrl.endsWith('/api') ? envUrl : `${envUrl}/api`;
}

async function getBlogs() {
  try {
    const apiBase = getBlogApiBase();
    const res = await fetch(`${apiBase}/blog/`, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'TagsBikez-Web/1.0',
      },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export const dynamic = 'force-dynamic';

export default async function Page() {
  const blogs = await getBlogs();
  return <BlogsPage initialBlogs={blogs} />;
}

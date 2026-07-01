import BlogsPage from '@/components/sections/blogs/BlogsPage';

export const metadata = {
  title: 'Royal Enfield Blogs - Riding Tips, Motorcycle Features & RE Community | TagsBikez',
  description: 'Stay updated with the latest Royal Enfield blogs. Read expert riding tips, motorcycle feature insights, road trip stories, and community highlights from TagsBikez in Kunnamkulam, Thrissur.',
  keywords: 'Royal Enfield blogs, riding tips, motorcycle features, RE community, TagsBikez blogs, bike riding guide, Thrissur motorcycle stories',
};

async function getBlogs() {
  try {
    const res = await fetch('https://api.tagsbikez.com/api/blog/', { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function Page() {
  const blogs = await getBlogs();
  return <BlogsPage initialBlogs={blogs} />;
}

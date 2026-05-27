import React from 'react';
import { notFound } from 'next/navigation';
import { bikeData } from '@/lib/data/bikes';
import { fetchBikeBySlug } from '@/lib/api';
import BikeDetailView from '@/components/sections/models/BikeDetailView';

/** Normalize both API and static bike objects into a single consistent shape */
function normalizeBike(b) {
  // colors from API have image_url and price without ₹
  const colors = (b.colors || []).map((c) => ({
    name: c.name,
    hex: c.hex,
    image: c.image_url || c.image,
    price: c.price
      ? String(c.price).startsWith('₹') ? c.price : `₹${c.price}`
      : null,
  }));

  // stats: prefer existing stats[] array, else build from flat fields
  const stats = b.stats && b.stats.length > 0
    ? b.stats
    : [
        b.engine_cc   && { label: 'Engine', val: b.engine_cc },
        b.power       && { label: 'Power',  val: b.power },
        b.torque      && { label: 'Torque', val: b.torque },
      ].filter(Boolean);

  // stories: prefer existing stories[], else build from top_about + features
  const stories = b.stories && b.stories.length > 0
    ? b.stories
    : [
        ...(b.top_about
          ? [{ title: b.top_about.heading, description: b.top_about.description, image: b.top_about.top_image_url }]
          : []),
        ...((b.features || []).map((f) => ({ title: f.title, description: f.description, image: f.image_url }))),
      ];

  return {
    id: b.id,
    name: b.name,
    slug: b.slug,
    category: typeof b.category === 'object' ? b.category?.name : b.category,
    description: b.description || b.short_description || '',
    image: b.featured_image_url || b.image,
    brochure: b.brochure_url || b.brochure,
    emiStarting: b.emi_starts_at || b.emiStarting || null,
    comingSoon: b.coming_soon ?? b.comingSoon ?? false,
    colors,
    stats,
    stories,
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const apiData = await fetchBikeBySlug(slug);
  const bike = apiData ? normalizeBike(apiData) : bikeData.find((b) => b.slug === slug);
  if (!bike) return { title: 'Bike Not Found' };
  return {
    title: `${bike.name} | TagsBikez Royal Enfield`,
    description: bike.description,
  };
}

const BikeSlugPage = async ({ params }) => {
  const { slug } = await params;

  // Try API first, fall back to static data
  const apiData = await fetchBikeBySlug(slug);
  const rawBike = apiData || bikeData.find((b) => b.slug === slug);

  if (!rawBike) notFound();

  const bike = normalizeBike(rawBike);

  return (
    <div className="bike-slug-page">
      <BikeDetailView bike={bike} />
    </div>
  );
};

export default BikeSlugPage;


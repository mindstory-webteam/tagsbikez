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

  const metadataMap = {
    "hunter-350": {
      title: "Royal Enfield Hunter 350 in Kerala | Tags Bikez",
      description: "Discover the Royal Enfield Hunter 350 featuring agile handling, modern styling, and urban performance. Book a test ride today."
    },
    "bullet-350": {
      title: "Royal Enfield Bullet 350 in Kerala | Tags Bikez",
      description: "Experience the legendary Royal Enfield Bullet 350, blending timeless design, comfort, and dependable performance."
    },
    "classic-350": {
      title: "Royal Enfield Classic 350 in Kerala | Tags Bikez",
      description: "Explore the iconic Royal Enfield Classic 350 with retro styling, refined performance, and unmatched riding comfort."
    },
    "goan-classic-350": {
      title: "Royal Enfield Goan Classic 350 | Tags Bikez",
      description: "Discover the Royal Enfield Goan Classic 350 featuring a unique bobber-inspired design and relaxed cruising experience."
    },
    "scram-440": {
      title: "Royal Enfield Scram 440 in Kerala | Tags Bikez",
      description: "Explore the Royal Enfield Scram 440 built for urban adventures and versatile performance across different terrains."
    },
    "guerrilla-450": {
      title: "Royal Enfield Guerrilla 450 in Kerala | Tags Bikez",
      description: "Discover the Royal Enfield Guerrilla 450 with powerful performance, bold styling, and dynamic road presence."
    },
    "himalayan-450": {
      title: "Royal Enfield Himalayan 450 in Kerala | Tags Bikez",
      description: "Conquer every journey with the Royal Enfield Himalayan 450, engineered for adventure touring and off-road exploration."
    },
    "interceptor-650": {
      title: "Royal Enfield Interceptor 650 in Kerala | Tags Bikez",
      description: "Explore the Royal Enfield Interceptor 650, a modern classic roadster delivering smooth twin-cylinder performance."
    },
    "continental-gt-650": {
      title: "Royal Enfield Continental GT 650 | Tags Bikez",
      description: "Experience café racer perfection with the Royal Enfield Continental GT 650, featuring sporty styling and powerful performance."
    },
    "super-meteor-650": {
      title: "Royal Enfield Super Meteor 650 | Tags Bikez",
      description: "Ride in comfort with the Royal Enfield Super Meteor 650, a premium cruiser built for long-distance touring."
    },
    "shotgun-650": {
      title: "Royal Enfield Shotgun 650 in Kerala | Tags Bikez",
      description: "Discover the Royal Enfield Shotgun 650, combining custom-inspired design, comfort, and twin-cylinder performance."
    },
    "classic-650": {
      title: "Royal Enfield Classic 650 in Kerala | Tags Bikez",
      description: "Explore the Royal Enfield Classic 650, blending iconic heritage styling with powerful twin-cylinder performance."
    },
    "meteor-350": {
      title: "Royal Enfield Meteor 350 in Thrissur, Kerala | Tags Bikez",
      description: "Experience ultimate cruising comfort with the Royal Enfield Meteor 350, Explore colors, specs, and EMI options at Tags Bikez."
    },
    "interceptor-bear-650": {
      title: "Royal Enfield Interceptor Bear 650 in Thrissur, Kerala | Tags Bikez",
      description: "Explore the Royal Enfield Interceptor Bear 650, a modern classic roadster delivering smooth twin-cylinder performance."
    },
  };

  const matched = metadataMap[slug];
  
  return {
    title: matched ? matched.title : `${bike.name} | Tags Bikez`,
    description: matched ? matched.description : bike.description,
    alternates: {
      canonical: `https://tagsbikez.com/models/${slug}`,
    }
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


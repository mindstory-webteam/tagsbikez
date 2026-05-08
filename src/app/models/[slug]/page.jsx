import React from 'react';
import { notFound } from 'next/navigation';
import { bikeData } from '@/lib/data/bikes';
import BikeDetailView from '@/components/sections/models/BikeDetailView';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const bike = bikeData.find((b) => b.slug === slug);
  if (!bike) return { title: "Bike Not Found" };

  return {
    title: `${bike.name} | TagsBikez Royal Enfield`,
    description: bike.description,
  };
}

const BikeSlugPage = async ({ params }) => {
  const { slug } = await params;
  const bike = bikeData.find((b) => b.slug === slug);

  if (!bike) {
    notFound();
  }

  return (
    <div className="bike-slug-page">
      <BikeDetailView bike={bike} />
    </div>
  );
}

export default BikeSlugPage;

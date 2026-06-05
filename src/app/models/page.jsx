import React from 'react';
import ModelsSection from '@/components/layout/models/ModelsSection';

export const metadata = {
  title: "Royal Enfield Models in Kerala | Tags Bikez",
  description:
    "Discover the complete range of Royal Enfield motorcycles including Hunter 350, Classic 350, Himalayan 450, Interceptor 650, and more at Tags Bikez.",
  alternates: {
    canonical: "https://tagsbikez.com/models",
  },
};

const ModelsPage = () => {
  return (
    <div className="models-main-page">
      <ModelsSection />
    </div>
  )
}

export default ModelsPage;
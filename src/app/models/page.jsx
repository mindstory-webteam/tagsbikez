import React from 'react';
import ModelsSection from '@/components/layout/models/ModelsSection';

export const metadata = {
  title: "Royal Enfield Models | TagsBikez Thrissur",
  description: "Explore the full lineup of Royal Enfield motorcycles at TagsBikez, Thrissur. Find your perfect ride today.",
};

const ModelsPage = () => {
  return (
    <div className="models-main-page">
      <ModelsSection />
    </div>
  )
}

export default ModelsPage;
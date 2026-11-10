import React from 'react';
import ModelsSection from '@/components/layout/models/ModelsSection';

export const metadata = {
  title: "Royal Enfield Models in Kerala | Tags Bikez",
  description:
    "Discover the complete range of Royal Enfield motorcycles including Hunter 350, Classic 350, Himalayan 450, Interceptor 650, and more at Tags Bikez.",
  alternates: {
    canonical: "https://tagsbikez.com/models",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tags Bikez",
    url: "https://tagsbikez.com/models",
    title: "Royal Enfield Models in Kerala | Tags Bikez",
    description:
      "Discover the complete range of Royal Enfield motorcycles including Hunter 350, Classic 350, Himalayan 450, Interceptor 650, and more at Tags Bikez.",
    images: [
      {
        url: "https://tagsbikez.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Royal Enfield Models in Kerala | Tags Bikez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Enfield Models in Kerala | Tags Bikez",
    description:
      "Discover the complete range of Royal Enfield motorcycles including Hunter 350, Classic 350, Himalayan 450, Interceptor 650, and more at Tags Bikez.",
    images: ["https://tagsbikez.com/og-image.png"],
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
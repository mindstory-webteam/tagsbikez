'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSectionGallery = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current.querySelectorAll('.grid-cell');

      gsap.fromTo(
        items,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">

            <h2 className="text-5xl md:text-[42px]  text-black" style={{ fontSize: "42px", fontWeight: "400" }}>
              A TRADITION  OF <span className="text-red-600">TRUST</span>.
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              Since the 1960s, our family has brought rigour and relationships to the world of enterprise.
            </p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-12 border-l border-t border-gray-200"
        >
          <div className="grid-cell md:col-span-8 md:row-span-2 border-r border-b border-gray-200 relative group overflow-hidden h-125 md:h-auto">

            <Image
              src="/images/about/heritage.png"
              alt="Legacy of Bhavana"
              fill
              className="object-cover transition-transform duration-1000 "
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 z-20">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Legacy of Bhavana</h3>
              <p className="text-white/70 max-w-xl text-lg leading-relaxed">
                Rooted in a tradition of trust that started with A.F. George's father,
                building household names in Thrissur since the 1960s.
              </p>
            </div>
          </div>

          <div className="grid-cell md:col-span-4 border-r border-b border-gray-200 relative group overflow-hidden h-75">

            <Image
              src="/images/about/showroom.png"
              alt="Royal Enfield Showroom"
              fill
              className="object-cover grayscale transition-all duration-700 "
            />
            <div className="absolute inset-0 bg-red-600/10  transition-colors duration-500" />
          </div>

          <div className="grid-cell md:col-span-4 border-r border-b border-gray-200 relative group overflow-hidden h-75">

            <Image
              src="/images/about/community.png"
              alt="Rider Community"
              fill
              className="object-cover transition-transform duration-1000 "
            />
            <div className="absolute inset-0 bg-black/20  transition-colors duration-500" />
          </div>

          <div className="grid-cell md:col-span-4 border-r border-b border-gray-200 p-10 flex flex-col justify-between bg-gray-50transition-colors duration-500">

            <div>
              <h4 className="text-2xl font-bold mb-4  transition-colors duration-500">Lifelong Partners</h4>
              <p className="text-gray-600  transition-colors duration-500 leading-relaxed">
                We are enthusiasts and lifelong partners to every rider, supported by a network of dedicated service centres.
              </p>
            </div>

          </div>

          <div className="grid-cell md:col-span-4 border-r border-b border-gray-200 p-10 flex flex-col justify-between  transition-colors duration-500">

            <div>
              <h4 className="text-2xl font-bold mb-2">Thrissur & Palakkad</h4>
              <p className="text-gray-600 text-sm">
                Growing network of showrooms and service hubs across two major districts.
              </p>
            </div>
          </div>

          <div className="grid-cell md:col-span-4 border-r border-b border-gray-200 p-10 flex items-center justify-center bg-gray-900 text-white overflow-hidden relative">

            <p className="text-xl md:text-2xl font-bold text-center leading-tight ">
              "We are not just a dealership. We are community members."
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionGallery;

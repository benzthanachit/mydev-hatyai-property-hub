"use client";

import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  // Convert string array to Lightbox slide format
  const slides = images.map(src => ({ src }));

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[50vh] md:h-[60vh] max-h-[600px] min-h-[400px]">
        {/* Main large image */}
        <div 
          className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer"
          onClick={() => setIndex(0)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[0]} 
            alt="Main view" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
        </div>

        {/* Small image 1 */}
        {images.length > 1 && (
          <div 
            className="hidden md:block rounded-2xl overflow-hidden relative group cursor-pointer"
            onClick={() => setIndex(1)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[1]} 
              alt="View 2" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
          </div>
        )}

        {/* Small image 2 */}
        {images.length > 2 && (
          <div 
            className="hidden md:block rounded-2xl overflow-hidden relative group cursor-pointer"
            onClick={() => setIndex(2)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[2]} 
              alt="View 3" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
          </div>
        )}

        {/* Small image 3 (or "View All") */}
        {images.length > 3 && (
          <div 
            className="hidden md:block md:col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer"
            onClick={() => setIndex(3)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[3]} 
              alt="View 4" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
              <span className="text-white font-bold text-lg">View All {images.length} Photos</span>
            </div>
          </div>
        )}
      </section>

      <Lightbox
        open={open}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
        }}
      />
    </>
  );
}

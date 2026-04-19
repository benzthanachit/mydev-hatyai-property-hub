import { MapPin, Bed, Bath, Square, CheckCircle2, Share2, Heart, Calendar } from 'lucide-react';
import Link from 'next/link';

import { notFound } from 'next/navigation';
import { FEATURED_PROPERTIES } from '@/lib/mockData';
import PropertyGallery from '@/components/PropertyGallery';

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const property = FEATURED_PROPERTIES.find(p => p.id === id);
  
  if (!property) {
    notFound();
  }
  
  const PROPERTY_DATA = property;
  return (
    <article className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4 flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#properties" className="hover:text-indigo-600">Properties</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium truncate">{PROPERTY_DATA.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8">
        {/* Header Section */}
        <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide">
                {PROPERTY_DATA.status}
              </span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wide">
                {PROPERTY_DATA.type}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {PROPERTY_DATA.title}
            </h1>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-5 h-5 text-indigo-500" />
              <span className="text-lg">{PROPERTY_DATA.location}</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:items-end">
            <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-4 flex items-end gap-2">
              THB {PROPERTY_DATA.price}
              {PROPERTY_DATA.status === 'For Rent' && <span className="text-lg text-slate-500 font-medium mb-1">/ month</span>}
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors text-slate-700 font-medium">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors text-rose-600 font-medium">
                <Heart className="w-4 h-4" /> Save
              </button>
            </div>
          </div>
        </header>

        {/* Image Gallery Grid */}
        <PropertyGallery images={PROPERTY_DATA.images} />

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Key Specs */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-wrap gap-8 justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Bed className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-medium">Bedrooms</div>
                  <div className="text-xl font-bold text-slate-900">{PROPERTY_DATA.beds}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Bath className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-medium">Bathrooms</div>
                  <div className="text-xl font-bold text-slate-900">{PROPERTY_DATA.baths}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Square className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-medium">Living Area</div>
                  <div className="text-xl font-bold text-slate-900">{PROPERTY_DATA.sqm} m²</div>
                </div>
              </div>
            </section>

            {/* Description */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About this Property</h2>
              <div className="prose prose-slate max-w-none">
                {PROPERTY_DATA.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROPERTY_DATA.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Maps Placeholder */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Location Map</h2>
              <div className="w-full h-[400px] bg-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-500 relative overflow-hidden">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <MapPin className="w-12 h-12 text-indigo-400 mb-3" />
                <p className="font-medium z-10">Google Maps Embed Placeholder</p>
                <p className="text-sm z-10">Coordinates: 7.0097° N, 100.4705° E (Hat Yai)</p>
              </div>
            </section>

          </div>

          {/* Right Column (Sticky Form) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Interested in this property?</h3>
              <p className="text-slate-500 text-sm mb-6">Fill out the form below to schedule a viewing or request more info.</p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder-slate-400" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder-slate-400" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number / WhatsApp</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder-slate-400" placeholder="+66 XX XXX XXXX" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none placeholder-slate-400" defaultValue={`Hi, I'm interested in the ${PROPERTY_DATA.title}. Please contact me to schedule a viewing.`}></textarea>
                </div>
                
                <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 mt-4">
                  <Calendar className="w-5 h-5" /> Schedule a Viewing
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500 mb-3">Or contact agent directly:</p>
                <button className="w-full bg-green-50 text-green-700 hover:bg-green-100 font-bold py-3 rounded-xl transition-all border border-green-200">
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}

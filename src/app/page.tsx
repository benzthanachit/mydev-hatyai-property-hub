import { Search, ChevronDown, CheckCircle } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { FEATURED_PROPERTIES } from '@/lib/mockData';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-slate-900 border-b border-white border-opacity-10">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background image placeholder */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?auto=format&fit=crop&q=80&w=2000"
            alt="Hat Yai Cityscape"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center mt-[-40px]">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white text-center tracking-tight mb-6">
            Find Your Premium <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              Property in Hat Yai
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 text-center max-w-2xl font-light">
            Expert real estate services tailored for expats, investors, and locals seeking the best homes, condos, and apartments for rent or sale.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-full shadow-2xl border border-white/20">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl md:rounded-full overflow-hidden">
              <div className="flex-1 flex items-center w-full px-6 py-4 md:border-r border-slate-200">
                <Search className="w-5 h-5 text-slate-400 mr-3" />
                <input
                  type="text"
                  placeholder="Neighborhood or zip code..."
                  className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 font-medium"
                />
              </div>
              
              <div className="w-full h-px bg-slate-100 md:hidden" />
              
              <div className="flex items-center w-full md:w-auto px-6 py-4 md:border-r border-slate-200 cursor-pointer group">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium">Status</span>
                  <span className="font-medium text-slate-600 group-hover:text-indigo-600 transition-colors w-24 truncate">Buy / Rent</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 ml-2" />
              </div>

              <div className="w-full h-px bg-slate-100 md:hidden" />
              
              <div className="flex items-center w-full md:w-auto px-6 py-4 md:border-r border-slate-200 cursor-pointer group">
                <span className="font-medium text-slate-600 group-hover:text-indigo-600 transition-colors flex-1 md:w-32 truncate">Property Type</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>

              <div className="w-full h-px bg-slate-100 md:hidden" />

              <div className="flex items-center w-full md:w-auto px-6 py-4 md:pr-2 cursor-pointer group">
                <span className="font-medium text-slate-600 group-hover:text-indigo-600 transition-colors flex-1 md:w-32 truncate">Price Range</span>
                <ChevronDown className="w-4 h-4 text-slate-400 mr-4" />
                <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-colors w-full md:w-auto">
                  Search
                </button>
              </div>
              <div className="w-full p-2 md:hidden">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors w-full">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="properties" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Listings</h2>
              <p className="text-slate-600 text-lg">Handpicked premium properties available right now.</p>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-2.5 text-indigo-600 font-semibold border-2 border-indigo-100 rounded-full hover:bg-indigo-50 hover:border-indigo-200 transition-colors w-max">
              View All Properties
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Expertise You Can Trust</h2>
            <p className="text-lg text-slate-600">
              We bring a data-driven approach and unparalleled local network to help you make the best real estate decisions in Southern Thailand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expat Tailored Service</h3>
              <p className="text-slate-600">
                Fluent in English and Thai, we handle the complex paperwork and legalities of foreign ownership and long-term leasing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data-Driven Pricing</h3>
              <p className="text-slate-600">
                We leverage actual market data, rental yields, and area developments to ensure you get the right value for your investment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Knowledge</h3>
              <p className="text-slate-600">
                From finding the best hidden neighborhoods to knowing which areas flood during monsoon, we guide you with pure honesty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

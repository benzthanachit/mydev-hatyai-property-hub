import { CheckCircle, SearchX } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import SearchBar from '@/components/SearchBar';
import SortDropdown from '@/components/SortDropdown';
import { FEATURED_PROPERTIES } from '@/lib/mockData';
import { getDistanceFromLatLonInKm } from '@/lib/distance';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const q = typeof params.q === 'string' ? params.q.toLowerCase() : '';
  const status = typeof params.status === 'string' ? params.status : '';
  const type = typeof params.type === 'string' ? params.type : '';
  const userLat = typeof params.lat === 'string' ? parseFloat(params.lat) : null;
  const userLng = typeof params.lng === 'string' ? parseFloat(params.lng) : null;
  const sort = typeof params.sort === 'string' ? params.sort : '';

  // Let's create an extended property type for the grid
  let filteredProperties = FEATURED_PROPERTIES.map(p => ({
    ...p,
    distance: (userLat !== null && userLng !== null) 
      ? getDistanceFromLatLonInKm(userLat, userLng, p.lat, p.lng) 
      : undefined
  }));

  // If we only have text (user hit enter without picking an autocomplete suggestion)
  if (q && (userLat === null || userLng === null)) {
    filteredProperties = filteredProperties.filter(
      p => p.location.toLowerCase().includes(q) || p.title.toLowerCase().includes(q)
    );
  }

  // Filter based on dropdowns
  if (status) {
    filteredProperties = filteredProperties.filter(p => p.status === status);
  }
  if (type) {
    filteredProperties = filteredProperties.filter(p => p.type === type);
  }

  // If spatial coordinates exist, filter within reasonable radius (30km bounds)
  if (userLat !== null && userLng !== null) {
    filteredProperties = filteredProperties.filter(p => p.distance !== undefined && p.distance <= 30);
  }

  // Parse price utility function
  const parsePrice = (priceStr: string) => parseFloat(priceStr.replace(/,/g, ''));

  // Sorting Logic
  if (sort === 'price_asc') {
    filteredProperties.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sort === 'price_desc') {
    filteredProperties.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  } else if (sort === 'distance_asc') {
    // If distance is missing, push to bottom
    filteredProperties.sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));
  } else if (sort === 'distance_desc') {
    // If distance is missing, push to bottom
    filteredProperties.sort((a, b) => {
      // Both undefined => equal
      if (a.distance === undefined && b.distance === undefined) return 0;
      // b undefined => a goes first
      if (a.distance === undefined) return 1;
      if (b.distance === undefined) return -1;
      return b.distance - a.distance;
    });
  } else {
    // Default Sort (if no sort applied) -> Nearest First if using search, else recommended order
    if (userLat !== null && userLng !== null) {
      filteredProperties.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }
  }

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
          <SearchBar />
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
            <SortDropdown />
          </div>
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-white border border-slate-200 rounded-3xl w-full flex flex-col items-center">
              <SearchX className="w-16 h-16 text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-700 mb-2">No properties found</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                We couldn't find any properties matching your criteria. Try adjusting your search filters.
              </p>
            </div>
          )}
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

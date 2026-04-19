import Link from 'next/link';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  imageUrl: string;
  type: string;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  beds,
  baths,
  sqm,
  imageUrl,
  type,
  status = 'For Sale',
}: PropertyCardProps & { status?: string }) {
  return (
    <Link href={`/properties/${id}`} className="group block rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Fallback to standard img to avoid next.config.options for placeholders during design phase */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 shadow-sm w-max">
            {type}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm w-max ${status === 'For Rent' ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-slate-500 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-xs font-medium uppercase tracking-wider">{location}</span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        
        <div className="text-xl font-extrabold text-indigo-600 mb-4">
          THB {price} {status === 'For Rent' && <span className="text-sm font-medium text-slate-500">/ month</span>}
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 py-4 border-t border-slate-100 text-slate-600">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">{beds}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">{baths}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">{sqm} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

"use client";

import { ChevronDown, ArrowDownUp } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') || '';

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set('sort', e.target.value);
    } else {
      params.delete('sort');
    }
    router.push(`/?${params.toString()}#properties`, { scroll: false });
  };

  return (
    <div className="relative flex items-center bg-white border-2 border-indigo-50 rounded-full px-4 py-2 hover:border-indigo-100 transition-colors mt-6 md:mt-0">
      <ArrowDownUp className="w-4 h-4 text-indigo-500 mr-2" />
      <select
        value={currentSort}
        onChange={handleSortChange}
        className="appearance-none bg-transparent outline-none font-semibold text-slate-700 cursor-pointer pr-6 text-sm"
      >
        <option value="">Recommended</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <optgroup label="Location Based">
          <option value="distance_asc">Distance: Nearest First</option>
          <option value="distance_desc">Distance: Farthest First</option>
        </optgroup>
      </select>
      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
    </div>
  );
}

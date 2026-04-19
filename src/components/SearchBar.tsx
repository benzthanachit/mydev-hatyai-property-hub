"use client";

import { Search, ChevronDown, MapPin, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useJsApiLoader } from '@react-google-maps/api';

const libraries: "places"[] = ["places"];

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [q, setQ] = useState(searchParams.get('q') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [lat, setLat] = useState<number | null>(searchParams.has('lat') ? parseFloat(searchParams.get('lat') as string) : null);
  const [lng, setLng] = useState<number | null>(searchParams.has('lng') ? parseFloat(searchParams.get('lng') as string) : null);
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries,
  });

  useEffect(() => {
    if (isLoaded && window.google && !autocompleteService.current) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
      placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'));
    }
  }, [isLoaded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowPredictions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQ(val);
    setLat(null); // Reset when user manually types
    setLng(null);
    
    if (val.trim().length > 0 && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        { input: val, componentRestrictions: { country: "th" } },
        (preds, status) => {
          if (status === 'OK' && preds) {
            setPredictions(preds.slice(0, 5));
            setShowPredictions(true);
          } else {
            // Push a temporary fake prediction to show the error code visibly on screen 
            setPredictions([{ 
                description: `API Error: ${status}. Please check your API Key & Places API limits.`, 
                place_id: "error", 
                structured_formatting: { main_text: `System Alert: ${status}`, secondary_text: "API Issue" }
            } as any]);
            setShowPredictions(true);
          }
        }
      );
    } else if (!autocompleteService.current) {
      setPredictions([{ description: "Service is still loading... Please wait or refresh.", place_id: "loading" } as any]);
      setShowPredictions(true);
    } else {
      setPredictions([]);
      setShowPredictions(false);
    }
  };

  const handleSelectPrediction = (placeId: string, description: string) => {
    if (placeId === "error" || placeId === "loading") return; // Prevent clicking on debug messages

    setQ(description);
    setShowPredictions(false);
    if (placesService.current) {
      placesService.current.getDetails(
        { placeId, fields: ['geometry'] },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.geometry?.location) {
            setLat(place.geometry.location.lat());
            setLng(place.geometry.location.lng());
          }
        }
      );
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (status) params.set('status', status);
    if (type) params.set('type', type);
    if (lat !== null) params.set('lat', lat.toString());
    if (lng !== null) params.set('lng', lng.toString());
    router.push(`/?${params.toString()}#properties`, { scroll: false });
  };

  const handleClear = () => {
    setQ('');
    setStatus('');
    setType('');
    setLat(null);
    setLng(null);
    router.push('/', { scroll: false }); // Navigate completely clean
  };

  const hasFilters = q || status || type || lat !== null;

  return (
    <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-full shadow-2xl border border-white/20">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl md:rounded-full relative">
        
        {/* Text Input with Custom Autocomplete UI */}
        <div className="flex-1 flex items-center w-full px-6 py-4 md:border-r border-slate-200 relative" ref={dropdownRef}>
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            value={q}
            onChange={handleInputChange}
            onClick={() => { if (predictions.length > 0) setShowPredictions(true) }}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search Hat Yai neighborhood..."
            className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 font-medium"
          />
          
          {/* Custom Floating Dropdown */}
          {showPredictions && predictions.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-4 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 overflow-hidden py-2">
              {predictions.map((p) => (
                <div 
                  key={p.place_id}
                  onClick={() => handleSelectPrediction(p.place_id, p.description)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <div className="bg-slate-100 p-2 rounded-full text-slate-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-700 truncate">{p.structured_formatting?.main_text || p.description}</span>
                    <span className="text-xs text-slate-400 truncate">{p.structured_formatting?.secondary_text}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="w-full h-px bg-slate-100 md:hidden" />
        
        {/* Status Dropdown */}
        <div className="relative flex items-center w-full md:w-auto px-6 py-4 md:border-r border-slate-200 group">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-slate-400 font-medium leading-none mb-1">Status</span>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="appearance-none bg-transparent outline-none font-medium text-slate-600 focus:text-indigo-600 w-24 md:w-32 cursor-pointer z-10"
            >
              <option value="">Any</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-6 pointer-events-none" />
        </div>

        <div className="w-full h-px bg-slate-100 md:hidden" />
        
        {/* Property Type Dropdown */}
        <div className="relative flex items-center w-full md:w-auto px-6 py-4 group">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-slate-400 font-medium leading-none mb-1">Property Type</span>
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none bg-transparent outline-none font-medium text-slate-600 focus:text-indigo-600 w-32 md:w-40 cursor-pointer z-10"
            >
              <option value="">Any Type</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
              <option value="Apartment">Apartment</option>
              <option value="Room for Rent">Room for Rent</option>
            </select>
          </div>
          
          <div className="hidden md:flex ml-4 gap-2 items-center relative z-10">
            {hasFilters && (
              <button 
                onClick={handleClear}
                className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors flex-shrink-0"
                title="Clear Search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button 
              onClick={handleSearch}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Search
            </button>
          </div>
        </div>

        <div className="w-full p-2 md:hidden flex items-center gap-2">
          {hasFilters && (
            <button 
              onClick={handleClear}
              className="bg-slate-100 hover:bg-slate-200 text-slate-500 px-4 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center w-14"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button 
            onClick={handleSearch}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors flex-1"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

# Hat Yai Expat Realty

This is a modern real estate web application built with **Next.js (App Router)** and **Tailwind CSS**. It is designed to handle property sales as well as rentals (including houses, condos, apartments, and rooms for rent).

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🗄️ Supabase Database Setup Guide

In the future, we will connect this application to **Supabase** to manage our properties, images, and leads dynamically. Before we wire it up to the Next.js app, please create an account on [Supabase](https://supabase.com/) and create a new project. 

Once your project is created, open the **SQL Editor** in your Supabase dashboard and run the following queries to create the necessary tables.

### 1. Create `properties` Table

This table stores all the listings, accommodating both sales and rentals:

```sql
CREATE TABLE public.properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('For Sale', 'For Rent')),
  type TEXT NOT NULL CHECK (type IN ('House', 'Condo', 'Apartment', 'Room for Rent', 'Commercial')),
  location TEXT NOT NULL,
  beds INTEGER DEFAULT 0,
  baths NUMERIC DEFAULT 0,
  sqm NUMERIC,
  amenities TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Note: The `price` column will represent the full price if `status` = 'For Sale', 
-- and the monthly rental rate if `status` = 'For Rent'.
```

### 2. Create `property_images` Table

This table handles the image gallery for each property:

```sql
CREATE TABLE public.property_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  is_primary BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### 3. Create `leads` Table

This table captures inquiries from the "Schedule a Viewing" form:

```sql
CREATE TABLE public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### 4. Setup Row Level Security (RLS)

To secure our data, we need to apply policies:

```sql
-- Enable RLS on all tables
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Properties: Anyone can READ published properties
CREATE POLICY "Public can view published properties" ON public.properties
  FOR SELECT USING (is_published = true);

-- Images: Anyone can READ images
CREATE POLICY "Public can view property images" ON public.property_images
  FOR SELECT USING (true);

-- Leads: Anyone can INSERT (submit a form), but only admins can view
CREATE POLICY "Anyone can submit a lead" ON public.leads
  FOR INSERT WITH CHECK (true);
```

### Optional: Insert Dummy Data

If you want to test the database right away, run this snippet:

```sql
INSERT INTO public.properties (title, description, price, status, type, location, beds, baths, sqm)
VALUES 
('Modern Condo near PSU', 'Great investment opportunity.', 2500000, 'For Sale', 'Condo', 'Kho Hong', 1, 1, 35),
('Cozy Room for Rent near Downtown', 'Fully furnished room.', 6500, 'For Rent', 'Room for Rent', 'Downtown', 1, 1, 28);
```

## Next Steps

Once you have executed these scripts in your Supabase SQL Editor:
1. Go to your Supabase Project Settings -> **API**.
2. Copy your **Project URL** and **anon public key**.
3. Let me know, and I will write the code to connect the Next.js app using `@supabase/supabase-js`.

---

## 🗺️ Google Maps API Setup (Autocomplete & Distance)

This application uses the **Google Maps Platform** to provide localized Thai/English autocomplete and to calculate the distance from properties to searched neighborhoods.

To enable this feature:
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and set up your billing account (Google provides $200 free monthly credit).
3. Enable the following APIs:
   - **Places API** (for Autocomplete suggestions)
   - **Maps JavaScript API** (required to load the client scripts)
   - **Geocoding API** (optional, but recommended for full fallback support)
4. Generate an **API Key** under "Credentials".
5. Create a file named `.env.local` in the root of your project:
   ```bash
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```
6. Restart your development server (`npm run dev`). The search bar will instantly transform into an intelligent Google Autocomplete input!

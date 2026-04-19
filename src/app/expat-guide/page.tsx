import { BookOpen, ShieldCheck, HeartPulse, Home, Compass } from 'lucide-react';
import Link from 'next/link';

export default function ExpatGuidePage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden bg-slate-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000"
            alt="Thailand Travel"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-sm font-medium mb-4 backdrop-blur-md">
            <BookOpen className="w-4 h-4" />
            Official Resource
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            The Ultimate Expat Guide <br className="hidden sm:block" /> to Hat Yai
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Everything you need to know about moving, living, and investing in Southern Thailand's most vibrant commercial hub.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Visas & Immigration</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Understand the key visa options for staying long-term in Hat Yai, including Retirement (O-A/O-X), Education (ED), Elite Visa, and the new LTR (Long-Term Resident) programs.
            </p>
            <Link href="#contact" className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 flex items-center gap-1 group">
              Get Visa Advice <Compass className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Foreign Property Laws</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Foreigners can legally own condominiums freehold in Thailand (up to 49% of the building). Learn about land leaseholds, company ownership structures, and avoiding common pitfalls.
            </p>
            <Link href="/" className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 flex items-center gap-1 group">
              Browse Condos <Compass className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Healthcare System</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Hat Yai boasts excellent medical facilities including Bangkok Hospital Hat Yai and Songklanagarind Hospital (PSU). Discover world-class care at a fraction of Western costs.
            </p>
            <a href="#" className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 flex items-center gap-1 group">
              Learn More <Compass className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Lifestyle & Transport</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Located just hours from the Malaysian border and beautiful islands, Hat Yai is the perfect hub. Familiarize yourself with Grab, local Songthaews, and the cheapest flight routes.
            </p>
            <a href="#" className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 flex items-center gap-1 group">
              Explore Neighborhoods <Compass className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="container mx-auto px-4 mt-20 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Hat Yai?</h2>
          <div className="prose prose-slate max-w-none prose-indigo">
            <p className="text-slate-600 leading-relaxed mb-4">
              While cities like Bangkok, Chiang Mai, and Phuket command the majority of expat attention, <strong>Hat Yai</strong> represents an incredible, often overlooked opportunity. As the largest city in Southern Thailand and a primary commercial conduit to Malaysia and Singapore, Hat Yai offers a highly developed infrastructure without the extreme tourist prices.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Cost of Living:</strong> Expect to spend 30-40% less on rent and dining compared to Bangkok. A luxury modern condo in the heart of the city can be rented for a fraction of the cost you'd typically expect.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong>Community:</strong> Our local team at Hat Yai Expat Realty is bilingual, deeply knowledgeable, and dedicated to fighting for your best interests. We do not just lease properties; we build communities.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
              <h4 className="font-bold text-slate-900 mb-2">Need a personalized relocation plan?</h4>
              <p className="text-sm text-slate-500 mb-4">Leave us your details and our team will guide you through the process step-by-step.</p>
              <Link href="/#contact" className="inline-flex bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors">
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

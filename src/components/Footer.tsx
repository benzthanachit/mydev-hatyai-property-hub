import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-lg font-bold text-white">Hat Yai Expat Realty</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Your trusted partner for premium real estate investments and expat living in Hat Yai, Thailand.
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@hatyaiexpatrealty.com" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@hatyaiexpatrealty.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+6600000000" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+66 (0) 00-000-0000</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp / LINE OA</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours Col */}
          <div>
            <h3 className="text-white font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Mon - Fri (Part-time)</span>
                <span className="text-slate-300">17:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span className="text-slate-300">09:00 - 18:00</span>
              </li>
              <li className="mt-4 pt-4 border-t border-slate-800">
                <span className="block text-xs text-slate-500">Available via messaging 24/7 for urgent inquiries.</span>
              </li>
            </ul>
          </div>

          {/* Neighborhoods Col */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  PSU University Area (Kho Hong)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  Hat Yai Downtown
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  Central Festival Vicinity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  Hatyai Nai / Airport Road
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Hat Yai Expat Realty. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

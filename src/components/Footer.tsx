import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-background mt-16">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Super Bazaar" className="w-12 h-12 rounded-lg object-contain" />
          <div>
            <h3 className="font-bold text-lg">Super Bazaar</h3>
            <p className="text-sm opacity-70">Hypermarket</p>
          </div>
        </div>
        <p className="text-sm opacity-70 leading-relaxed">
          Your one-stop shop for fresh groceries, household items, and daily essentials. Quality products at the best prices.
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-base">Contact Us</h4>
        <div className="space-y-2 text-sm opacity-80">
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> Jebel Ali Industrial Area 1, Dubai, UAE</p>
          <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +971 4 XXX XXXX</p>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@superbazaar.ae</p>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-base">Store Hours</h4>
        <div className="space-y-2 text-sm opacity-80">
          <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon - Sat: 8:00 AM – 10:00 PM</p>
          <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> Sunday: 9:00 AM – 9:00 PM</p>
        </div>
        <div className="pt-2">
          <h4 className="font-semibold text-base mb-2">Quick Links</h4>
          <div className="flex gap-4 text-sm opacity-80">
            <a href="/products" className="hover:opacity-100 transition-opacity">Products</a>
            <a href="/cart" className="hover:opacity-100 transition-opacity">Cart</a>
            <a href="/orders" className="hover:opacity-100 transition-opacity">Orders</a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10 py-4 text-center text-xs opacity-50">
      © 2026 Super Bazaar Hypermarket. All rights reserved.
    </div>
  </footer>
);

export default Footer;

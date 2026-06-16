import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/lib/data";
import { openingHours, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white dark:bg-slate-950">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <p className="text-xl font-bold">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-200">{siteConfig.description}</p>
          <div className="mt-6 grid gap-3 text-sm text-slate-200">
            <a className="focus-ring inline-flex items-center gap-3 rounded-lg" href={siteConfig.phoneHref}>
              <Phone aria-hidden="true" size={18} /> {siteConfig.phone}
            </a>
            <a className="focus-ring inline-flex items-center gap-3 rounded-lg" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" size={18} /> {siteConfig.email}
            </a>
            <p className="inline-flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 shrink-0" size={18} /> {siteConfig.address}
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold">Pages</p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} className="focus-ring rounded-lg text-sm text-slate-200 hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Opening Hours</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-200">
            {openingHours.map((item) => (
              <p key={item.day} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span>{item.day}</span>
                <span className="text-right">{item.time}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col gap-2 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Prepared for Vercel and Netlify deployment.</p>
        </div>
      </div>
    </footer>
  );
}

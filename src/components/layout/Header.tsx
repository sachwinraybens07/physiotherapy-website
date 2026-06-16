"use client";

import Link from "next/link";
import { Menu, X, HeartPulse } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LinkButton } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
      <nav className="container-page flex min-h-20 items-center justify-between gap-4" aria-label="Primary navigation">
        <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-lg" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue text-white dark:bg-brand-green dark:text-slate-950">
            <HeartPulse aria-hidden="true" size={24} />
          </span>
          <span>
            <span className="block text-base font-bold leading-5 text-brand-navy dark:text-white">{siteConfig.shortName}</span>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-300">Physio & Rehab</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-brand-sky text-brand-navy dark:bg-white/10 dark:text-white"
                    : "text-slate-600 hover:bg-brand-sky hover:text-brand-navy dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <LinkButton href="/appointment">Book Visit</LinkButton>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-brand-navy lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="container-page grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-sky dark:text-slate-200 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <ThemeToggle />
              <LinkButton href="/appointment" className="flex-1" onClick={() => setOpen(false)}>
                Book Visit
              </LinkButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

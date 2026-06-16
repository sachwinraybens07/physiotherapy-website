import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/5">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={`${service.title} treatment session`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-mint text-brand-navy dark:bg-brand-green/20 dark:text-brand-green">
          <Icon aria-hidden="true" size={22} />
        </div>
        <h3 className="text-xl font-bold text-brand-navy dark:text-white">{service.title}</h3>
        <p className="mt-3 min-h-24 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
        <Link
          href="/appointment"
          className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-brand-blue transition hover:text-brand-navy dark:text-brand-green dark:hover:text-white"
        >
          Book this service <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}

import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { LinkButton } from "@/components/ui/Button";

export function ServicesOverview({ limit }: { limit?: number }) {
  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="section bg-brand-sky dark:bg-slate-900">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Targeted rehabilitation for every stage of recovery"
            description="From first assessment to long-term prevention, our care plans are built around your goals, daily life, and clinical needs."
          />
          {limit ? <LinkButton href="/services" variant="secondary">View All Services</LinkButton> : null}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

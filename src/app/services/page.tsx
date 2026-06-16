import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore physiotherapy and rehabilitation services including sports injury rehab, back pain care, neuro rehab, pediatric physio, and home visits.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="Physiotherapy programs for pain relief, performance, and independence"
            description="Each service begins with a detailed assessment and a recovery plan matched to your goals."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.slug} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <service.icon aria-hidden="true" className="mb-4 text-brand-blue dark:text-brand-green" size={28} />
                <h2 className="text-lg font-bold text-brand-navy dark:text-white">{service.title}</h2>
                <ul className="mt-4 grid gap-2">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-brand-green" size={16} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesOverview />
      <AppointmentCTA />
    </>
  );
}

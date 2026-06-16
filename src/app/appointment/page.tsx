import type { Metadata } from "next";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Book a physiotherapy appointment online or continue through WhatsApp.",
};

export default function AppointmentPage() {
  return (
    <>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Appointment"
              title="Tell us what you need help with"
              description="Submit the form and our care coordinator will confirm your appointment. For urgent scheduling, use the WhatsApp option."
            />
            <div className="rounded-lg bg-brand-sky p-6 text-sm leading-7 text-slate-700 dark:bg-white/5 dark:text-slate-200">
              <p className="font-bold text-brand-navy dark:text-white">What happens next?</p>
              <p className="mt-2">We review your concern, match you with the right therapist, and confirm timing by phone or WhatsApp.</p>
            </div>
          </div>
          <AppointmentForm />
        </div>
      </section>
      <ContactPreview />
    </>
  );
}

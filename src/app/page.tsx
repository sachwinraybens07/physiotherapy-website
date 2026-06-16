import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview limit={6} />
      <WhyChooseUs />
      <TestimonialsPreview />
      <AppointmentCTA />
      <ContactPreview />
    </>
  );
}

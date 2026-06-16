import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  const text = encodeURIComponent("Hello HealingMotion, I would like to book a physiotherapy appointment.");

  return (
    <a
      aria-label="Chat on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#1eb85a]"
      href={`https://wa.me/${siteConfig.whatsapp}?text=${text}`}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" size={27} />
    </a>
  );
}

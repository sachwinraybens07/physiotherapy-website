import { Home } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <div className="container-page max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-brand-navy dark:text-white">Page not found</h1>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          The page you are looking for may have moved or is no longer available.
        </p>
        <div className="mt-8">
          <LinkButton href="/">
            <Home aria-hidden="true" size={18} /> Return Home
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

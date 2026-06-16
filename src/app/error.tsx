"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <div className="container-page max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-brand-navy dark:text-white">Something went wrong</h1>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          We could not load this page right now. Please try again.
        </p>
        <div className="mt-8">
          <Button onClick={reset} type="button">
            <RotateCcw aria-hidden="true" size={18} /> Try Again
          </Button>
        </div>
      </div>
    </section>
  );
}

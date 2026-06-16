"use client";

import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { FormEvent, ReactNode, useMemo, useState } from "react";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  visitType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  visitType: "Clinic visit",
  message: "",
};

export function AppointmentForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hello HealingMotion, I would like to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred date: ${form.date}\nVisit type: ${form.visitType}`,
    );
    return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
  }, [form]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSuccess(false);
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) nextErrors.name = "Please enter your full name.";
    if (!/^[0-9+\-\s()]{8,}$/.test(form.phone.trim())) nextErrors.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.service) nextErrors.service = "Please choose a service.";
    if (!form.date) nextErrors.date = "Please choose a preferred date.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 800);
  }

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5" onSubmit={submit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input className="input" value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Aarav Mehta" />
        </Field>
        <Field label="Phone number" error={errors.phone}>
          <input className="input" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+91 98765 43210" />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input className="input" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" />
        </Field>
        <Field label="Service" error={errors.service}>
          <select className="input" value={form.service} onChange={(event) => updateField("service", event.target.value)}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>{service.title}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date" error={errors.date}>
          <input className="input" type="date" value={form.date} onChange={(event) => updateField("date", event.target.value)} />
        </Field>
        <Field label="Visit type">
          <select className="input" value={form.visitType} onChange={(event) => updateField("visitType", event.target.value)}>
            <option>Clinic visit</option>
            <option>Home visit</option>
            <option>Online consultation</option>
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label="What would you like help with?">
            <textarea
              className="input min-h-32 resize-y"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us about pain, surgery, injury, mobility concerns, or goals."
            />
          </Field>
        </div>
      </div>

      {success ? (
        <div className="mt-6 rounded-lg border border-brand-green/40 bg-brand-mint p-4 text-sm font-semibold text-brand-navy dark:bg-brand-green/15 dark:text-brand-green">
          <p className="flex items-center gap-2"><CheckCircle2 aria-hidden="true" size={18} /> Appointment request received. We will call you shortly.</p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button disabled={submitting} type="submit">
          {submitting ? <Loader2 aria-hidden="true" className="animate-spin" size={18} /> : <Send aria-hidden="true" size={18} />}
          {submitting ? "Sending..." : "Send Request"}
        </Button>
        <a
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand-blue/20 bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:bg-brand-sky dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden="true" size={18} /> Continue on WhatsApp
        </a>
      </div>
      <style jsx>{`
        .input {
          width: 100%;
          min-height: 48px;
          border-radius: 0.5rem;
          border: 1px solid rgb(203 213 225);
          background: white;
          padding: 0.75rem 0.9rem;
          color: rgb(15 37 53);
          outline: none;
        }
        .input:focus-visible {
          border-color: #1d75bd;
          box-shadow: 0 0 0 3px rgba(29, 117, 189, 0.18);
        }
        :global(.dark) .input {
          border-color: rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-brand-navy dark:text-white">{label}</span>
      {children}
      {error ? <span className="text-sm font-semibold text-red-600 dark:text-red-300">{error}</span> : null}
    </label>
  );
}

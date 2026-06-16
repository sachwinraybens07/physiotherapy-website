type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-normal text-brand-navy dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

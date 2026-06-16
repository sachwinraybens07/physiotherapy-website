export default function Loading() {
  return (
    <div className="container-page flex min-h-[55vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-blue/20 border-t-brand-blue" aria-label="Loading" />
    </div>
  );
}

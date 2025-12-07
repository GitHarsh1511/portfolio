// app/loading.tsx

export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 space-y-10 animate-pulse">
      {/* Hero skeleton */}
      <section className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">
        <div className="space-y-4">
          <div className="h-3 w-40 rounded-full bg-slate-800" />

          <div className="space-y-3">
            <div className="h-8 w-64 rounded-full bg-slate-800" />
            <div className="h-8 w-48 rounded-full bg-slate-800" />
          </div>

          <div className="space-y-2">
            <div className="h-3 w-full max-w-md rounded-full bg-slate-800" />
            <div className="h-3 w-5/6 rounded-full bg-slate-800" />
          </div>

          <div className="flex gap-3 pt-2">
            <div className="h-9 w-28 rounded-full bg-slate-800" />
            <div className="h-9 w-32 rounded-full bg-slate-900 border border-slate-800" />
          </div>
        </div>

        <div className="h-56 md:h-72 rounded-3xl bg-slate-900 border border-slate-800" />
      </section>

      {/* Cards skeleton (for projects / resume sections) */}
      <section className="space-y-4">
        <div className="h-4 w-32 rounded-full bg-slate-800" />
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3"
            >
              <div className="h-4 w-2/3 rounded-full bg-slate-800" />
              <div className="h-3 w-1/3 rounded-full bg-slate-800" />
              <div className="space-y-2 pt-2">
                <div className="h-3 w-full rounded-full bg-slate-800" />
                <div className="h-3 w-5/6 rounded-full bg-slate-800" />
                <div className="h-3 w-3/4 rounded-full bg-slate-800" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

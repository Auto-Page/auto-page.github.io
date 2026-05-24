const features = [
  {
    title: "Weekly Idea Drops",
    body: "Get practical micro-SaaS and AI application ideas every week, designed to be tested quickly.",
    delay: "delay-1"
  },
  {
    title: "Builder-First Insights",
    body: "Each issue focuses on opportunity, execution, and go-to-market angles for founders and developers.",
    delay: "delay-2"
  },
  {
    title: "Community Momentum",
    body: "Learn with others shipping in public through a focused mailing-list community.",
    delay: "delay-3"
  },
  {
    title: "Actionable Every Time",
    body: "No fluff. Every edition gives clear prompts you can turn into experiments this week.",
    delay: "delay-1"
  }
];

const steps = [
  "Subscribe to the Auto-Page mailing list in under a minute.",
  "Receive a curated weekly brief with startup and AI business ideas.",
  "Pick one concept, validate fast, and ship your next experiment."
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-sand text-slate-900">
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <section className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-10 sm:px-8 lg:px-12">
        <header className="reveal-up flex items-center justify-between gap-4 py-4">
          <p className="font-heading text-xl font-bold tracking-tight">Auto-Page</p>
          <a
            href="#join"
            className="rounded-full border border-slate-900/20 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
          >
            Join the List
          </a>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="reveal-up">
            <p className="mb-3 inline-block rounded-full bg-coral/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-coral-dark">
              Weekly for Builders
            </p>
            <h1 className="font-heading text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              A community mailing list for micro-SaaS and AI business ideas.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base text-slate-700 sm:text-lg">
              Auto-Page shares new startup ideas weekly for entrepreneurs and developers who want to build and
              launch faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-700"
              >
                Join Weekly Updates
              </a>
              <a
                href="#support"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/15 transition hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="reveal-up delay-1 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-600">This week&apos;s issue</p>
            <div className="mt-4 space-y-3">
              <div className="schedule-card">
                <p className="time">01</p>
                <p className="label">3 micro-SaaS idea concepts</p>
              </div>
              <div className="schedule-card">
                <p className="time">02</p>
                <p className="label">1 AI application breakdown</p>
              </div>
              <div className="schedule-card">
                <p className="time">03</p>
                <p className="label">Execution notes for this week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8 lg:px-12" id="features">
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              className={`reveal-up rounded-3xl border border-slate-900/10 bg-white/85 p-6 shadow-soft ${feature.delay}`}
              key={feature.title}
            >
              <h2 className="font-heading text-2xl font-semibold tracking-tight">{feature.title}</h2>
              <p className="mt-3 text-sm text-slate-700 sm:text-base">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-2 lg:px-12" id="how-it-works">
        <article className="reveal-up rounded-3xl bg-slate-900 p-7 text-slate-100 shadow-soft">
          <h2 className="font-heading text-3xl font-semibold">How it works</h2>
          <ol className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <li className="flex items-start gap-3" key={step}>
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral text-xs font-bold text-slate-900">
                  {index + 1}
                </span>
                <p className="text-sm text-slate-200 sm:text-base">{step}</p>
              </li>
            ))}
          </ol>
        </article>

        <article id="join" className="reveal-up delay-1 rounded-3xl bg-coral p-7 text-slate-900 shadow-soft">
          <h2 className="font-heading text-3xl font-semibold">Join Auto-Page</h2>
          <p className="mt-4 text-sm sm:text-base">
            Subscribe to get weekly ideas and insights for building your next micro-SaaS or AI business.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@auto-page.com?subject=Join%20Auto-Page%20Mailing%20List"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Subscribe by Email
            </a>
          </div>
        </article>
      </section>

      <footer id="support" className="border-t border-slate-900/10 bg-white/70 py-10 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <div>
            <p className="font-heading text-lg font-semibold">Need help?</p>
            <p className="text-sm text-slate-700">Reach out if you want to collaborate, contribute, or suggest ideas.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:fangzhangnz@gmail.com"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const workflow = [
  "Create an account and launch a company mission.",
  "Submit your idea, target outcome, and constraints.",
  "AI CEO builds the operating plan and delegates to AI departments.",
  "Departments execute research, product, engineering, marketing, and QA tasks.",
  "AI CEO resolves internal questions first and only escalates to you when needed.",
  "Receive a final CEO summary plus department reports, risks, and next steps."
];

const entryPoints = [
  {
    title: "Start With Your Own Idea",
    body: "Bring your concept, market, and constraints. The AI CEO converts it into milestones and execution cycles.",
    cta: "Start Company",
    href: "#login"
  },
  {
    title: "Start From Idea Library",
    body: "No idea yet? Browse curated opportunities and launch one into a private AI-run company workspace.",
    cta: "Explore Ideas",
    href: "#entry"
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Auto-Page",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "A one-person company platform where an AI CEO coordinates AI departments to plan, execute, and report on business missions.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  publisher: {
    "@type": "Organization",
    name: "Auto-Page"
  },
  url: "https://auto-page.com"
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-sand text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <section className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-10 sm:px-8 lg:px-12">
        <header className="reveal-up flex items-center justify-between gap-4 py-4">
          <p className="font-heading text-xl font-bold tracking-tight">Auto-Page</p>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
            <a href="#workflow" className="rounded-full px-3 py-1.5 transition hover:bg-white/70">
              How works
            </a>
            <a href="#entry" className="rounded-full px-3 py-1.5 transition hover:bg-white/70">
              Idea Library
            </a>
            <a href="#login" className="rounded-full px-3 py-1.5 transition hover:bg-white/70">
              Login
            </a>
          </nav>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="reveal-up">
            <p className="mb-3 inline-block rounded-full bg-coral/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-coral-dark">
              One-Person Company Platform
            </p>
            <h1 className="font-heading text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Run a company with an AI CEO and AI employees.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base text-slate-700 sm:text-lg">
              Auto-Page is a public platform where users can launch private company missions, monitor AI team execution,
              and receive consolidated CEO-level reports.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#entry"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-700"
              >
                Start Your Company
              </a>
              <a
                href="#workflow"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/15 transition hover:-translate-y-0.5"
              >
                See Workflow
              </a>
            </div>
          </div>

          <div className="reveal-up delay-1 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-600">Workflow</p>
            <div className="mt-4 space-y-3">
              <div className="schedule-card">
                <p className="time">01</p>
                <p className="label">We raise an idea</p>
              </div>
              <div className="schedule-card">
                <p className="time">02</p>
                <p className="label">AI CEO creates plan and monitor the process</p>
              </div>
              <div className="schedule-card">
                <p className="time">03</p>
                <p className="label">AI departments execute and report</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-8 sm:px-8 lg:px-12" id="entry">
        <div className="grid gap-4 lg:grid-cols-2">
          {entryPoints.map((item, idx) => (
            <article
              key={item.title}
              className={`reveal-up rounded-3xl border border-slate-900/10 bg-white/85 p-7 shadow-soft ${idx === 1 ? "delay-1" : ""}`}
            >
              <h2 className="font-heading text-3xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-700 sm:text-base">{item.body}</p>
              <a
                href={item.href}
                className="mt-6 inline-block rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-2 lg:px-12" id="workflow">
        <article className="reveal-up rounded-3xl bg-slate-900 p-7 text-slate-100 shadow-soft">
          <h2 className="font-heading text-3xl font-semibold">How it works</h2>
          <ol className="mt-5 space-y-4">
            {workflow.map((step, index) => (
              <li className="flex items-start gap-3" key={step}>
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral text-xs font-bold text-slate-900">
                  {index + 1}
                </span>
                <p className="text-sm text-slate-200 sm:text-base">{step}</p>
              </li>
            ))}
          </ol>
        </article>

        <article id="login" className="reveal-up delay-1 rounded-3xl bg-coral p-7 text-slate-900 shadow-soft">
          <h2 className="font-heading text-3xl font-semibold">Trust, Security, And Control</h2>
          <p className="mt-4 text-sm sm:text-base">
            Built for a public multi-user product with private workspaces, role-based access, and audit-ready workflow logs.
          </p>
          <ul className="mt-5 space-y-2 text-sm sm:text-base">
            <li>Google and email sign-in</li>
            <li>Tenant-safe data isolation</li>
            <li>Authorization on all private resources</li>
            <li>Mobile access for status and reports</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:fangzhangnz@gmail.com?subject=Auto-Page%20Platform%20Access"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Request Early Access
            </a>
          </div>
        </article>
      </section>

      <footer id="support" className="border-t border-slate-900/10 bg-white/70 py-10 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <div>
            <p className="font-heading text-lg font-semibold">Need help choosing a starting point?</p>
            <p className="text-sm text-slate-700">Use your own idea or start from the Idea Library. The AI CEO will run execution either way.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:fangzhangnz@gmail.com"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Contact Team
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

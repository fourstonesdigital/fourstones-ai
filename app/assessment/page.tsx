import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle, FileText, Video, Phone, Search, DollarSign, Repeat, Layers, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const whatHappens = [
  {
    icon: Search,
    title: '4 hours on-site with your team',
    desc: 'Kyle comes to your location. He shadows your key people at their actual desks, interviews staff about real friction points, maps your day-to-day workflows, and identifies every place where time or money is leaking.',
  },
  {
    icon: DollarSign,
    title: 'Expense and tooling audit',
    desc: 'A line-by-line review of your software stack and recurring tools. Kyle identifies what can be replaced by a custom AI implementation — subscriptions you can cancel, workflows you can collapse into one.',
  },
  {
    icon: Repeat,
    title: 'Repetitive task mapping',
    desc: 'Every task your team does more than once a week is a candidate for automation. Kyle maps the time cost and evaluates whether AI eliminates it, compresses it, or hands it off entirely.',
  },
  {
    icon: FileText,
    title: 'Written Four Pillars report',
    desc: 'Every opportunity scored across Revenue, Time, Experience, and Ownership. You get a prioritized roadmap — ranked by impact — plus three quick wins you can implement yourself for free.',
  },
  {
    icon: Video,
    title: 'Video overview of findings',
    desc: 'A forwardable overview of the findings. If your business partner, spouse, or CFO wasn\'t in the room, send them this. It covers the headline number and the top three opportunities.',
  },
  {
    icon: Phone,
    title: '60-minute Zoom follow-up call',
    desc: 'Kyle walks through the report with you, answers every question, and lays out the path forward. This is where the conversation about a custom build happens — if that\'s where it leads.',
  },
];

const fourPillars = [
  {
    number: '01',
    name: 'Revenue',
    desc: 'Does it make money? More leads, higher close rate, more throughput through the same team.',
  },
  {
    number: '02',
    name: 'Time',
    desc: 'Does it give hours back? Staff hours, owner hours, overtime eliminated.',
  },
  {
    number: '03',
    name: 'Experience',
    desc: 'Does it improve what your customers feel? Faster response, more consistency, fewer dropped balls.',
  },
  {
    number: '04',
    name: 'Ownership',
    desc: 'Do you own it? Custom builds mean you own the code and IP — no vendor lock-in, no subscription risk.',
  },
];

const reportSections = [
  'Executive summary — one page, one headline number',
  'Current-state workflow map — what actually happens today',
  'Opportunity register — every opportunity scored across the Four Pillars',
  'Prioritized roadmap — ranked by weighted score, effort vs. impact',
  'Three quick wins you can implement yourself, for free',
  'Projected annual impact — hours and dollars saved',
  'Build recommendations — scope only; no pressure, just options',
];

const faqs = [
  {
    q: 'What kinds of businesses is this for?',
    a: 'Service businesses in the Huntsville, Madison, and Decatur area with real operational workflows — HVAC, law, dental, insurance, real estate, accounting, contractors, and similar. If you have a team doing repetitive work, you\'re a candidate.',
  },
  {
    q: 'What if I\'m not ready to buy a custom build?',
    a: 'That\'s fine. The assessment is a standalone product. You get a report, a video, and a call. You own everything in it. You can implement the quick wins yourself, hand the roadmap to any developer you trust, or do nothing. There\'s no obligation to go further.',
  },
  {
    q: 'How far will you travel for the on-site visit?',
    a: 'The on-site component covers businesses within 30 miles of Huntsville. If you\'re outside that range, reach out — edge cases are evaluated individually.',
  },
  {
    q: 'How long does the full process take?',
    a: 'The on-site visit is scheduled first — typically within 1–2 weeks of booking. The written report and video are delivered within 5 business days of the visit. The follow-up Zoom call is scheduled at your convenience after you\'ve had time to read the report.',
  },
  {
    q: 'What do you need from me before the visit?',
    a: 'A brief intake form completed at booking — your industry, team size, revenue range, software in use, and what eats the most time. That\'s it. Kyle does the rest on-site.',
  },

];

export default function AssessmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#1488AA]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-xs font-medium mb-6">
            <MapPin size={12} /> In-Person · Huntsville · Madison · Decatur
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Find every dollar
            <br />
            AI can recover
            <br />
            <span className="text-gradient accent-serif">in your business.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl mb-10">
            Kyle spends half a day inside your operation — shadowing your team, auditing your tools,
            mapping your workflows. You get a scored report, a video walkthrough, and a 60-minute
            call to discuss what comes next. No fluff. A real deliverable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group px-8 py-4 text-base font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 shadow-lg transition-all flex items-center gap-2 justify-center"
            >
              Book the Assessment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#deliverables"
              className="px-8 py-4 text-base font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all text-center"
            >
              See What's Included
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { icon: MapPin, label: 'On-site · Huntsville, Madison & Decatur area' },
              { icon: FileText, label: 'Written report + video + Zoom call' },
              { icon: Clock, label: 'Half-day on-site · full findings delivered' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[#CBD5E1]/60 text-sm">
                <Icon size={15} className="text-[#1488AA]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement — light section */}
      <section className="section-light py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal
            className="text-2xl md:text-4xl font-semibold leading-[1.35] tracking-tight"
            dimClass="text-[#0B0F14]/20"
            brightClass="text-[#0B0F14]"
          >
            You are being sold AI from every direction and you cannot tell what is real or what is right for your business. This assessment gives you a filter — and then applies it to every corner of your operation.
          </ScrollReveal>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white bg-[#0B0F14] rounded-xl hover:bg-[#111827] transition-all"
            >
              Book the Assessment <ArrowRight size={16} />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-[#0B0F14] border border-[#0B0F14]/25 rounded-xl hover:bg-[#0B0F14] hover:text-white transition-all"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* What happens */}
      <section className="py-20 px-6 bg-[#111827]" id="deliverables">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              What you get. <span className="accent-serif text-gradient">All of it.</span>
            </h2>
            <p className="text-[#CBD5E1]/60 max-w-2xl mx-auto leading-relaxed">
              This is not a discovery call dressed up as a consulting product. It is a full
              day of work that ends with a written report, a video, and a direct conversation
              about your path forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whatHappens.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-6 rounded-xl bg-[#0B0F14] border border-white/5 hover:border-[#1488AA]/20 transition-colors">
                <div className="w-12 h-12 rounded-xl gradient-teal-blue flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#1488AA] text-xs font-semibold uppercase tracking-widest mb-4">The Framework</div>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                Every opportunity scored
                <br />
                across <span className="accent-serif text-gradient">Four Pillars.</span>
              </h2>
              <p className="text-[#CBD5E1]/60 leading-relaxed mb-6">
                The Four Pillars are the filter Kyle uses to evaluate every AI opportunity in your
                business. Each one gets scored 1–5. The weighted total determines what goes at the
                top of your roadmap.
              </p>
              <p className="text-[#CBD5E1]/60 leading-relaxed">
                It's what makes this a <em>report</em> instead of an opinion — and what makes
                the path forward clear instead of overwhelming.
              </p>
            </div>
            <div className="space-y-4">
              {fourPillars.map((pillar) => (
                <div key={pillar.number} className="flex gap-5 p-5 rounded-xl bg-[#111827] border border-white/5 hover:border-[#1488AA]/20 transition-colors">
                  <div className="text-[#1488AA]/40 font-mono text-xs font-bold pt-1 shrink-0 w-6">{pillar.number}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{pillar.name}</h3>
                    <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report breakdown */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[#1488AA] text-xs font-semibold uppercase tracking-widest mb-4">The Deliverable</div>
            <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
              A report built to be <span className="accent-serif text-gradient">acted on.</span>
            </h2>
            <p className="text-[#CBD5E1]/60 leading-relaxed mb-6">
              Not a slide deck. Not a PDF of observations. A structured document with a
              current-state workflow map, every opportunity scored and ranked, and three
              things you can do yourself — for free — before you spend another dollar.
            </p>
            <p className="text-[#CBD5E1]/60 leading-relaxed">
              The build recommendations at the end are scoped options only. No prices.
              No pressure. You decide what comes next.
            </p>
          </div>
          <div className="rounded-2xl bg-[#0B0F14] border border-[#1488AA]/20 p-7">
            <Layers size={20} className="text-[#1488AA] mb-5" />
            <h3 className="text-white font-bold text-base mb-5">Report sections</h3>
            <ul className="space-y-4">
              {reportSections.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#CBD5E1]/70 text-sm">
                  <span className="text-[#1488AA]/50 font-mono text-xs pt-0.5 shrink-0 w-5">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-[#0B0F14]" id="pricing">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              One product. <span className="accent-serif text-gradient">One price.</span>
            </h2>
            <p className="text-[#CBD5E1]/60 max-w-xl mx-auto leading-relaxed">
              Everything listed below is included. No tiers, no upsells, no stripped-down version.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="rounded-2xl bg-gradient-to-b from-[#1488AA]/15 to-[#0686D4]/5 border border-[#1488AA]/40 p-8 flex flex-col shadow-lg shadow-[#1488AA]/10">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-gradient">$4,997</span>
              </div>
              <p className="text-[#CBD5E1]/50 text-sm mb-6">One price. Same deliverables. Book directly.</p>
              <ul className="space-y-3 mb-8">
                {[
                  '4 hours on-site with your team',
                  'Software and expense audit',
                  'Repetitive task mapping',
                  'Four Pillars scored report',
                  'Video overview of findings',
                  '60-minute Zoom follow-up call',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#CBD5E1]/70">
                    <CheckCircle size={16} className="text-[#1488AA] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="text-center py-3 px-6 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all text-sm"
              >
                Book the Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-[#0B0F14] border border-white/5">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-[#CBD5E1]/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B0F14] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="relative p-12 rounded-2xl bg-gradient-to-b from-[#1488AA]/10 to-[#0686D4]/5 border border-[#1488AA]/20 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-xs font-medium mb-6">
                <MapPin size={12} /> In-Person · Huntsville · Madison · Decatur
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Find out what AI is worth
                <br />
                <span className="accent-serif text-gradient">to your specific business.</span>
              </h2>
              <p className="text-[#CBD5E1]/70 mb-8 leading-relaxed">
                Kyle comes to you, spends half a day inside your operation, and hands you
                a prioritized roadmap. You leave knowing exactly where the money is —
                and exactly what it would take to go get it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 flex items-center gap-2 justify-center"
                >
                  Book the Assessment — $4,997
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/workshop"
                  className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                >
                  Start with the Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

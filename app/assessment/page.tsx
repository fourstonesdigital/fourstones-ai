import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, CheckCircle, FileText, Video, Phone, Search, Clock, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const deliverables = [
  {
    icon: Search,
    title: '1-hour on-site visit',
    desc: 'Kyle comes to your location and sits down with you and your team. Structured conversation about your workflows, where time gets lost, what your staff does repeatedly, and where things break down. No prep required.',
  },
  {
    icon: FileText,
    title: 'Written AI Opportunity Report',
    desc: 'A focused document identifying your top AI opportunities, each scored across the Four Pillars: Revenue, Time, Experience, and Ownership. Includes three quick wins you can act on immediately — for free.',
  },
  {
    icon: Video,
    title: 'Short video overview',
    desc: 'A ~5-minute walkthrough of the findings — forwardable to a business partner, spouse, or CFO who wasn\'t in the room.',
  },
  {
    icon: Phone,
    title: '1-hour Zoom follow-up call',
    desc: 'Walk through the report together. Ask every question. Kyle explains each opportunity and lays out your options for what comes next — no pressure, no pitch.',
  },
];

const fourPillars = [
  { number: '01', name: 'Revenue', desc: 'Does it make money? More leads, higher close rate, more throughput through the same team.' },
  { number: '02', name: 'Time', desc: 'Does it give hours back? Staff hours, owner hours, overtime eliminated.' },
  { number: '03', name: 'Experience', desc: 'Does it improve what your customers feel? Faster response, more consistency, fewer dropped balls.' },
  { number: '04', name: 'Ownership', desc: 'Do you own it? Custom builds mean you own the code and IP — no vendor lock-in, no subscription risk.' },
];

const afterAssessment = [
  {
    label: 'Implement on your own',
    desc: 'The report is yours. The quick wins are actionable without any outside help. Many clients do exactly this.',
  },
  {
    label: 'AI Concierge — done with you',
    desc: 'Kyle works alongside you month-to-month, guiding you through building and deploying AI tools in your business yourself. You do the work; he makes sure you do it right.',
  },
  {
    label: 'Custom Build — done for you',
    desc: 'Kyle builds and deploys everything in your business. You own all the code and IP. Flat project fee, agreed before work begins.',
  },
];

const faqs = [
  {
    q: 'What kinds of businesses is this for?',
    a: 'Service businesses in the Huntsville, Madison, and Decatur area with real operational workflows — HVAC, law, dental, insurance, real estate, accounting, contractors, and similar. If you have a team doing repetitive work, you\'re a candidate.',
  },
  {
    q: 'Do I need to prepare anything?',
    a: 'No. Fill out a brief intake form when you book — your industry, team size, and what eats the most time. That\'s it. Kyle runs the conversation from there.',
  },
  {
    q: 'What happens after the assessment?',
    a: 'You have three options: implement the findings on your own using the report, work with Kyle monthly through the AI Concierge program as he guides you through building, or have Kyle build and deploy everything for you as a custom project. There\'s no pressure to go further — the report stands on its own.',
  },
  {
    q: 'How far will you travel for the on-site visit?',
    a: 'Within roughly 30 miles of Huntsville for the standard rate. Outside that radius, reach out — edge cases are handled individually.',
  },
  {
    q: 'How quickly do I get the report?',
    a: 'The written report and video are delivered within 5 business days of the on-site visit. The Zoom follow-up call is scheduled at your convenience after you\'ve had time to read it.',
  },
  {
    q: 'What if I\'m not ready to build anything yet?',
    a: 'That\'s fine. The assessment is a standalone product. You get a report, a video, and a call. You own everything in it. There\'s no obligation to go further.',
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
            <MapPin size={12} /> In-Person · North Alabama
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            One hour. Every AI
            <br />
            opportunity in your
            <br />
            <span className="text-gradient accent-serif">business, ranked.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl mb-10">
            Kyle visits your business, asks the right questions, and delivers a written report,
            a short video, and a 1-hour call to walk through exactly where AI can make a real
            difference — and what to do about it. $997, flat.
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
              href="#whats-included"
              className="px-8 py-4 text-base font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all text-center"
            >
              See What&apos;s Included
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { icon: MapPin, label: 'On-site · North Alabama area' },
              { icon: FileText, label: 'Written report + video + Zoom call' },
              { icon: Clock, label: '1-hour visit · findings in 5 business days' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[#CBD5E1]/60 text-sm">
                <Icon size={15} className="text-[#1488AA]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement — light */}
      <section className="section-light py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal
            className="text-2xl md:text-4xl font-semibold leading-[1.35] tracking-tight"
            dimClass="text-[#0B0F14]/20"
            brightClass="text-[#0B0F14]"
          >
            You are being sold AI from every direction and you cannot tell what is real or what is right for your business. One hour with Kyle gives you a filter — and a ranked list of exactly where it applies to yours.
          </ScrollReveal>
          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white bg-[#0B0F14] rounded-xl hover:bg-[#111827] transition-all"
            >
              Book the Assessment — $997 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6 bg-[#111827]" id="whats-included">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#1488AA] text-xs font-semibold uppercase tracking-widest mb-3">AI Opportunity Assessment — $997</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              What you get. <span className="accent-serif text-gradient">All of it.</span>
            </h2>
            <p className="text-[#CBD5E1]/60 max-w-2xl mx-auto leading-relaxed">
              One hour on-site. A focused report on your top AI opportunities. A video you can
              forward. A call to walk through everything. That&apos;s the whole thing — $997 flat.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {deliverables.map(({ icon: Icon, title, desc }) => (
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

          {/* Image — consultant meeting */}
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/images/assessment-clarity-session.png"
              alt="Business consultant and small business owner in conversation"
              width={1536}
              height={1024}
              className="w-full h-72 md:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Four Pillars */}
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
                The Four Pillars are the filter Kyle uses to evaluate every AI opportunity
                in your business. Each one gets scored 1–5. The weighted total determines
                what goes at the top of your report — so you know exactly where to start.
              </p>
              <p className="text-[#CBD5E1]/60 leading-relaxed">
                It&apos;s what makes this a <em>report</em> instead of an opinion.
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

      {/* Report + image */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/images/assessment-report-review.png"
              alt="Business owner reviewing a printed AI assessment report at their desk"
              width={1536}
              height={1024}
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="text-[#1488AA] text-xs font-semibold uppercase tracking-widest mb-4">The Deliverable</div>
            <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
              A report built to be <span className="accent-serif text-gradient">acted on.</span>
            </h2>
            <p className="text-[#CBD5E1]/60 leading-relaxed mb-6">
              Not a slide deck. Not a list of observations. A focused document with your top
              AI opportunities ranked by impact — plus three quick wins you can implement
              yourself, for free, before spending another dollar.
            </p>
            <ul className="space-y-3">
              {[
                'Top AI opportunities, scored and ranked by impact',
                'Three quick wins — free, no outside help needed',
                'Plain-English explanation of each opportunity',
                'Your options for what comes next — no pressure',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#CBD5E1]/70">
                  <CheckCircle size={15} className="text-[#1488AA] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* After the assessment — 3 paths */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#1488AA] text-xs font-semibold uppercase tracking-widest mb-3">After the Assessment</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              You choose <span className="accent-serif text-gradient">what comes next.</span>
            </h2>
            <p className="text-[#CBD5E1]/60 max-w-xl mx-auto leading-relaxed">
              The assessment stands on its own. But if you want to go further, there are
              three ways to work together — and no pressure to choose one until you&apos;re ready.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {afterAssessment.map(({ label, desc }, i) => (
              <div key={label} className="p-6 rounded-xl bg-[#111827] border border-white/5 hover:border-[#1488AA]/20 transition-colors">
                <div className="w-8 h-8 rounded-lg gradient-teal-blue flex items-center justify-center mb-4 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{label}</h3>
                <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#1488AA] hover:text-[#0686D4] text-sm font-medium transition-colors"
            >
              Learn more about each option <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              Simple <span className="accent-serif text-gradient">pricing.</span>
            </h2>
            <p className="text-[#CBD5E1]/60 leading-relaxed">
              Everything listed is included. One flat fee, agreed before anything starts.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-b from-[#1488AA]/15 to-[#0686D4]/5 border border-[#1488AA]/40 p-8 flex flex-col shadow-lg shadow-[#1488AA]/10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-gradient">$997</span>
            </div>
            <p className="text-[#CBD5E1]/50 text-sm mb-8">Flat fee. No tiers, no add-ons.</p>
            <ul className="space-y-3 mb-8">
              {[
                '1-hour on-site visit',
                'Written AI Opportunity Report',
                '~5-minute video overview',
                '1-hour Zoom follow-up call',
                'Three quick wins included',
                'Ranked opportunities across Four Pillars',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#CBD5E1]/70">
                  <CheckCircle size={15} className="text-[#1488AA] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="text-center py-3.5 px-6 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all"
            >
              Book the Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-[#111827] border border-white/5">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-[#CBD5E1]/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111827] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="relative p-12 rounded-2xl bg-gradient-to-b from-[#1488AA]/10 to-[#0686D4]/5 border border-[#1488AA]/20 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-xs font-medium mb-6">
                <MapPin size={12} /> In-Person · North Alabama
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                One hour. Every opportunity,
                <br />
                <span className="accent-serif text-gradient">ranked and on paper.</span>
              </h2>
              <p className="text-[#CBD5E1]/70 mb-8 leading-relaxed">
                Kyle comes to you, asks the right questions, and hands you a clear picture
                of where AI can make a real difference in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 flex items-center gap-2 justify-center"
                >
                  Book the Assessment — $997
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/workshop"
                  className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                >
                  Start with the Workshop — $97
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

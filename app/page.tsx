import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Star } from 'lucide-react';

const services = [
  {
    name: 'AI Workshop',
    price: '$497',
    per: 'per person',
    description:
      'A hands-on half-day session where you leave with a working AI tool built for your specific business. Not a demo. Not a slide deck. An actual tool.',
    features: [
      'Small group format (10 seats max)',
      'You build something real during the session',
      'Works for HVAC, law, dental, real estate, and more',
      'Held at our Madison, AL office',
    ],
    cta: 'Reserve Your Seat',
    href: '/workshop',
    highlight: false,
  },
  {
    name: 'Corporate AI Audit',
    price: '$15K–$25K',
    per: 'flat project',
    description:
      'We map your entire business process, find every place AI can save you time or money, and deliver a prioritized implementation roadmap. Then we build it.',
    features: [
      'Full business process review',
      'AI opportunity assessment',
      'Prioritized implementation plan',
      'Includes executive presentation',
    ],
    cta: 'Let\'s Talk',
    href: '/contact',
    highlight: true,
  },
  {
    name: 'Custom AI Build',
    price: '$25K–$50K+',
    per: 'per project',
    description:
      'Done-for-you custom AI tools and automations built into your existing workflows. We engineer it, deploy it, train your team, and hand you the keys.',
    features: [
      'Full custom AI system development',
      'Integration with your existing software',
      'Staff training and documentation',
      'Ongoing support available',
    ],
    cta: 'Start the Conversation',
    href: '/contact',
    highlight: false,
  },
];

const stats = [
  { value: 'EE PhD', label: 'Engineering credentials' },
  { value: '10+', label: 'AI systems built and deployed' },
  { value: '$0', label: 'Fluff. Pure implementation.' },
  { value: 'Local', label: 'North Alabama-based' },
];

const industries = [
  'HVAC & Home Services',
  'Law Firms',
  'Dental Offices',
  'Insurance Agencies',
  'Real Estate',
  'Medical Practices',
  'Accounting Firms',
  'Retail & E-commerce',
];

const faqs = [
  {
    q: "Do I need to understand AI to work with you?",
    a: "No. That's literally the point. You understand your business. We handle the AI. You just need to show up with a real problem you want to solve.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT is a general tool. We build AI systems that are specific to your business — trained on your data, integrated into your workflow, and doing your actual work.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Service-based SMBs primarily — HVAC, law, dental, insurance, real estate, and similar. If you have repetitive processes and a team, AI can almost certainly help.",
  },
  {
    q: "Where are you located?",
    a: "Our office is in Madison, AL (7771 Hwy 72 W, Suite C). We serve the Huntsville/Madison metro and work with businesses nationally for custom builds.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-24">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1488AA]/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#0686D4]/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-sm font-medium mb-8">
            <Zap size={14} />
            AI Consulting for Small Business — Huntsville, AL
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Stop talking about AI.
            <br />
            <span className="text-gradient">Start using it.</span>
          </h1>

          <p className="text-xl text-[#CBD5E1]/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Four Stones AI builds custom AI tools for small businesses that actually work — not
            demos, not PowerPoints. Real automation for real businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/workshop"
              className="group px-8 py-4 text-base font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 shadow-lg hover:shadow-[#1488AA]/30 transition-all flex items-center gap-2"
            >
              Join the Next Workshop — $497
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-base font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 hover:border-[#1488AA]/40 transition-all"
            >
              See All Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-[#CBD5E1]/50 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Positioning */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Every business owner has heard{' '}
                <span className="text-gradient">&ldquo;you need to use AI.&rdquo;</span>
              </h2>
              <p className="text-[#CBD5E1]/70 leading-relaxed mb-6">
                Most of them have tried it. They played with ChatGPT for a week, got confused, and
                went back to the way things were. Because general AI tools aren't built for your business.
              </p>
              <p className="text-[#CBD5E1]/70 leading-relaxed mb-8">
                Four Stones AI is different. We don't sell software. We don't run webinars about
                the &ldquo;AI revolution.&rdquo; We sit down with you, understand your actual workflows,
                and build something that replaces hours of manual work every week.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1488AA] hover:text-[#0686D4] font-medium transition-colors"
              >
                Meet Kyle <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { icon: Zap, title: 'Built for your business', desc: 'Not a generic tool. Custom AI that knows your workflow, your clients, your data.' },
                { icon: Users, title: 'Hands-on, not theoretical', desc: 'You walk away from every engagement with something that actually runs. Not a roadmap.' },
                { icon: TrendingUp, title: 'ROI you can measure', desc: "We focus on time saved and revenue recovered — not AI for the sake of AI." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-[#0B0F14] border border-white/5 hover:border-[#1488AA]/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-teal-blue flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-[#0B0F14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Three ways to work together
            </h2>
            <p className="text-[#CBD5E1]/60 max-w-xl mx-auto">
              Start with the workshop and see what&apos;s possible. Or jump straight to a custom build if you already know what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className={`relative rounded-2xl p-8 border flex flex-col ${
                  s.highlight
                    ? 'bg-gradient-to-b from-[#1488AA]/15 to-[#0686D4]/5 border-[#1488AA]/40 shadow-lg shadow-[#1488AA]/10'
                    : 'bg-[#111827] border-white/5 hover:border-[#1488AA]/20 transition-colors'
                }`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-teal-blue text-white text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-2">{s.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-gradient">{s.price}</span>
                    <span className="text-[#CBD5E1]/50 text-sm">{s.per}</span>
                  </div>
                  <p className="text-[#CBD5E1]/70 text-sm leading-relaxed">{s.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#CBD5E1]/70">
                      <CheckCircle size={16} className="text-[#1488AA] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className={`text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all ${
                    s.highlight
                      ? 'gradient-teal-blue text-white hover:opacity-90'
                      : 'border border-[#1488AA]/40 text-[#1488AA] hover:bg-[#1488AA]/10'
                  }`}
                >
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for service businesses
          </h2>
          <p className="text-[#CBD5E1]/60 mb-12 max-w-xl mx-auto">
            If you have a team, repeatable processes, and customers — AI can make you faster,
            cheaper, and better than your competition.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 rounded-full bg-[#0B0F14] border border-white/8 text-[#CBD5E1]/70 text-sm hover:border-[#1488AA]/30 hover:text-white transition-all"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#0B0F14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Common questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-[#111827] border border-white/5">
                <h3 className="text-white font-semibold mb-3 flex items-start gap-3">
                  <Star size={16} className="text-[#1488AA] shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-[#CBD5E1]/70 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 rounded-2xl bg-gradient-to-b from-[#1488AA]/10 to-[#0686D4]/5 border border-[#1488AA]/20 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to see what AI can actually do for your business?
              </h2>
              <p className="text-[#CBD5E1]/70 mb-8">
                Start with a $497 workshop. Walk out with a working tool and a clear picture of
                what&apos;s possible. No commitment beyond that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/workshop"
                  className="group px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 flex items-center gap-2 justify-center"
                >
                  Join the Workshop
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                >
                  Contact Kyle Directly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

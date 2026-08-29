import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Cpu, BarChart3, Shield } from 'lucide-react';

const process = [
  {
    step: '01',
    title: 'Discovery call',
    desc: 'We spend 30–60 minutes understanding your business, your biggest pain points, and where AI can make the most impact. Free, no commitment.',
  },
  {
    step: '02',
    title: 'Assessment & plan',
    desc: 'Kyle maps your workflows and identifies the highest-ROI AI opportunities. For custom builds, this becomes the project spec.',
  },
  {
    step: '03',
    title: 'Build & deploy',
    desc: 'We build the tool, test it against real scenarios from your business, and deploy it into your workflow.',
  },
  {
    step: '04',
    title: 'Handoff & training',
    desc: 'You and your team get trained on the tool. Documentation included. You own everything we build.',
  },
];

const tiers = [
  {
    name: 'AI Workshop',
    price: '$497',
    unit: 'per person',
    duration: 'Half day',
    description:
      'The fastest way to understand what AI can do for your business — by building something in one session.',
    tagline: 'See what\'s possible',
    href: '/workshop',
    ctaText: 'Reserve Your Seat',
    primary: false,
    features: [
      { label: 'Group format (10 max)', icon: Users },
      { label: 'Build a real tool in 4 hours', icon: Cpu },
      { label: 'Hands-on, guided by Kyle', icon: Shield },
      { label: 'Take the tool home and use it', icon: CheckCircle },
      { label: 'Monthly sessions in Madison, AL', icon: Clock },
    ],
    useCases: [
      'Business owners who want to learn before committing',
      'Teams exploring AI for the first time',
      'Anyone skeptical of AI who needs to see it firsthand',
    ],
  },
  {
    name: 'Corporate AI Audit',
    price: '$15K–$25K',
    unit: 'flat fee',
    duration: '2–4 weeks',
    description:
      'A full assessment of your business processes, identifying every place AI can reduce cost or increase output — with a prioritized implementation roadmap.',
    tagline: 'Find the money',
    href: '/contact',
    ctaText: 'Schedule a Call',
    primary: true,
    features: [
      { label: 'Full business process review', icon: BarChart3 },
      { label: 'AI opportunity map', icon: Cpu },
      { label: 'Prioritized implementation plan', icon: CheckCircle },
      { label: 'Executive presentation', icon: Users },
      { label: 'ROI estimates per opportunity', icon: BarChart3 },
    ],
    useCases: [
      'Companies with 10–100 employees ready to modernize',
      'Leadership teams that need data before committing to builds',
      'Businesses spending too much on manual tasks and SaaS',
    ],
  },
  {
    name: 'Custom AI Build',
    price: '$25K–$50K+',
    unit: 'per project',
    duration: '4–12 weeks',
    description:
      'Done-for-you custom AI systems built into your existing workflows. We engineer, deploy, train, and hand you the keys.',
    tagline: 'Deploy the system',
    href: '/contact',
    ctaText: 'Start the Conversation',
    primary: false,
    features: [
      { label: 'Full custom AI development', icon: Cpu },
      { label: 'Integration with existing software', icon: Shield },
      { label: 'Staff training + documentation', icon: Users },
      { label: 'You own all code and IP', icon: CheckCircle },
      { label: 'Optional ongoing support', icon: Clock },
    ],
    useCases: [
      'Businesses ready to go all-in on AI-first operations',
      'Companies with specific workflows ripe for automation',
      'Owners who want the tool built without doing it themselves',
    ],
  },
];

const guarantee = [
  'You will never be sold something that doesn\'t fit your business.',
  'Every deliverable is specific to your workflows — nothing off-the-shelf.',
  'You own everything. No lock-in, no subscriptions, no hostage IP.',
  'If Kyle can\'t help you, he\'ll tell you. He doesn\'t take every project.',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0686D4]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-sm font-medium mb-8">
            Services & Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Three ways to go{' '}
            <span className="text-gradient">AI-first.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl mx-auto">
            Whether you want to dip your toe in or overhaul how your business operates,
            there&apos;s an engagement designed for where you are right now.
          </p>
        </div>
      </section>

      {/* Service tiers */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-6xl mx-auto space-y-8">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 md:p-10 border ${
                tier.primary
                  ? 'bg-gradient-to-br from-[#1488AA]/10 to-[#0686D4]/5 border-[#1488AA]/30'
                  : 'bg-[#111827] border-white/5'
              }`}
            >
              {tier.primary && (
                <div className="inline-flex px-3 py-1 rounded-full gradient-teal-blue text-white text-xs font-semibold mb-6">
                  Most Popular
                </div>
              )}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left: Info */}
                <div className="md:col-span-1">
                  <div className="text-xs text-[#1488AA] uppercase tracking-widest font-semibold mb-2">
                    {tier.tagline}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{tier.name}</h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-gradient">{tier.price}</span>
                    <span className="text-[#CBD5E1]/50 text-sm">{tier.unit}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#CBD5E1]/50 text-sm mb-6">
                    <Clock size={14} className="text-[#1488AA]" />
                    {tier.duration}
                  </div>
                  <p className="text-[#CBD5E1]/70 text-sm leading-relaxed mb-6">
                    {tier.description}
                  </p>
                  <Link
                    href={tier.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                      tier.primary
                        ? 'gradient-teal-blue text-white hover:opacity-90'
                        : 'border border-[#1488AA]/40 text-[#1488AA] hover:bg-[#1488AA]/10'
                    }`}
                  >
                    {tier.ctaText} <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Middle: Features */}
                <div>
                  <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-3">
                    {tier.features.map(({ label, icon: Icon }) => (
                      <li key={label} className="flex items-center gap-3 text-sm text-[#CBD5E1]/70">
                        <Icon size={15} className="text-[#1488AA] shrink-0" />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Use cases */}
                <div>
                  <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                    Right for you if...
                  </h3>
                  <ul className="space-y-3">
                    {tier.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3 text-sm text-[#CBD5E1]/70">
                        <span className="w-4 h-4 rounded-full gradient-teal-blue flex items-center justify-center shrink-0 mt-0.5 text-white text-[10px]">✓</span>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How it works</h2>
            <p className="text-[#CBD5E1]/60">
              Every engagement (except the public workshop) follows this pattern.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {process.map((step) => (
              <div key={step.step} className="p-6 rounded-xl bg-[#0B0F14] border border-white/5 hover:border-[#1488AA]/20 transition-colors">
                <div className="text-4xl font-bold text-gradient mb-4">{step.step}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-[#111827] border border-[#1488AA]/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">The Four Stones promise</h2>
            <p className="text-[#CBD5E1]/60 mb-8">
              No fine print. Just the way Kyle works.
            </p>
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              {guarantee.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#CBD5E1]/70 text-sm">
                  <span className="w-5 h-5 rounded-full gradient-teal-blue flex items-center justify-center shrink-0 mt-0.5 text-white text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111827] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
          <p className="text-[#CBD5E1]/60 mb-8">
            Start with the workshop. It&apos;s the lowest-risk way to see exactly what AI can do
            for your business before spending more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshop" className="px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all">
              Join the $497 Workshop
            </Link>
            <Link href="/contact" className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all">
              Talk to Kyle First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

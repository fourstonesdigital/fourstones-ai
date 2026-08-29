import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Cpu, BarChart3, Shield, MapPin } from 'lucide-react';
import Image from 'next/image';

const process = [
  {
    step: '01',
    title: 'You reach out',
    desc: 'Fill out the contact form or come to the workshop. Either way, Kyle reviews it personally and gets back to you within one business day.',
  },
  {
    step: '02',
    title: 'In-person meeting',
    desc: 'Kyle meets with you — at your location or at the Madison office. He learns your business, your team, and your biggest pain points firsthand.',
  },
  {
    step: '03',
    title: 'Build & deploy',
    desc: 'Once the scope is clear, Kyle builds the tool, tests it with real scenarios from your business, and deploys it into your workflow.',
  },
  {
    step: '04',
    title: 'Handoff & training',
    desc: 'Your team gets trained on-site. Documentation included. You own everything — no lock-in, no subscriptions, no hostage IP.',
  },
];

const tiers = [
  {
    name: 'AI Workshop',
    price: '$497',
    unit: 'per person',
    showPrice: true,
    duration: 'Half day — 9 AM to 1 PM',
    description:
      'The fastest way to understand what AI can do for your business — by actually building something during a single in-person session.',
    tagline: 'Start here',
    href: '/workshop',
    ctaText: 'Reserve Your Seat',
    primary: false,
    features: [
      { label: 'In-person, Madison AL office', icon: MapPin },
      { label: 'Small group (10 max)', icon: Users },
      { label: 'Build a real AI tool in 4 hours', icon: Cpu },
      { label: 'Take the tool home and use it', icon: CheckCircle },
      { label: 'Kyle leads every session', icon: Shield },
    ],
    useCases: [
      'Business owners who want to see AI work before committing',
      'Teams exploring AI for the first time',
      'Anyone skeptical who needs to see it in action',
    ],
  },
  {
    name: 'AI Consulting & Process Review',
    price: 'Custom quote',
    unit: 'based on scope',
    showPrice: false,
    duration: 'Typically 2–4 weeks',
    description:
      'Kyle comes on-site, maps your workflows, identifies every place AI can reduce cost or increase output, and delivers a prioritized plan. Priced based on the size and complexity of your operation.',
    tagline: 'Find the opportunity',
    href: '/contact',
    ctaText: 'Request a Quote',
    primary: true,
    features: [
      { label: 'On-site business process review', icon: BarChart3 },
      { label: 'AI opportunity mapping', icon: Cpu },
      { label: 'Prioritized implementation plan', icon: CheckCircle },
      { label: 'ROI estimates per opportunity', icon: BarChart3 },
      { label: 'Executive-ready presentation', icon: Users },
    ],
    useCases: [
      'Companies with 5–100 employees ready to modernize',
      'Owners who need a clear picture before building',
      'Businesses spending too much time on manual processes',
    ],
  },
  {
    name: 'Custom AI Build',
    price: 'Custom quote',
    unit: 'based on scope',
    showPrice: false,
    duration: 'Typically 4–12 weeks',
    description:
      'Done-for-you custom AI systems built into your existing workflows. Priced based on complexity and scope — discussed during an in-person meeting.',
    tagline: 'Build the system',
    href: '/contact',
    ctaText: 'Start the Conversation',
    primary: false,
    features: [
      { label: 'Full custom AI development', icon: Cpu },
      { label: 'Integration with your existing software', icon: Shield },
      { label: 'On-site staff training + docs', icon: Users },
      { label: 'You own all code and IP', icon: CheckCircle },
      { label: 'Optional ongoing support', icon: Clock },
    ],
    useCases: [
      'Businesses ready to go all-in on AI operations',
      'Companies with specific workflows to automate',
      'Owners who want it built without doing it themselves',
    ],
  },
];

const guarantee = [
  'You will never be sold something that doesn\'t fit your business.',
  'Every project starts with an in-person conversation — not a sales deck.',
  'You own everything. No lock-in, no subscriptions, no hostage IP.',
  'Pricing is discussed openly. No surprises.',
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
            <MapPin size={14} /> North Alabama — In Person Only
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Three ways to work together —
            <br />
            <span className="text-gradient">all in person, in North Alabama.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl mx-auto">
            Kyle works exclusively with businesses within about 30 miles of Huntsville.
            Every engagement starts with a face-to-face conversation — at your location or his.
          </p>
        </div>
      </section>

      {/* Automation image */}
      <section className="px-6 pb-0 bg-[#0B0F14]">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/images/automation.png"
              alt="AI automation visualization"
              width={1280}
              height={720}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service tiers */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-6xl mx-auto space-y-8">
          {tiers.map((tier) => (
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

                  {tier.showPrice ? (
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-gradient">{tier.price}</span>
                      <span className="text-[#CBD5E1]/50 text-sm">{tier.unit}</span>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-[#CBD5E1]/70">Quoted based on your needs</span>
                      <p className="text-[#CBD5E1]/40 text-xs mt-1">Discussed during your in-person meeting with Kyle</p>
                    </div>
                  )}

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
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">How it works</h2>
              <p className="text-[#CBD5E1]/60 mb-8">
                Every engagement starts local and in person. No cold contracts, no remote-only work.
              </p>
              <div className="space-y-6">
                {process.map((step) => (
                  <div key={step.step} className="flex gap-5">
                    <div className="text-2xl font-bold text-gradient shrink-0 w-8">{step.step}</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                      <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <Image
                src="/images/meeting.png"
                alt="In-person AI consulting meeting"
                width={720}
                height={480}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-[#111827] border border-[#1488AA]/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">The Four Stones promise</h2>
            <p className="text-[#CBD5E1]/60 mb-8">No fine print. Just how Kyle works.</p>
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
            Start with the $497 workshop in Madison, AL — the lowest-commitment way to see
            what AI can do for your North Alabama business before spending more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshop" className="px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all">
              Join the Workshop — $497
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

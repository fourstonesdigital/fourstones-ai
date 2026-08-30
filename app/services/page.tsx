import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Cpu, BarChart3, Shield, MapPin, Video } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

const process = [
  {
    step: '01',
    title: 'Reach out',
    desc: 'Fill out the contact form or sign up for the workshop. Kyle responds within one business day.',
  },
  {
    step: '02',
    title: 'Initial conversation — your way',
    desc: 'Kyle is happy to meet in person at your location or his Madison office, or jump on a Zoom call — whatever is most convenient for you. The goal is to understand your business and figure out where AI can make the biggest difference.',
  },
  {
    step: '03',
    title: 'Agree on scope and price',
    desc: 'Everything is a flat, one-time engagement. Kyle proposes a clear scope, you agree on the price, and work begins. No ongoing fees, no retainers, no surprises.',
  },
  {
    step: '04',
    title: 'Build, deploy, hand off',
    desc: 'Kyle builds the tool, deploys it into your workflow, trains your team on-site, and hands you the keys. You own everything.',
  },
];

const tiers = [
  {
    name: 'AI Implementation Workshop',
    price: '$497',
    unit: 'per person',
    showPrice: true,
    duration: '4-hour in-person session',
    description:
      'A hands-on workshop for business owners, managers, and motivated employees who want to understand AI, learn to use it, and leave with a working tool built for their specific business.',
    tagline: 'Start here',
    href: '/workshop',
    ctaText: 'Reserve Your Seat — $497',
    features: [
      { label: 'In-person, Madison AL office', icon: MapPin },
      { label: 'Small group (10 max)', icon: Users },
      { label: 'AI education + live demos', icon: Cpu },
      { label: 'Hands-on tool building', icon: CheckCircle },
      { label: 'See Eventbrite for dates', icon: Clock },
    ],
    useCases: [
      'You own or manage a business and want a clear picture of what AI can do for you',
      'You\'ve heard about AI but haven\'t found a practical starting point',
      'You want to become the AI expert in your organization and bring real tools back to your team',
    ],
  },
  {
    name: 'AI Consulting & Process Review',
    price: 'Quoted based on your needs',
    unit: '',
    showPrice: false,
    duration: 'Typically 2–4 weeks',
    description:
      'Kyle meets with you in person or on Zoom, maps your business workflows, identifies where AI can reduce cost or increase output, and delivers a prioritized plan. Scope and pricing agreed upfront.',
    tagline: 'Find the opportunity',
    href: '/contact',
    ctaText: 'Request a Quote',
    features: [
      { label: 'In-person or Zoom — your preference', icon: Video },
      { label: 'Full business process review', icon: BarChart3 },
      { label: 'AI opportunity mapping', icon: Cpu },
      { label: 'Prioritized implementation plan', icon: CheckCircle },
      { label: 'Flat one-time fee, agreed upfront', icon: Shield },
    ],
    useCases: [
      'You run a business with 5+ employees and want to know exactly where AI can help',
      'You need a clear, prioritized plan before committing to a build',
      'You\'re spending too much time on manual processes and want expert eyes on the operation',
    ],
  },
  {
    name: 'Custom AI Build',
    price: 'Quoted based on your needs',
    unit: '',
    showPrice: false,
    duration: 'Typically 4–12 weeks',
    description:
      'Done-for-you custom AI systems built into your existing workflows. Kyle engineers it, deploys it, trains your team, and hands you the keys. Flat one-time fee agreed on scope before work begins.',
    tagline: 'Build the system',
    href: '/contact',
    ctaText: 'Start the Conversation',
    features: [
      { label: 'In-person or Zoom kickoff', icon: Video },
      { label: 'Full custom AI development', icon: Cpu },
      { label: 'Integration with your existing software', icon: Shield },
      { label: 'On-site staff training + documentation', icon: Users },
      { label: 'You own all code and IP', icon: CheckCircle },
    ],
    useCases: [
      'You know what you want to automate and are ready to have it built',
      'You have specific workflows that eat time and money every week',
      'You want a finished system — not a roadmap — delivered and handed off',
    ],
  },
];

const promise = [
  'Every engagement starts with a conversation — in person or on Zoom, whatever works for you.',
  'Scope and price are agreed before any work begins. No surprises.',
  'All projects are flat, one-time fees. Kyle doesn\'t charge ongoing retainers for his services.',
  'You own everything built. No lock-in, no dependency on Four Stones AI to keep it running.',
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
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Three ways to work together —
            <br />
            <span className="text-gradient accent-serif">all in North Alabama.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl mx-auto">
            Kyle works with businesses in Huntsville, Madison, and the surrounding areas.
            Every engagement starts with a conversation — in person or on Zoom, whatever
            works best for you.
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
              className="rounded-2xl p-8 md:p-10 border bg-[#111827] border-white/5 hover:border-[#1488AA]/20 transition-colors"
            >
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
                      <span className="text-base font-medium text-[#CBD5E1]/60">Quoted based on your needs</span>
                      <p className="text-[#CBD5E1]/40 text-xs mt-1">Flat one-time fee — scope and price agreed before work begins</p>
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all border border-[#1488AA]/40 text-[#1488AA] hover:bg-[#1488AA]/10"
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

      {/* Statement — light section */}
      <section className="section-light py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal
            className="text-2xl md:text-4xl font-semibold leading-[1.35] tracking-tight"
            dimClass="text-[#0B0F14]/20"
            brightClass="text-[#0B0F14]"
          >
            Every engagement is a flat, one-time fee agreed before any work begins. No retainers, no lock-in, no dependency on Four Stones AI to keep things running. You own the code, the tools, and the outcome.
          </ScrollReveal>

          <div className="mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-[#0B0F14] border border-[#0B0F14]/25 rounded-xl hover:bg-[#0B0F14] hover:text-white transition-all"
            >
              Start the Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                How it <span className="accent-serif text-gradient">works</span>
              </h2>
              <p className="text-[#CBD5E1]/60 mb-8">
                Simple, flat engagements. Scope agreed upfront. Work delivered. Keys handed over.
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
            <h2 className="text-2xl font-bold text-white mb-4">
              The Four Stones AI <span className="accent-serif text-gradient">Promise</span>
            </h2>
            <p className="text-[#CBD5E1]/60 mb-8">No fine print. Just how Kyle works.</p>
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              {promise.map((item) => (
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
            Start with the AI Implementation Workshop — the lowest-commitment way to see
            what AI can do for your business before spending more.
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

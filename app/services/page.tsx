import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Cpu, BarChart3, Shield, MapPin, Video, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

const process = [
  {
    step: '01',
    title: 'Start with the workshop or reach out directly',
    desc: 'The $97 workshop is the lowest-friction starting point. Or if you already know you need an assessment or a build, fill out the contact form and Kyle responds within one business day.',
  },
  {
    step: '02',
    title: 'Book the AI Opportunity Assessment',
    desc: 'Kyle visits your business for one hour, asks the right questions, and delivers a written report identifying your top AI opportunities — ranked and scored. This is where the real picture of your business emerges.',
  },
  {
    step: '03',
    title: 'Choose your path forward',
    desc: 'After the assessment you have three options: implement the findings yourself, work with Kyle monthly through the AI Concierge program, or have Kyle build and deploy everything for you as a custom project.',
  },
  {
    step: '04',
    title: 'Build, deploy, hand off',
    desc: 'If you choose the custom build: Kyle engineers it, deploys it into your workflow, trains your team on-site, and hands you the keys. Flat project fee. You own everything.',
  },
];

const tiers = [
  {
    name: 'AI Implementation Workshop',
    price: '$97',
    unit: 'per person',
    showPrice: true,
    duration: '4-hour in-person session',
    description:
      'A hands-on workshop for business owners, managers, and motivated employees who want to understand AI, learn to use it, and leave with a working tool built for their specific business.',
    tagline: 'Start here',
    href: '/workshop',
    ctaText: 'Reserve Your Seat',
    highlight: false,
    image: '/images/workshop-hands-on.png',
    imageAlt: 'Kyle Montgomery speaking at an AI workshop',
    features: [
      { label: 'In-person, Madison AL office', icon: MapPin },
      { label: 'Small group (10 seats max)', icon: Users },
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
    name: 'AI Opportunity Assessment',
    price: '$997',
    unit: 'flat fee',
    showPrice: true,
    duration: '1-hour on-site + report + call',
    description:
      'Kyle visits your business, spends one hour asking the right questions, and delivers a written report identifying your top AI opportunities — scored and ranked across the Four Pillars. Includes a short video overview and a 1-hour Zoom follow-up call.',
    tagline: 'Find the opportunity',
    href: '/assessment',
    ctaText: 'Book the Assessment',
    highlight: false,
    image: '/images/card-assessment.png',
    imageAlt: 'Business consultant reviewing a report with a small business owner',
    features: [
      { label: '1-hour on-site owner conversation', icon: MapPin },
      { label: 'Written AI Opportunity Report', icon: BarChart3 },
      { label: 'Opportunities scored across Four Pillars', icon: Cpu },
      { label: '~5-minute video overview', icon: Video },
      { label: '1-hour Zoom follow-up call', icon: CheckCircle },
    ],
    useCases: [
      'You want a clear, ranked list of where AI can make a real difference in your business',
      'You\'re not sure where to start and want expert eyes on your operation',
      'You want a real deliverable — not a discovery call — before committing to anything bigger',
    ],
  },
  {
    name: 'AI Concierge',
    price: 'Monthly retainer',
    unit: '',
    showPrice: false,
    duration: 'Ongoing · month-to-month',
    description:
      'Done-with-you AI implementation. Kyle works alongside you every month — guiding you through building and deploying AI tools in your own business. You build the capability; he makes sure you\'re doing it right.',
    tagline: 'Done with you',
    href: '/contact',
    ctaText: 'Ask About Concierge',
    highlight: false,
    image: '/images/card-concierge.png',
    imageAlt: 'Small business owner working with a coach on a video call',
    features: [
      { label: 'Monthly calls + async support', icon: RefreshCw },
      { label: 'Guided AI tool building', icon: Cpu },
      { label: 'You build; Kyle coaches', icon: Users },
      { label: 'Month-to-month, no lock-in', icon: Shield },
      { label: 'Pricing based on scope and cadence', icon: CheckCircle },
    ],
    useCases: [
      'You want to build AI capability in-house, not outsource it',
      'You learn by doing and want expert guidance to keep you on track',
      'You have time to implement but need someone who knows what right looks like',
    ],
  },
  {
    name: 'Custom AI Build',
    price: 'Project fee',
    unit: '',
    showPrice: false,
    duration: 'Typically 4–12 weeks',
    description:
      'Done-for-you. Kyle builds and deploys custom AI systems into your existing workflows, trains your team on-site, and hands you the keys. Flat project fee agreed before work begins. You own all code and IP.',
    tagline: 'Done for you',
    href: '/contact',
    ctaText: 'Start the Conversation',
    highlight: false,
    image: '/images/card-custom-build.png',
    imageAlt: 'Technical consultant building software at multiple monitors',
    features: [
      { label: 'Full custom AI development', icon: Cpu },
      { label: 'Integration with your existing software', icon: Shield },
      { label: 'On-site staff training + documentation', icon: Users },
      { label: 'Flat project fee, agreed upfront', icon: CheckCircle },
      { label: 'You own all code and IP', icon: Shield },
    ],
    useCases: [
      'You know what you want and are ready to have it built',
      'You want a finished system — not a roadmap — delivered and handed off',
      'You don\'t want to build it yourself; you want it done right and running',
    ],
  },
];

const promise = [
  'Every engagement starts with a conversation — in person or on Zoom, whatever works for you.',
  'Scope and price are agreed before any work begins. No surprises.',
  'Custom builds are flat project fees. Concierge is month-to-month with no long-term lock-in.',
  'You own everything built. No dependency on Four Stones AI to keep it running.',
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
            Four ways to work together —
            <br />
            <span className="text-gradient accent-serif">all in North Alabama.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl mx-auto">
            Start with the workshop. Get the assessment. Then choose your path — done with you,
            or done for you. Every engagement starts with a conversation.
          </p>
        </div>
      </section>



      {/* Service tiers */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-6xl mx-auto space-y-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group rounded-2xl border overflow-hidden transition-colors ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#1488AA]/12 to-[#0686D4]/5 border-[#1488AA]/40 shadow-lg shadow-[#1488AA]/10'
                  : 'bg-[#111827] border-white/5 hover:border-[#1488AA]/25'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch">

                {/* Image — left panel, full card height */}
                {tier.image && (
                  <div className="relative md:col-span-5 lg:col-span-4 aspect-[16/9] md:aspect-auto md:min-h-[460px] overflow-hidden">
                    <Image
                      src={tier.image}
                      alt={tier.imageAlt!}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={tier.tagline === 'Start here'}
                      loading={tier.tagline === 'Start here' ? undefined : 'lazy'}
                    />
                    {/* Mobile: bottom fade. Desktop: right-edge dissolve into card bg */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/75 via-transparent to-transparent md:[background:linear-gradient(to_right,transparent_65%,#111827_100%)]" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                  </div>
                )}

                {/* Content — right panel */}
                <div className={`p-6 sm:p-8 md:p-10 flex flex-col ${
                  tier.image ? 'md:col-span-7 lg:col-span-8' : 'md:col-span-12'
                }`}>
                  {/* Top: 2-col grid — identity+CTA left, features right */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 flex-1">

                    {/* A: Identity + CTA */}
                    <div className="flex flex-col">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#1488AA] font-semibold">{tier.tagline}</p>
                      <h2 className="mt-2 text-2xl font-bold text-white">{tier.name}</h2>
                      <div className="mt-3 flex items-baseline gap-3">
                        {tier.showPrice ? (
                          <>
                            <span className="text-3xl font-bold text-gradient">{tier.price}</span>
                            <span className="text-sm text-[#CBD5E1]/50">{tier.unit}</span>
                          </>
                        ) : (
                          <span className="text-base font-medium text-[#CBD5E1]/60">{tier.price || 'Scope & pricing discussed upfront'}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[#CBD5E1]/50 text-sm mt-2">
                        <Clock size={13} className="text-[#1488AA]" />
                        {tier.duration}
                      </div>
                      <p className="mt-4 text-[15px] leading-relaxed text-[#CBD5E1]/70">{tier.description}</p>
                      <div className="mt-6 lg:mt-auto lg:pt-6">
                        <Link
                          href={tier.href}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                            tier.highlight
                              ? 'gradient-teal-blue text-white hover:opacity-90'
                              : 'border border-[#1488AA]/40 text-[#1488AA] hover:bg-[#1488AA]/10'
                          }`}
                        >
                          {tier.ctaText} <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    {/* B: What's included */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#CBD5E1]/40 font-semibold">What&apos;s included</p>
                      <ul className="mt-4 space-y-3">
                        {tier.features.map(({ label, icon: Icon }) => (
                          <li key={label} className="flex items-center gap-3 text-sm text-[#CBD5E1]/70">
                            <Icon size={15} className="text-[#1488AA] shrink-0" />
                            {label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* C: Use-case pills — full-width footer */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#CBD5E1]/40 font-semibold mb-3">Right for you if&hellip;</p>
                    <ul className="flex flex-wrap gap-2">
                      {tier.useCases.map((uc) => (
                        <li key={uc} className="rounded-full border border-[#1488AA]/25 bg-[#1488AA]/10 px-3.5 py-1.5 text-sm text-[#CBD5E1]/75">
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Every engagement is scoped and priced before any work begins. No surprises, no lock-in. Custom builds hand you the keys. Concierge keeps you in the driver seat. Either way, you own the outcome.
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
                Workshop → Assessment → Choose your path. Simple, flat engagements. Scope agreed upfront.
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
                src="/images/kyle-workshop-2.jpg"
                alt="Kyle Montgomery speaking at an AI workshop in front of a smartboard"
                width={1280}
                height={720}
                className="w-full h-80 object-cover"
                loading="lazy"
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
            Most businesses start with the $97 workshop, then book an assessment. The assessment
            tells you exactly where to go next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshop" className="px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all">
              Join the Workshop — $97
            </Link>
            <Link href="/assessment" className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all">
              Book the Assessment — $997
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

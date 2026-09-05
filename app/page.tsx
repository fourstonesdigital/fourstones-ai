import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FAQAccordion from '@/components/ui/FAQAccordion';

const services = [
  {
    name: 'AI Implementation Workshop',
    price: '',
    showPrice: true,
    per: 'per person',
    description:
      'A hands-on 4-hour session at our Madison office. You leave with a working AI tool built for your specific business. Not a demo. An actual tool.',
    features: [
      'Small group format (10 seats max)',
      'You build something real during the session',
      'In person — Madison, AL office',
      'Works for HVAC, law, dental, trades, and more',
    ],
    cta: 'Reserve Your Seat',
    href: '/workshop',
    highlight: false,
    image: '/images/workshop-hands-on.png',
    imageAlt: 'Small-group hands-on working session',
  },
  {
    name: 'AI Consulting & Process Review',
    price: 'Quoted based on your needs',
    showPrice: false,
    per: '',
    description:
      'Kyle comes to your business, maps your workflows in person, identifies every AI opportunity, and delivers a prioritized plan. Scope and pricing discussed during your initial meeting.',
    features: [
      'On-site business process review',
      'AI opportunity assessment',
      'Prioritized implementation plan',
      'Pricing based on size and complexity',
    ],
    cta: 'Request a Quote',
    href: '/contact',
    highlight: true,
    image: null,
    imageAlt: null,
  },
  {
    name: 'Custom AI Build',
    price: 'Quoted based on your needs',
    showPrice: false,
    per: '',
    description:
      'Done-for-you custom AI tools built into your existing workflows. We engineer it, deploy it, train your team on-site, and hand you the keys. Scope and pricing discussed in person.',
    features: [
      'Full custom AI system development',
      'Integration with your existing software',
      'On-site staff training + documentation',
      'You own all code and IP',
    ],
    cta: 'Start the Conversation',
    href: '/contact',
    highlight: false,
    image: null,
    imageAlt: null,
  },
];

const stats = [
  { value: 'EE PhD', label: 'Engineering credentials' },
  { value: '10+', label: 'AI systems built & deployed' },
  { value: 'Local', label: 'Huntsville, Madison, Decatur & surrounding areas' },
  { value: 'Both', label: 'In-person or Zoom' },
];

const industryTiles = [
  {
    name: 'HVAC & Home Services',
    image: '/images/industry-hvac.png',
    imageAlt: 'Service van in a residential driveway at late afternoon',
    example: 'Estimate follow-ups, job-costing notes, automated dispatching.',
  },
  {
    name: 'Law Firms',
    image: '/images/industry-law.png',
    imageAlt: 'Quiet law-firm conference room',
    example: 'Intake summaries, deadline tracking, document drafting.',
  },
  {
    name: 'Dental & Medical Offices',
    image: '/images/industry-dental.png',
    imageAlt: 'Dental reception desk, calm and modern',
    example: 'Appointment reminders, patient FAQ bots, billing follow-up.',
  },
  {
    name: 'Insurance Agencies',
    image: '/images/industry-insurance.png',
    imageAlt: 'Insurance office, professional and calm',
    example: 'Quote workflows, renewal tracking, client comms.',
  },
  {
    name: 'Accounting Firms',
    image: '/images/industry-accounting.png',
    imageAlt: 'Accounting office, organized and focused',
    example: 'Document collection, client onboarding, deadline alerts.',
  },
  {
    name: 'Contractors & Trades',
    image: '/images/industry-trades.png',
    imageAlt: 'Jobsite table with plans and tools',
    example: 'Bid follow-up, project updates, subcontractor coordination.',
  },
];

const faqs = [
  {
    q: 'Do I need to understand AI to work with you?',
    a: 'No. You understand your business. Kyle handles the AI. Show up with a real problem and he\'ll figure out the solution.',
  },
  {
    q: 'Is everything done in person?',
    a: 'The workshop is always in person at the Madison, AL office. For consulting and custom builds, Kyle is happy to meet at your location, his office, or on Zoom — whatever works best for you.',
  },
  {
    q: 'What area do you serve?',
    a: 'Huntsville, Madison, Decatur, and the surrounding North Alabama area. If you\'re local, you\'re in the right place.',
  },
  {
    q: 'How is this different from ChatGPT?',
    a: 'ChatGPT is a general tool. Four Stones AI builds systems specific to your business — trained on your data, integrated into your workflow, and doing your actual work automatically.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-north-alabama-dusk.png"
            alt="Dusk over a North Alabama city skyline, muted and professional"
            fill
            className="object-cover"
            priority
          />
          {/* Dark-grid + navy overlay for readability */}
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0 bg-[#0B0F14]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Stop talking about AI.
            <br />
            <span className="text-gradient accent-serif">Start using it.</span>
          </h1>

          <p className="text-xl text-[#CBD5E1]/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Four Stones AI works with businesses in Huntsville, Madison, Decatur, and surrounding North Alabama communities — in person or on Zoom. Real AI tools, built for real business problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/workshop"
              className="group px-8 py-4 text-base font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 shadow-lg hover:shadow-[#1488AA]/30 transition-all flex items-center gap-2"
            >
              Reserve Your Seat
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-semibold text-[#CBD5E1] rounded-xl border border-white/25 hover:bg-white/5 hover:border-[#1488AA]/50 transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="border border-white/10 rounded-2xl px-8 py-6 mt-16 bg-[#0B0F14]/40 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center md:grid md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center border-r border-white/10 last:border-r-0 px-6 first:pl-0 py-2 md:py-0">
                  <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-[#CBD5E1]/90 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement — light section, word-by-word scroll reveal */}
      <section className="section-light py-28 md:py-36 px-6 border-t-4 border-[#1488AA]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal
            className="text-2xl md:text-[2.75rem] font-semibold leading-[1.4] tracking-tight"
            dimClass="text-[#0B0F14]/20"
            brightClass="text-[#0B0F14]"
          >
            Four Stones AI is a North Alabama AI consultancy built to help local businesses work smarter, not harder. From custom tools that eliminate busywork to systems that run your operation while you sleep, we deliver practical AI that makes a real difference for local businesses.
          </ScrollReveal>
        </div>
      </section>

      {/* Positioning — merged split section */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                North Alabama businesses deserve{' '}
                <span className="text-gradient">a local AI expert.</span>
              </h2>
              <div className="space-y-4 text-[#CBD5E1]/70 leading-relaxed mb-8">
                <p>
                  Most AI consultants are somewhere else — sending a Zoom window and a slide deck from three time zones away. Kyle Montgomery is local, based in the Huntsville area, and happy to meet at your office or connect on Zoom to learn your operation firsthand.
                </p>
                <p>
                  That means he builds something that actually fits how you run things — not a generic tool repurposed from someone else&apos;s workflow. Whether you&apos;re an HVAC company in Athens that needs automated estimate follow-ups, a law firm in Huntsville tracking client deadlines, or a contractor in Decatur chasing bid responses — the problem is specific, and the solution should be too.
                </p>
                <p>
                  Remote consultants give you a roadmap. Kyle delivers a working system, trains your team on-site, and hands you the keys. No retainers, no dependency — you own everything built.
                </p>
                <p>
                  If your business is local and you&apos;re ready to put AI to work, this is the call to make.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all"
              >
                Explore AI Services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <Image
                src="/images/workflow-before-after.png"
                alt="Messy manual workflow transformed into a clean automated system"
                width={720}
                height={480}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-[#0B0F14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Three ways to <span className="accent-serif text-gradient">work together</span>
            </h2>
            <p className="text-[#CBD5E1]/60 max-w-xl mx-auto">
              All engagements start with a conversation — in person at your location or on Zoom, whatever works for you.
              Start with the workshop, or reach out directly if you already know what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className={`relative rounded-2xl border flex flex-col transition-[transform,shadow,border-color] duration-200 overflow-hidden ${
                  s.highlight
                    ? 'bg-gradient-to-b from-[#1488AA]/15 to-[#0686D4]/5 border-[#1488AA]/40 shadow-xl shadow-[#1488AA]/15 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1488AA]/20'
                    : 'bg-[#0F1623] border border-white/10 hover:border-[#1488AA]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition-all duration-200'
                }`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full gradient-teal-blue text-white text-sm font-semibold whitespace-nowrap z-10">
                    Most Requested
                  </div>
                )}

                {/* Workshop image strip */}
                {s.image && (
                  <div className="h-32 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.imageAlt!}
                      width={600}
                      height={128}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-9 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-2xl mb-2">{s.name}</h3>
                    {s.showPrice && s.price ? (
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-gradient">{s.price}</span>
                        <span className="text-[#CBD5E1]/50 text-sm">{s.per}</span>
                      </div>
                    ) : (
                      <div className="mb-4">
                        <span className="text-base font-medium text-[#CBD5E1]/80">Quoted based on your needs</span>
                      </div>
                    )}
                    <p className="text-[#CBD5E1]/80 text-sm leading-relaxed">{s.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#CBD5E1]/85 gap-y-1">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="px-6 bg-[#0B0F14] py-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/5 relative">
            <Image
              src="/images/service-area-map.png"
              alt="Stylized map of Huntsville, Madison, Decatur and surrounding North Alabama communities"
              width={1280}
              height={640}
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/70 via-transparent to-[#0B0F14]/40 flex items-center px-10">
              <div>
                <div className="text-[#1488AA] text-xs font-semibold uppercase tracking-widest mb-2">Serving North Alabama</div>
                <div className="text-white text-2xl md:text-3xl font-bold leading-snug">
                  Huntsville · Madison · Decatur · Athens<br />and surrounding communities
                </div>
                <p className="text-[#CBD5E1]/70 mt-3 text-sm max-w-sm">
                  If your business is local, Kyle can be at your door.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-16 px-6 bg-[#0B0F14]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">
            Industries we work with
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {industryTiles.map((tile) => (
              <div
                key={tile.name}
                className="bg-[#0B0F14] border border-white/5 hover:border-[#1488AA]/20 rounded-xl overflow-hidden transition-colors duration-200"
              >
                <div className="relative" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={tile.image}
                    alt={tile.imageAlt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-base mb-1">{tile.name}</h3>
                  <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{tile.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#0B0F14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Common questions</h2>
          <p className="text-[#CBD5E1]/60 text-center mb-12 text-sm">Click any question to expand it.</p>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA with hero image background */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-north-alabama-dusk.png"
            alt="Dusk over a North Alabama city skyline, muted and professional"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0B0F14]/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="relative p-12 rounded-2xl bg-gradient-to-b from-[#1488AA]/10 to-[#0686D4]/5 border border-[#1488AA]/20 shadow-2xl shadow-[#1488AA]/10 overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Local business. Local consultant. Real results.
              </h2>
              <p className="text-[#CBD5E1]/90 mb-8">
                Start with the workshop at our Madison, AL office. Walk out with a working
                AI tool built for your business. No fluff, no slides — just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/workshop" className="group px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 flex items-center gap-2 justify-center">
                  Reserve Your Seat
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/15 hover:bg-white/5 hover:border-[#1488AA]/40 transition-all">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

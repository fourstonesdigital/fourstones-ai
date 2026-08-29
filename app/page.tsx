import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Star, MapPin } from 'lucide-react';

const services = [
  {
    name: 'AI Implementation Workshop',
    price: '$497',
    showPrice: true,
    per: 'per person',
    description:
      'A hands-on half-day session at our Madison office. You leave with a working AI tool built for your specific business. Not a demo. An actual tool.',
    features: [
      'Small group format (10 seats max)',
      'You build something real during the session',
      'In person — Madison, AL office',
      'Works for HVAC, law, dental, trades, and more',
    ],
    cta: 'Reserve Your Seat',
    href: '/workshop',
    highlight: false,
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
  },
];

const stats = [
  { value: 'EE PhD', label: 'Engineering credentials' },
  { value: '10+', label: 'AI systems built & deployed' },
  { value: 'Local', label: 'Huntsville, Madison & surrounding areas' },
  { value: '100%', label: 'In-person. Face to face.' },
];

const localAreas = [
  'Huntsville', 'Madison', 'Athens', 'Meridianville',
  'Hazel Green', 'Gurley', 'Decatur', 'Harvest', 'Toney', 'New Market',
];

const industries = [
  'HVAC & Home Services',
  'Law Firms',
  'Dental & Medical Offices',
  'Insurance Agencies',
  'Real Estate',
  'Accounting Firms',
  'Contractors & Trades',
  'Local Retailers',
];

const faqs = [
  {
    q: 'Do I need to understand AI to work with you?',
    a: 'No. You understand your business. Kyle handles the AI. Show up with a real problem and he\'ll figure out the solution.',
  },
  {
    q: 'Is everything done in person?',
    a: 'Yes — that\'s the point. Kyle is local and happy to meet at your office or his. He can also do a call if that makes sense as a first step, but the real work happens in person.',
  },
  {
    q: 'What area do you serve?',
    a: 'Huntsville, Madison, and the surrounding North Alabama area. If you\'re local, you\'re in the right place.',
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
      <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1488AA]/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#0686D4]/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            North Alabama&apos;s
            <br />
            <span className="text-gradient">local AI consultant.</span>
          </h1>

          <p className="text-xl text-[#CBD5E1]/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Four Stones AI works exclusively with businesses in the Huntsville, Madison region
            and surrounding areas — in person, face to face. Real AI tools built for real North Alabama businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/workshop"
              className="group px-8 py-4 text-base font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 shadow-lg hover:shadow-[#1488AA]/30 transition-all flex items-center gap-2"
            >
              Join the Workshop — $497
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 hover:border-[#1488AA]/40 transition-all"
            >
              Talk to Kyle
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

      {/* Local positioning */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                North Alabama businesses deserve{' '}
                <span className="text-gradient">a local AI expert.</span>
              </h2>
              <p className="text-[#CBD5E1]/70 leading-relaxed mb-6">
                Most AI consultants are somewhere else — on a Zoom call, sending slide decks,
                charging you for time zones. Kyle Montgomery is local, based in the Huntsville area, and happy to meet at your office to learn your operation firsthand
                and build something that actually fits how you run things.
              </p>
              <p className="text-[#CBD5E1]/70 leading-relaxed mb-8">
                Whether you&apos;re an HVAC company in Athens, a law firm in Huntsville, or
                a contractor in Madison — if you&apos;re in the area and ready to put AI
                to work, this is the call to make.
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
                { icon: MapPin, title: 'In person. Always.', desc: 'Kyle comes to you or you come to the office in Madison. He can do a call as a first step — but the real work happens face to face.' },
                { icon: Users, title: 'Built for your workflow', desc: 'Not a generic tool. Custom AI designed around how your specific business actually runs — your data, your processes, your team.' },
                { icon: TrendingUp, title: 'ROI you can measure', desc: 'Time saved, money recovered, staff hours freed up. Kyle focuses on results that show up in your bottom line.' },
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

      {/* Huntsville image banner */}
      <section className="px-6 bg-[#0B0F14] py-4">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/5 relative">
          <Image
            src="/images/huntsville.png"
            alt="Huntsville Alabama"
            width={1280}
            height={480}
            className="w-full h-56 md:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/70 via-transparent to-[#0B0F14]/40 flex items-center px-10">
            <div>
              <div className="text-[#1488AA] text-xs font-semibold uppercase tracking-widest mb-2">Serving North Alabama</div>
              <div className="text-white text-2xl md:text-3xl font-bold leading-snug">
                Huntsville · Madison · Athens<br />and surrounding communities
              </div>
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
              All work is done in person, in North Alabama. Start with the workshop,
              or reach out directly if you already know what you need.
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-teal-blue text-white text-xs font-semibold whitespace-nowrap">
                    Most Requested
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-2">{s.name}</h3>
                  {s.showPrice ? (
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-gradient">{s.price}</span>
                      <span className="text-[#CBD5E1]/50 text-sm">{s.per}</span>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <span className="text-base font-medium text-[#CBD5E1]/60">Quoted based on your needs</span>
                    </div>
                  )}
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

      {/* Automation image + local areas */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Serving these communities</h2>
              <p className="text-[#CBD5E1]/60 mb-6 text-sm leading-relaxed">
                Huntsville, Madison, and surrounding areas. If your business is local,
                Kyle can be at your door.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {localAreas.map((area) => (
                  <span key={area} className="px-4 py-2 rounded-full bg-[#0B0F14] border border-[#1488AA]/20 text-[#CBD5E1]/70 text-sm hover:text-white hover:border-[#1488AA]/50 transition-all">
                    {area}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Industries we work with</h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span key={ind} className="px-4 py-2 rounded-full bg-[#0B0F14] border border-white/8 text-[#CBD5E1]/70 text-sm hover:border-[#1488AA]/30 hover:text-white transition-all">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <Image
                src="/images/automation.png"
                alt="AI automation for small business"
                width={720}
                height={480}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#0B0F14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Common questions</h2>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-xs font-medium mb-6">
                <MapPin size={12} /> North Alabama — In Person
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Local business. Local consultant. Real results.
              </h2>
              <p className="text-[#CBD5E1]/70 mb-8">
                Start with the $497 workshop at our Madison, AL office. Walk out with a working
                AI tool built for your business. Face to face. No fluff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/workshop" className="group px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 flex items-center gap-2 justify-center">
                  Join the Workshop
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all">
                  Talk to Kyle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

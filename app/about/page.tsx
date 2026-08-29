import Link from 'next/link';
import { ArrowRight, Award, Cpu, Building2, GraduationCap } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'EE PhD, Purdue University',
    desc: 'Electrical Engineering doctorate — the engineering background that makes AI implementation rigorous, not guesswork.',
  },
  {
    icon: Cpu,
    title: 'AI Practitioner',
    desc: 'Built and deployed 10+ production AI systems — not prototypes, real tools used by real businesses every day.',
  },
  {
    icon: Building2,
    title: 'Founder, nGenius Prep',
    desc: 'Grew and operates a test prep business, built its entire custom software platform with AI — proving the model works.',
  },
  {
    icon: Award,
    title: 'Local Presence',
    desc: 'Based in Madison, AL with a physical office. Not a remote consultant you Zoom with once and never hear from again.',
  },
];

const proofPoints = [
  'Built a full custom student management system using AI tools — replacing $500/mo in SaaS',
  'Automated lead follow-up, scheduling, and reporting for a 4-person tutoring business',
  'Reduced admin overhead by ~15 hrs/week with AI-powered workflows',
  'Deployed live student testing platform serving hundreds of ACT prep students',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#1488AA]/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-sm font-medium mb-8">
            About Four Stones AI
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            This isn&apos;t a{' '}
            <span className="text-gradient">consulting firm</span> that
            discovered AI last year.
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl">
            Kyle Montgomery has been building with AI for years — before it was
            trendy. He built the tools. They worked. Now he builds them for you.
          </p>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1488AA]/20 to-[#0686D4]/10 border border-[#1488AA]/20 flex items-center justify-center overflow-hidden">
              {/* AI-generated placeholder — replace with Kyle's photo */}
              <div className="w-full h-full bg-gradient-to-br from-[#111827] to-[#0B0F14] flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1488AA] to-[#0686D4] flex items-center justify-center text-4xl font-bold text-white">
                  K
                </div>
                <p className="text-[#CBD5E1]/40 text-sm">Photo coming soon</p>
              </div>
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-[#0B0F14] border border-[#1488AA]/20 shadow-xl">
              <div className="text-2xl font-bold text-white">PhD</div>
              <div className="text-xs text-[#CBD5E1]/60">Electrical Engineering</div>
              <div className="text-xs text-[#1488AA]">Purdue University</div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Meet Kyle Montgomery</h2>
            <div className="space-y-4 text-[#CBD5E1]/70 leading-relaxed">
              <p>
                Kyle Montgomery holds a PhD in Electrical Engineering from Purdue University and
                spent years in aerospace and defense before pivoting to something he cared about more:
                helping businesses run smarter.
              </p>
              <p>
                A few years ago, Kyle acquired nGenius Prep, a test prep company in Madison, AL.
                Rather than run it the way everyone else runs a tutoring business, he built the
                entire software infrastructure from scratch using AI — student management, scheduling,
                automated follow-up, a custom testing platform. The kind of system that would
                normally cost a company $10K–$50K to have built. He did it himself, proving that
                AI in the right hands can make a small business operate like a much bigger one.
              </p>
              <p>
                Four Stones AI is the natural extension of that work. Kyle now helps other business
                owners do what he did for himself: identify the places where AI can save real time
                and real money, then actually build the thing.
              </p>
              <p>
                He&apos;s based in Madison, AL, has a physical office, and takes a deliberately
                limited number of clients so the work is always done right. If you want someone
                who&apos;s actually done this before — not just read about it — you&apos;re in
                the right place.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all"
              >
                Work With Kyle <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            The credentials that matter
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-xl bg-[#111827] border border-white/5 hover:border-[#1488AA]/20 transition-colors"
              >
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

      {/* Proof — nGenius */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-[#0B0F14] border border-[#1488AA]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1488AA]/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1488AA]/10 border border-[#1488AA]/20 text-[#1488AA] text-xs font-semibold mb-6 uppercase tracking-wider">
                Proof of Work
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                nGenius Prep — built with the same approach
              </h2>
              <p className="text-[#CBD5E1]/70 leading-relaxed mb-8">
                Before Four Stones AI was a business, Kyle was building. Here&apos;s what he
                built for his own company — the same kind of work he now does for clients:
              </p>
              <ul className="space-y-3">
                {proofPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-[#CBD5E1]/70 text-sm">
                    <span className="w-5 h-5 rounded-full gradient-teal-blue flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B0F14] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work with someone who&apos;s actually done this?
          </h2>
          <p className="text-[#CBD5E1]/60 mb-8">
            Start with the workshop or reach out directly. Either way, the first
            conversation is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshop" className="px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all">
              Join the Workshop
            </Link>
            <Link href="/contact" className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

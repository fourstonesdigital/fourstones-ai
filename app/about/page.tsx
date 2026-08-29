import Link from 'next/link';
import { ArrowRight, Award, Cpu, Building2, GraduationCap } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'PhD, Electrical Engineering — Purdue University',
    desc: 'A rigorous engineering background that makes AI implementation precise and results-driven — not guesswork.',
  },
  {
    icon: Building2,
    title: 'Aerospace Industry Veteran',
    desc: 'Spent many years working in the aerospace industry before transitioning to full-time entrepreneurship.',
  },
  {
    icon: Cpu,
    title: 'Built Real AI Systems — For His Own Business',
    desc: 'Used AI to build the tools that run nGenius Prep — reducing his own weekly hours to a minimum while the business thrives.',
  },
  {
    icon: Award,
    title: 'Local — Huntsville Area',
    desc: 'Based in the Huntsville area with a physical office in Madison. Works exclusively with local North Alabama businesses, in person.',
  },
];

const proofPoints = [
  'Built a full custom student management system using AI — replacing expensive off-the-shelf SaaS',
  'Automated lead follow-up, scheduling, and reporting workflows',
  'Reduced his own weekly hours managing the business to a minimum',
  'Deployed a live student testing platform serving hundreds of ACT prep students',
  'Maintains a great staff and team running day-to-day operations — fully independently',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#1488AA]/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Built by someone who did it
            <br />
            <span className="text-gradient">for himself first.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl">
            Kyle Montgomery didn&apos;t start a consulting firm because he read about AI.
            He built the tools, ran them in his own business, and saw what they actually do.
            Now he helps other owners do the same.
          </p>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1488AA]/20 to-[#0686D4]/10 border border-[#1488AA]/20 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#111827] to-[#0B0F14] flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1488AA] to-[#0686D4] flex items-center justify-center text-4xl font-bold text-white">
                  K
                </div>
                <p className="text-[#CBD5E1]/40 text-sm">Photo coming soon</p>
              </div>
            </div>
            {/* Credential card */}
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
                Kyle holds a PhD in Electrical Engineering from Purdue University and spent
                many years working in the aerospace industry before making a deliberate decision
                to become a full-time entrepreneur.
              </p>
              <p>
                That transition led him to nGenius Prep — the Huntsville area&apos;s number one
                ACT test prep company, located in Madison, AL. Rather than run it the way most
                small businesses are run, Kyle leaned into AI. He built custom tools to handle
                scheduling, lead follow-up, student management, and reporting — systems that would
                normally require a full administrative team or expensive software subscriptions.
              </p>
              <p>
                Going through that process as a business owner — figuring out which AI tools
                actually made sense, which ones were overhyped, and how to build something that
                genuinely worked — Kyle found something unexpected: he loved it. The problem-solving,
                the building, the tangible impact on how the business ran.
              </p>
              <p>
                Today, nGenius Prep has a great staff running day-to-day operations nearly
                independently, and Kyle spends minimal hours each week managing the business.
                That freed-up time and hard-won experience is now focused on one thing: helping
                other North Alabama business owners go through the same transformation.
              </p>
              <p>
                The workshops at the Madison office are where that starts. Come see what&apos;s
                possible — from someone who&apos;s already done it.
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
            The background that makes this different
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
                Proof of Work — nGenius Prep
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                He built it for himself first.
              </h2>
              <p className="text-[#CBD5E1]/70 leading-relaxed mb-8">
                Before advising anyone else, Kyle went through the exact same process he now
                guides clients through — figuring out where AI could make the biggest difference
                in a real, operating small business. Here&apos;s what came out of it:
              </p>
              <ul className="space-y-3">
                {proofPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-[#CBD5E1]/70 text-sm">
                    <span className="w-5 h-5 rounded-full gradient-teal-blue flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <p className="text-[#CBD5E1]/50 text-sm mt-8 leading-relaxed">
                The workshops are held at the nGenius Prep office in Madison, AL — the same
                place where all of this was built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B0F14] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work with someone who&apos;s already done this?
          </h2>
          <p className="text-[#CBD5E1]/60 mb-8">
            Start with the workshop or reach out directly.
            Either way, the first conversation is free.
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

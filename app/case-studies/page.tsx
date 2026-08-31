import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const caseStudies = [
  {
    slug: 'ngenius-os',
    client: 'nGenius Prep',
    title: 'Custom Business Operating System',
    subtitle: 'Replacing $500+/mo in SaaS with a single custom-built platform',
    industry: 'Education / Test Prep',
    location: 'Madison, AL',
    image: '/images/case-study-os-login.png',
    imageAlt: 'nGenius Prep OS — custom business management platform',
    url: 'https://os.ngeniusprep.com',
    challenge: `nGenius Prep was running on a patchwork of third-party tools — a CRM here, a scheduling system there, a separate tutoring management platform on top. Monthly SaaS costs were climbing, data lived in three different places, and the staff was constantly switching between tools to do basic work. Kyle needed something that actually fit the business.`,
    solution: `Kyle built nGenius OS from scratch — a custom web application that consolidates every core business function into a single platform. Student management, session scheduling, tutor assignments, attendance tracking, billing history, and internal reporting all live in one place. The system is role-based: admins, tutors, and students each see exactly what they need.`,
    outcome: [
      'Eliminated $500+/mo in third-party SaaS subscriptions',
      'Single login for all staff — no more tool-switching',
      'Student records, sessions, and billing in one place',
      'Automated reporting that previously required manual export and formatting',
      'Staff can operate the business day-to-day with minimal oversight from Kyle',
    ],
    stack: 'Next.js · TypeScript · PostgreSQL · Prisma · Auth.js · Vercel',
    timeframe: 'Built over several months, continuously improved',
  },
  {
    slug: 'mock-test',
    client: 'nGenius Prep',
    title: 'Digital ACT Mock Test Platform',
    subtitle: 'A fully custom ACT testing environment with instant scoring and detailed reporting',
    industry: 'Education / Test Prep',
    location: 'Madison, AL',
    image: '/images/case-study-mock-test.png',
    imageAlt: 'nGenius Prep Digital ACT Mock Test — student testing platform',
    url: 'https://mock.ngeniusprep.com',
    challenge: `Administering practice ACT exams meant printed tests, manual answer sheets, and hours of scoring by hand. For a tutoring business doing regular mock tests with multiple students, this was a significant time drain. Off-the-shelf test prep platforms existed but were expensive, generic, and didn't match the actual ACT format or nGenius's specific curriculum needs.`,
    solution: `Kyle built a custom digital mock test platform purpose-built for nGenius students. Students receive a unique access code from their tutor, take a timed ACT-aligned exam in their browser with real test conditions (section timing, navigation constraints), and receive an instant detailed score report the moment they submit. Tutors get immediate insight into exactly where each student needs work.`,
    outcome: [
      'Zero manual scoring — results are instant and automatic',
      'Full ACT-aligned format across all five sections',
      'Per-question analytics showing time spent and error patterns',
      'Access-code system means only enrolled students can test',
      'Tutors spend prep time on instruction, not grading',
    ],
    stack: 'Next.js · TypeScript · PostgreSQL · Vercel · Integrated with nGenius OS',
    timeframe: 'Built and launched in under 60 days',
  },
  {
    slug: 'ngenius-website',
    client: 'nGenius Prep',
    title: 'Full Website Rebuild',
    subtitle: 'From WordPress/Elementor to a custom Next.js site — faster, better converting, fully owned',
    industry: 'Education / Test Prep',
    location: 'Madison, AL',
    image: '/images/case-study-website.png',
    imageAlt: 'nGenius Prep website — ngeniusprep.com',
    url: 'https://www.ngeniusprep.com',
    challenge: `The nGenius Prep website was running on WordPress with Elementor — slow to load, difficult to update, and relying on a page builder that made every change feel like a project. SEO performance was mediocre, the design was dated, and there was no clean way to add new pages or content without risking the layout. Kyle wanted something he could actually own and control.`,
    solution: `Kyle rebuilt the entire site from scratch using Next.js and Tailwind CSS — no page builders, no plugins, no WordPress. The new site is statically generated, loads in under a second, and is structured for SEO from the ground up. Each program page is purpose-built as a sales page. The blog uses a custom renderer with a pre-push guard that prevents draft content from accidentally going live.`,
    outcome: [
      'Sub-1-second load times on all pages',
      'Full control over every page — no page builder lock-in',
      'Program pages built as dedicated sales pages with clear CTAs',
      'Custom blog with branch-based publishing workflow and draft protection',
      'No ongoing WordPress/plugin maintenance costs',
    ],
    stack: 'Next.js 15 · Tailwind CSS v4 · TypeScript · Vercel · GitHub CI',
    timeframe: 'Rebuilt and launched in under 30 days',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#1488AA]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Built before we consulted
            <br />
            <span className="text-gradient accent-serif">anyone.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl">
            Every tool below was built by Kyle for his own business — nGenius Prep.
            This is the proof of work. The same approach, applied to your business.
          </p>
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
            Most consultants show you a portfolio of other people&apos;s businesses. These are the tools Kyle built to run his own — in production, used daily, with real money and real students depending on them.
          </ScrollReveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 px-6 bg-[#0B0F14]">
        <div className="max-w-5xl mx-auto space-y-24">
          {caseStudies.map((cs, i) => (
            <div key={cs.slug} className="scroll-mt-24" id={cs.slug}>
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#1488AA]/10 border border-[#1488AA]/20 text-[#1488AA] text-xs font-semibold uppercase tracking-wider">
                  {cs.industry}
                </span>
                <span className="text-[#CBD5E1]/40 text-xs">{cs.location}</span>
              </div>

              <div className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                {/* Screenshot */}
                <div>
                  <div className="rounded-2xl overflow-hidden border border-white/5 mb-4">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      width={800}
                      height={500}
                      className="w-full h-56 object-cover object-top"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={cs.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#1488AA] hover:text-[#0686D4] text-sm font-medium transition-colors"
                    >
                      View live <ExternalLink size={13} />
                    </a>
                    <span className="text-[#CBD5E1]/20">·</span>
                    <span className="text-[#CBD5E1]/40 text-xs font-mono">{cs.stack}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="text-[#1488AA] text-xs font-semibold uppercase tracking-widest mb-2">
                    {cs.client}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {cs.title}
                  </h2>
                  <p className="text-[#CBD5E1]/50 text-sm mb-6">{cs.subtitle}</p>

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-2">The Problem</h3>
                      <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-2">What Was Built</h3>
                      <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Results</h3>
                      <ul className="space-y-2">
                        {cs.outcome.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-[#CBD5E1]/70">
                            <CheckCircle size={14} className="text-[#1488AA] shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#CBD5E1]/30 text-xs">{cs.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {i < caseStudies.length - 1 && (
                <div className="mt-24 border-t border-white/5" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111827] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want something like this for{' '}
            <span className="accent-serif text-gradient">your business?</span>
          </h2>
          <p className="text-[#CBD5E1]/60 mb-8">
            Start with the AI Implementation Workshop and see what&apos;s possible.
            Or reach out directly to talk through a custom build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/workshop"
              className="px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all inline-flex items-center gap-2 justify-center"
            >
              Reserve Your Seat <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all"
            >
              Talk to Kyle
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

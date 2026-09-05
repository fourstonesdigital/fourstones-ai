import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Users, MapPin, CheckCircle, Calendar, BookOpen, Wrench, Lightbulb } from 'lucide-react';
import WorkshopEvents from '@/components/sections/WorkshopEvents';
import ScrollReveal from '@/components/ui/ScrollReveal';

const whatYouLearn = [
  {
    icon: BookOpen,
    title: 'What AI actually is — and isn\'t',
    desc: 'Cut through the hype. Understand what these tools can realistically do for a service business right now, and what\'s still a long way off. Leave with enough knowledge to talk about it confidently with your peers.',
  },
  {
    icon: Lightbulb,
    title: 'How to spot AI opportunities in your business',
    desc: 'Learn the framework Kyle uses to identify which workflows are ripe for automation — so you can keep finding opportunities on your own long after the workshop.',
  },
  {
    icon: Wrench,
    title: 'How to use AI tools yourself',
    desc: 'Hands-on time with the actual tools — not slides about them. You\'ll use them during the session and leave knowing how to keep building on your own without needing to hire anyone.',
  },
  {
    icon: CheckCircle,
    title: 'Walk out with something that works',
    desc: 'You don\'t just learn about AI — you build a real tool for your business during the session and take it home running. Something you can put to use the next day.',
  },
];

const agenda = [
  {
    part: 'Part 1',
    title: 'The AI Landscape — What\'s Actually Happening',
    desc: 'A grounded overview of where AI is today, what\'s changed in the last few years, and why it matters for small service businesses. No hype, no sci-fi — just what\'s real, what\'s useful, and what you actually need to know.',
    isBreak: false,
  },
  {
    part: 'Part 2',
    title: 'Live Demos — See It Working',
    desc: 'Kyle demonstrates AI tools live, applied to real business scenarios relevant to the group. You\'ll see exactly how businesses like yours could be using these tools today — then try them yourself.',
    isBreak: false,
  },
  {
    part: 'Part 3',
    title: 'Your Business, Your Opportunities',
    desc: 'We map out each participant\'s workflows and identify where AI can have the biggest impact. You leave knowing your specific opportunities — not just general possibilities.',
    isBreak: false,
  },
  {
    part: 'Break',
    title: 'Break + Open Q&A',
    desc: 'Coffee, questions, conversation. Kyle answers anything — about your business, the tools, what to build, or where to start.',
    isBreak: true,
  },
  {
    part: 'Part 4',
    title: 'Build Session — Build Your Tool',
    desc: 'Guided hands-on building. You pick the AI tool most useful to your business and Kyle walks you through building it step by step. Every participant builds something different, specific to their operation.',
    isBreak: false,
  },
  {
    part: 'Part 5',
    title: 'What\'s Next — Building From Here',
    desc: 'How to keep using and expanding what you built on your own. Resources, next steps, and a clear picture of where AI can take your business. You leave equipped to keep going independently.',
    isBreak: false,
  },
];

const includes = [
  'Full AI landscape briefing — what\'s real, what\'s hype, what matters to you',
  'Live tool demonstrations with real business scenarios',
  'Hands-on time using AI tools yourself during the session',
  'Personalized opportunity mapping for your specific business',
  'One working AI tool you built, tested, and take home',
  'Resource guide for continuing to build on your own',
  'Light breakfast and coffee',
  'Small group (10 max) — real attention, not a lecture hall',
];

const whoShouldCome = [
  {
    label: 'Business Owners & Operators',
    desc: 'You run the business. You\'ve heard the AI noise and want a straight answer on what it actually means for your bottom line — and how to start using it without handing it off to someone else.',
  },
  {
    label: 'General Managers & Decision Makers',
    desc: 'You\'re responsible for how your team operates. This workshop gives you the knowledge and tools to lead AI adoption in your organization — not just approve a budget for it.',
  },
  {
    label: 'The Motivated Employee — Become the AI Expert',
    desc: 'You want to be the person who brings this back to your company. Leave the workshop as the most AI-capable person in your office — with real tools, real knowledge, and a clear plan to make an impact.',
  },
];

const faqs = [
  {
    q: 'Do I need any technical background?',
    a: 'None. This workshop is designed for business owners, not engineers. If you can use a smartphone, you\'re ready. The goal is to make AI approachable and immediately useful — not to teach you to code.',
  },
  {
    q: 'What will I actually build?',
    a: 'It depends on your business. Kyle reviews attendees\' industries in advance so the build session is relevant to what you actually do. Common examples: a customer FAQ assistant, an automated follow-up tool, a document drafting system, or an internal knowledge base.',
  },
  {
    q: 'Will I know how to keep using AI after the workshop?',
    a: 'Yes — that\'s a core goal. You\'ll leave understanding how the tools work, how to think about AI opportunities, and how to keep building on your own. You\'re not dependent on Kyle to keep going.',
  },
  {
    q: 'How many people are in each session?',
    a: 'Maximum 10. This is not a seminar — it\'s a working session. Everyone gets real attention and builds something specific to their business.',
  },
  {
    q: 'Is this in person?',
    a: 'Yes. Held at the Four Stones AI office in Madison, AL. This workshop is for businesses in Huntsville, Madison, Decatur, and surrounding areas. Check Eventbrite for the latest dates and start times.',
  },
  {
    q: 'What\'s the refund policy?',
    a: 'Full refund if you cancel at least 3 days before the session. If you miss due to illness or an unforeseen circumstance, we will transfer your registration to a future workshop date. No refund or transfer for no-shows without prior notice.'
  },
];

export default function WorkshopPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#1488AA]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Understand AI.
            <br />
            Use it yourself.
            <br />
            <span className="text-gradient accent-serif">Build something real.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl mb-10">
            This 4-hour workshop is equal parts education and application. You leave knowing
            what AI actually is, how it can change your business, how to use these tools on
            your own — and with a working AI tool you built yourself during the session.
            Check Eventbrite for the latest dates and times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#dates"
              className="group px-8 py-4 text-base font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 shadow-lg transition-all flex items-center gap-2 justify-center"
            >
              See Upcoming Dates
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all text-center"
            >
              Have Questions? Ask Kyle
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { icon: Clock, label: '4-hour workshop' },
              { icon: Users, label: '10 seats maximum' },
              { icon: MapPin, label: 'Madison, AL — in person only' },
              { icon: Calendar, label: 'See Eventbrite for dates & times' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[#CBD5E1]/60 text-sm">
                <Icon size={15} className="text-[#1488AA]" />
                {label}
              </div>
            ))}
          </div>
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
            Four hours. Ten seats. One working AI tool that you built yourself, for your own business, before you walk out the door. This is not a seminar about the future of AI — it is a working session about what you can use on Monday morning.
          </ScrollReveal>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <a
              href="#dates"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white bg-[#0B0F14] rounded-xl hover:bg-[#111827] transition-all"
            >
              See Upcoming Dates <ArrowRight size={16} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-[#0B0F14] border border-[#0B0F14]/25 rounded-xl hover:bg-[#0B0F14] hover:text-white transition-all"
            >
              Ask Kyle a Question
            </Link>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not just a workshop. <span className="accent-serif text-gradient">A turning point.</span>
            </h2>
            <p className="text-[#CBD5E1]/60 max-w-2xl mx-auto leading-relaxed">
              Most AI events leave you with a notebook full of notes and no idea what to do next.
              This one leaves you educated, confident, and holding a working tool you built yourself.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whatYouLearn.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-6 rounded-xl bg-[#0B0F14] border border-white/5 hover:border-[#1488AA]/20 transition-colors">
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

      {/* Who should come */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/images/kyle-workshop-1.jpg"
              alt="Small-group, hands-on AI workshop session — 10 seats max"
              width={720}
              height={480}
              className="w-full h-72 object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Who this is <span className="accent-serif text-gradient">for</span>
            </h2>
            <div className="space-y-6">
              {whoShouldCome.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full gradient-teal-blue shrink-0 mt-2" />
                  <div>
                    <div className="text-white font-semibold mb-1">{item.label}</div>
                    <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#CBD5E1]/40 text-xs mt-8 leading-relaxed">
              Huntsville, Madison, Decatur, and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Workshop agenda</h2>
          <p className="text-[#CBD5E1]/60 text-center mb-12 max-w-xl mx-auto">
            4 hours. Education, demonstration, and hands-on building.
            Check Eventbrite for the current start time.
          </p>
          <div className="relative">
            <div className="absolute left-[76px] top-6 bottom-6 w-px bg-[#1488AA]/20" />
            <div className="space-y-6">
              {agenda.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-[64px] shrink-0 text-right">
                    <span className={`text-xs font-mono font-semibold leading-relaxed ${item.isBreak ? 'text-[#CBD5E1]/30' : 'text-[#1488AA]'}`}>
                      {item.part}
                    </span>
                  </div>
                  <div className={`w-3 h-3 rounded-full shrink-0 mt-1.5 relative z-10 ${item.isBreak ? 'bg-[#CBD5E1]/20' : 'gradient-teal-blue'}`} />
                  <div className="pb-6">
                    <h3 className={`font-semibold mb-1 ${item.isBreak ? 'text-[#CBD5E1]/50' : 'text-white'}`}>{item.title}</h3>
                    <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Includes + Pricing */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">What&apos;s included</h2>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#CBD5E1]/70 text-sm">
                  <span className="w-5 h-5 rounded-full gradient-teal-blue flex items-center justify-center shrink-0 mt-0.5 text-white text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#111827] border border-[#1488AA]/20 p-8" id="dates">
            <h3 className="text-white font-bold text-xl mb-2">AI Workshop</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold text-gradient">$97</span>
              <span className="text-[#CBD5E1]/50">per person</span>
            </div>
            <p className="text-[#CBD5E1]/50 text-xs mb-6">
              In-person · Madison, AL · 4-hour session
            </p>
            <WorkshopEvents />
            <Link
              href="/contact"
              className="block w-full text-center py-3 px-6 font-semibold text-[#1488AA] rounded-xl border border-[#1488AA]/30 hover:bg-[#1488AA]/10 transition-all text-sm mt-4"
            >
              Questions? Contact Kyle
            </Link>
            <p className="text-center text-[#CBD5E1]/40 text-xs mt-4">
              Full refund if cancelled at least 3 days before session
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-[#0B0F14] border border-white/5">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-[#CBD5E1]/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B0F14] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            10 seats. Local businesses only.
          </h2>
          <p className="text-[#CBD5E1]/60 mb-8">
            This workshop is for North Alabama business owners who are ready to actually
            understand AI and put it to work — not just hear about it.
          </p>
          <a
            href="#dates"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 shadow-lg transition-all"
          >
            See Upcoming Dates <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

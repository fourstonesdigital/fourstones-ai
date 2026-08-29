import Link from 'next/link';
import { ArrowRight, Clock, Users, Wrench, MapPin, CheckCircle, Calendar } from 'lucide-react';

const agenda = [
  {
    time: '9:00 AM',
    title: 'Welcome & The AI Landscape',
    desc: 'What AI can actually do for a service business in 2025 — no hype, just what works.',
  },
  {
    time: '9:45 AM',
    title: 'Your Business, Your Problems',
    desc: 'We map out your specific workflows and identify the highest-value AI opportunities.',
  },
  {
    time: '10:30 AM',
    title: 'Build Session — Part 1',
    desc: 'Hands-on building. You pick the tool, we guide you through building it step by step.',
  },
  {
    time: '11:30 AM',
    title: 'Break',
    desc: 'Coffee, questions, networking with other local business owners.',
  },
  {
    time: '11:45 AM',
    title: 'Build Session — Part 2',
    desc: 'Finish, refine, and test your tool. Deploy it so it\'s live when you leave.',
  },
  {
    time: '12:30 PM',
    title: 'What\'s Next + Q&A',
    desc: 'How to keep building after today, resources, and open Q&A with Kyle.',
  },
];

const whatYouBuild = [
  'An AI assistant trained on your business FAQs that handles customer questions 24/7',
  'An automated lead follow-up system that responds to new inquiries instantly',
  'A document drafting tool that generates contracts, proposals, or emails in your voice',
  'An internal knowledge base that your team can query with natural language',
  'A scheduling assistant that handles back-and-forth coordination automatically',
];

const includes = [
  'Half-day hands-on session (9 AM – 1 PM)',
  'All tools and software provided during session',
  'Working AI tool you keep and deploy',
  'Resource guide for continuing to build',
  'Access to post-workshop Q&A chat',
  'Light breakfast and coffee',
];

const faqs = [
  {
    q: 'Do I need any technical background?',
    a: 'None whatsoever. The workshop is designed for business owners, not engineers. If you can use a smartphone, you can build what we build in this session.',
  },
  {
    q: 'What tools/software will I need?',
    a: 'Just bring a laptop. We\'ll set up everything else together. No prior software subscriptions required to attend.',
  },
  {
    q: 'How many people are in each session?',
    a: 'We cap every session at 10 participants. This is not a webinar — it\'s a workshop, and everyone gets real attention.',
  },
  {
    q: 'What kind of AI tool will I actually build?',
    a: 'It depends on your business. Before the session, Kyle reviews everyone\'s industry so each participant builds something relevant. Common examples: a customer-facing chatbot, an automated follow-up system, or a document drafting assistant.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Full refund if you cancel more than 48 hours before the session. No refund for no-shows.',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-sm font-medium mb-8">
            <Wrench size={14} />
            Hands-On AI Workshop
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Walk in as a business owner.
            <br />
            <span className="text-gradient">Walk out with a working AI tool.</span>
          </h1>
          <p className="text-xl text-[#CBD5E1]/70 leading-relaxed max-w-2xl mb-10">
            This is not a webinar. This is not a demo. In a single half-day session, you build
            an AI tool specific to your business — from scratch, with your own hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 text-base font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 shadow-lg transition-all flex items-center gap-2 justify-center"
            >
              Reserve Your Seat — $497
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-semibold text-[#CBD5E1] rounded-xl border border-white/10 hover:bg-white/5 transition-all text-center"
            >
              Have Questions? Ask Kyle
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { icon: Clock, label: '4 hours, 9 AM – 1 PM' },
              { icon: Users, label: '10 seats maximum' },
              { icon: MapPin, label: 'Madison, AL office' },
              { icon: Calendar, label: 'Sessions monthly' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[#CBD5E1]/60 text-sm">
                <Icon size={15} className="text-[#1488AA]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you build */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              What will you build?
            </h2>
            <p className="text-[#CBD5E1]/70 leading-relaxed mb-8">
              Every participant builds something different — because every business is different.
              Kyle reviews your industry and goals in advance so your build session is tailored.
              Past participants have built:
            </p>
            <ul className="space-y-3">
              {whatYouBuild.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#CBD5E1]/70">
                  <CheckCircle size={16} className="text-[#1488AA] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0B0F14] border border-[#1488AA]/20 p-8">
            <h3 className="text-white font-bold text-xl mb-6">What&apos;s included</h3>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#CBD5E1]/70 text-sm">
                  <span className="w-5 h-5 rounded-full gradient-teal-blue flex items-center justify-center shrink-0 text-white text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$497</span>
                <span className="text-[#CBD5E1]/50">per person</span>
              </div>
              <a
                href="https://www.eventbrite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 transition-all"
              >
                Reserve Your Seat on Eventbrite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Workshop agenda
          </h2>
          <div className="relative">
            <div className="absolute left-[72px] top-6 bottom-6 w-px bg-[#1488AA]/20" />
            <div className="space-y-6">
              {agenda.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-[60px] shrink-0 text-right">
                    <span className="text-[#1488AA] text-xs font-mono font-semibold">{item.time}</span>
                  </div>
                  <div className="w-3 h-3 rounded-full gradient-teal-blue shrink-0 mt-1 relative z-10" />
                  <div className="pb-6">
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">In-person, in Madison AL</h2>
              <p className="text-[#CBD5E1]/70 leading-relaxed mb-6">
                Workshops are held at the Four Stones AI office — a real space where you can
                focus, ask questions, and build without distractions.
              </p>
              <address className="not-italic">
                <div className="flex items-start gap-3 text-[#CBD5E1]/70">
                  <MapPin size={18} className="text-[#1488AA] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">7771 Hwy 72 W, Suite C</div>
                    <div>Madison, AL 35758</div>
                    <div className="text-sm text-[#CBD5E1]/50 mt-1">(Near the Huntsville area)</div>
                  </div>
                </div>
              </address>
            </div>
            <div className="rounded-xl bg-[#0B0F14] border border-white/5 p-6 text-center">
              <div className="text-6xl mb-4">📍</div>
              <div className="text-white font-semibold">Madison, Alabama</div>
              <div className="text-[#CBD5E1]/50 text-sm">Huntsville Metro Area</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#0B0F14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-[#111827] border border-white/5">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-[#CBD5E1]/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#111827] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Seats fill fast. 10 per session.
          </h2>
          <p className="text-[#CBD5E1]/60 mb-8">
            If you&apos;re on the fence, ask yourself: what does it cost you to keep doing things manually?
          </p>
          <a
            href="https://www.eventbrite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 shadow-lg transition-all"
          >
            Register on Eventbrite — $497 <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

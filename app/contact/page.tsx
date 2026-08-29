'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    industry: '',
    interest: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to email/CRM
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#1488AA]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1488AA]/30 bg-[#1488AA]/10 text-[#1488AA] text-sm font-medium mb-8">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s talk about your business.
          </h1>
          <p className="text-lg text-[#CBD5E1]/70 leading-relaxed max-w-xl mx-auto">
            Fill out the form below or reach out directly. Kyle personally reviews
            every inquiry — you&apos;ll hear back within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-white font-bold text-xl mb-6">Contact info</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-teal-blue flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Office</div>
                    <address className="not-italic text-[#CBD5E1]/60 text-sm mt-1">
                      7771 Hwy 72 W, Suite C<br />
                      Madison, AL 35758
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-teal-blue flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Email</div>
                    <a
                      href="mailto:kyle@fourstones.ai"
                      className="text-[#1488AA] hover:text-[#0686D4] text-sm mt-1 block transition-colors"
                    >
                      kyle@fourstones.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0B0F14] border border-[#1488AA]/20">
              <h3 className="text-white font-semibold mb-3">Not sure what you need?</h3>
              <p className="text-[#CBD5E1]/60 text-sm leading-relaxed mb-4">
                Start with the $497 workshop. It&apos;s the fastest way to find out what
                AI can do for your specific business — with no commitment beyond the day.
              </p>
              <a
                href="/workshop"
                className="inline-flex items-center gap-2 text-[#1488AA] hover:text-[#0686D4] text-sm font-medium transition-colors"
              >
                Learn about the workshop →
              </a>
            </div>

            <div className="p-6 rounded-xl bg-[#0B0F14] border border-white/5">
              <h3 className="text-white font-semibold mb-2">Response time</h3>
              <p className="text-[#CBD5E1]/60 text-sm">
                Kyle reviews every inquiry personally. Expect a reply within 1 business day,
                usually same day.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full gradient-teal-blue flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message sent!</h3>
                  <p className="text-[#CBD5E1]/60">
                    Kyle will be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Your name <span className="text-[#1488AA]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-white/10 text-white placeholder-[#CBD5E1]/30 focus:outline-none focus:border-[#1488AA]/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email <span className="text-[#1488AA]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@yourbusiness.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-white/10 text-white placeholder-[#CBD5E1]/30 focus:outline-none focus:border-[#1488AA]/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Business name
                    </label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Smith HVAC LLC"
                      className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-white/10 text-white placeholder-[#CBD5E1]/30 focus:outline-none focus:border-[#1488AA]/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Industry
                    </label>
                    <select
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-white/10 text-white focus:outline-none focus:border-[#1488AA]/50 transition-colors text-sm"
                    >
                      <option value="">Select your industry</option>
                      <option>HVAC / Home Services</option>
                      <option>Law Firm</option>
                      <option>Dental / Medical</option>
                      <option>Insurance</option>
                      <option>Real Estate</option>
                      <option>Accounting / Finance</option>
                      <option>Retail / E-commerce</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    What are you interested in?
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-white/10 text-white focus:outline-none focus:border-[#1488AA]/50 transition-colors text-sm"
                  >
                    <option value="">Choose one</option>
                    <option>AI Workshop ($497/person)</option>
                    <option>Corporate AI Audit ($15K–$25K)</option>
                    <option>Custom AI Build ($25K–$50K+)</option>
                    <option>Not sure yet — want to talk first</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Tell me about your business and what you want to solve
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="What's eating up the most time in your business right now? What would be worth automating if you could?"
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-white/10 text-white placeholder-[#CBD5E1]/30 focus:outline-none focus:border-[#1488AA]/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-8 font-semibold text-white rounded-xl gradient-teal-blue hover:opacity-90 disabled:opacity-60 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-[#CBD5E1]/40 text-xs">
                  No spam. No sales calls unless you ask. Kyle will reply directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

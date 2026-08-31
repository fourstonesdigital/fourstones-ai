'use client';

import { useState } from 'react';
import { MapPin, Send, CheckCircle, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    smsConsent: false,
    business: '',
    industry: '',
    interest: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again or reach out directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#1488AA]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s meet and talk about{' '}
            <span className="accent-serif text-gradient">your business.</span>
          </h1>
          <p className="text-lg text-[#CBD5E1]/70 leading-relaxed max-w-xl mx-auto">
            Kyle works with businesses in Huntsville, Madison, Decatur, and surrounding areas.
            Fill out the form and he&apos;ll be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-white font-bold text-xl mb-6">
                Get in <span className="accent-serif text-gradient">touch</span>
              </h2>
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
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Phone</div>
                    <a href="tel:+12568090048" className="text-[#CBD5E1]/60 hover:text-white text-sm mt-1 block transition-colors">
                      (256) 809-0048
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-teal-blue flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Email</div>
                    <a href="mailto:support@fourstones.ai" className="text-[#CBD5E1]/60 hover:text-white text-sm mt-1 block transition-colors">
                      support@fourstones.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0B0F14] border border-[#1488AA]/20">
              <h3 className="text-white font-semibold mb-3">Prefer to start with a workshop?</h3>
              <p className="text-[#CBD5E1]/60 text-sm leading-relaxed mb-4">
                The $497 in-person workshop in Madison is the fastest way to see what
                AI can do for your business — no commitment beyond the day.
              </p>
              <a href="/workshop" className="inline-flex items-center gap-2 text-[#1488AA] hover:text-[#0686D4] text-sm font-medium transition-colors">
                Learn about the workshop →
              </a>
            </div>

            <div className="p-6 rounded-xl bg-[#0B0F14] border border-white/5">
              <h3 className="text-white font-semibold mb-2">How it works</h3>
              <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">
                Fill out the form and Kyle will be in touch within one business day.
                He&apos;s happy to meet at your location, the Madison office, or on Zoom — whatever works best for you.
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

                {/* Phone — required */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone number <span className="text-[#1488AA]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(256) 555-0100"
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-white/10 text-white placeholder-[#CBD5E1]/30 focus:outline-none focus:border-[#1488AA]/50 transition-colors text-sm"
                  />
                  {/* SMS consent */}
                  <label className="flex items-start gap-3 mt-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.smsConsent}
                      onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded border-white/20 bg-[#0B0F14] accent-[#1488AA] shrink-0"
                    />
                    <span className="text-[#CBD5E1]/50 text-xs leading-relaxed group-hover:text-[#CBD5E1]/70 transition-colors">
                      I consent to receiving SMS messages from Four Stones AI at the number above.
                      Message and data rates may apply. You are not required to consent to receive services.
                    </span>
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Business name</label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Smith HVAC LLC"
                      className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-white/10 text-white placeholder-[#CBD5E1]/30 focus:outline-none focus:border-[#1488AA]/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Industry</label>
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
                      <option>Contractors & Trades</option>
                      <option>Retail / Local Business</option>
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
                    <option>AI Implementation Workshop</option>
                    <option>AI Consulting / Process Review</option>
                    <option>Custom AI Tool Build</option>
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
                    placeholder="What's eating up the most time in your business right now? What would you automate if you could?"
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
                    <><Send size={18} /> Send Message</>
                  )}
                </button>

                <p className="text-center text-[#CBD5E1]/40 text-xs">
                  You’ll hear back within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

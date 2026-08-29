'use client';

import { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface EventItem {
  id: string;
  name: string;
  start: string;
  end: string;
  url: string;
  soldOut: boolean;
  available: boolean;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatTimeRange(startStr: string, endStr: string) {
  const fmt = (s: string) =>
    new Date(s).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  return `${fmt(startStr)} – ${fmt(endStr)} CT`;
}

export default function WorkshopEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then((r) => r.json())
      .then((d) => setEvents(d.events || []))
      .catch(() => setEvents([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="w-5 h-5 rounded-full border-2 border-[#1488AA] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="rounded-xl bg-[#0B0F14] border border-white/5 p-6 text-center">
        <p className="text-[#CBD5E1]/50 text-sm mb-2">No upcoming sessions scheduled yet.</p>
        <a href="/contact" className="text-[#1488AA] hover:text-[#0686D4] text-sm transition-colors">
          Contact Kyle to be notified →
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-3 mt-2">
      {events.map((event) => (
        <div
          key={event.id}
          className="rounded-xl bg-[#0B0F14] border border-white/5 p-4 flex items-center justify-between gap-4"
        >
          {/* Date + time block */}
          <div className="flex items-start gap-3 min-w-0">
            <Calendar size={16} className="text-[#1488AA] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <div className="text-white font-semibold text-sm leading-snug">
                {formatDate(event.start)}
              </div>
              <div className="text-[#CBD5E1]/50 text-xs mt-0.5">
                {formatTimeRange(event.start, event.end)} · Madison, AL · 10 seats
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            {event.soldOut ? (
              <span className="text-[#CBD5E1]/30 text-xs font-semibold">Sold Out</span>
            ) : (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg gradient-teal-blue text-white font-semibold text-xs hover:opacity-90 transition-all whitespace-nowrap"
              >
                Reserve — $497 <ArrowRight size={13} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

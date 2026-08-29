'use client';

import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, Users } from 'lucide-react';

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
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

function formatTime(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });
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
      <div className="flex items-center justify-center py-12">
        <div className="w-6 h-6 rounded-full border-2 border-[#1488AA] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="rounded-xl bg-[#111827] border border-white/5 p-8 text-center">
        <p className="text-[#CBD5E1]/50 text-sm mb-4">No upcoming sessions scheduled yet.</p>
        <p className="text-[#CBD5E1]/40 text-xs">
          Check back soon or{' '}
          <a href="/contact" className="text-[#1488AA] hover:text-[#0686D4] transition-colors">
            contact Kyle
          </a>{' '}
          to be notified when the next date is posted.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="rounded-xl bg-[#111827] border border-[#1488AA]/20 p-6 flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Calendar size={16} className="text-[#1488AA] shrink-0" />
              {formatDate(event.start)}
            </div>
            <div className="flex items-center gap-2 text-[#CBD5E1]/60 text-sm">
              <Clock size={14} className="text-[#1488AA] shrink-0" />
              {formatTime(event.start)} – {formatTime(event.end)}
            </div>
            <div className="flex items-center gap-2 text-[#CBD5E1]/60 text-sm">
              <Users size={14} className="text-[#1488AA] shrink-0" />
              Madison, AL — 10 seats max
            </div>
          </div>

          <div className="shrink-0">
            {event.soldOut ? (
              <span className="inline-block px-5 py-3 rounded-lg bg-white/5 text-[#CBD5E1]/40 text-sm font-semibold">
                Sold Out
              </span>
            ) : (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-teal-blue text-white font-semibold text-sm hover:opacity-90 transition-all"
              >
                Reserve Your Seat — $497
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

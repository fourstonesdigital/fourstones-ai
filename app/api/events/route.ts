import { NextResponse } from 'next/server';

const ORG_ID = '3012290031039';
const TOKEN = process.env.EVENTBRITE_API_KEY;

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!TOKEN) {
    return NextResponse.json({ events: [] });
  }

  try {
    const res = await fetch(
      `https://www.eventbriteapi.com/v3/organizations/${ORG_ID}/events/?status=live&order_by=start_asc&expand=ticket_availability`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error('Eventbrite error:', res.status);
      return NextResponse.json({ events: [] });
    }

    const data = await res.json();

    const events = (data.events || []).map((e: {
      id: string;
      name: { text: string };
      start: { local: string };
      end: { local: string };
      url: string;
      ticket_availability?: { is_sold_out: boolean; tickets_available: boolean };
    }) => ({
      id: e.id,
      name: e.name.text,
      start: e.start.local,
      end: e.end.local,
      url: e.url,
      soldOut: e.ticket_availability?.is_sold_out ?? false,
      available: e.ticket_availability?.tickets_available ?? true,
    }));

    return NextResponse.json({ events });
  } catch (err) {
    console.error('Eventbrite fetch failed:', err);
    return NextResponse.json({ events: [] });
  }
}

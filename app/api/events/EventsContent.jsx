// app/events/EventsContent.jsx
'use client';
import { useSearchParams } from 'next/navigation';
import EventCard from '@/components/EventCard';
import { eventsData } from '../data/events';

export default function EventsContent() {
  const searchParams = useSearchParams();
  const artistName = searchParams.get('artist');

  // Filter events based on artist name
  const filteredEvents = artistName 
    ? eventsData.filter(event => 
        event.artist.toLowerCase().includes(artistName.toLowerCase())
      )
    : eventsData;

  const pageTitle = artistName 
    ? `Events by ${artistName}`
    : 'All Events';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 text-center mb-12">
          {pageTitle}
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
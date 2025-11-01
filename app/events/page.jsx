// import EventCard from '@/components/EventCard';

// async function getEvents() {
//   try {
//     const response = await fetch('https://qevent-backend.labs.crio.do/events', {
//       cache: 'no-store'
//     });
    
//     if (!response.ok) {
//       throw new Error(`Failed to fetch events: ${response.status}`);
//     }
    
//     const events = await response.json();
//     console.log('Fetched events:', events); // Debug log
//     return events;
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     return [];
//   }
// }

// export default async function EventsPage() {
//   const events = await getEvents();

//   // Debug: Check what we're getting from API
//   console.log('Events in page:', events);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">All Events</h1>
      
//       {events.length === 0 ? (
//         <div className="text-center py-8">
//           <p className="text-gray-500 text-lg">No events found.</p>
//           <p className="text-gray-400">The API might be down or there are no events.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <EventCard key={event.id} eventData={event} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // cat > app/events/page.js << 'EOF'
// import EventCard from '@/components/EventCard';

// async function getEvents() {
//   try {
//     const response = await fetch('https://qevent-backend.labs.crio.do/events', {
//       cache: 'no-store'
//     });
    
//     if (!response.ok) throw new Error('Failed to fetch events');
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     return [];
//   }
// }

// export default async function EventsPage({ searchParams }) {
//   const events = await getEvents();
//   const artistName = searchParams?.artist;

//   // Filter events if artist query parameter exists
//   const filteredEvents = artistName 
//     ? events.filter(event => event.artist === artistName)
//     : events;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">
//         {artistName ? `Events by ${artistName}` : 'All Events'}
//       </h1>
      
//       {filteredEvents.length === 0 ? (
//         <div className="text-center py-8">
//           <p className="text-gray-500 text-lg">
//             {artistName ? `No events found for artist: ${artistName}` : 'No events found.'}
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredEvents.map((event) => (
//             <EventCard key={event.id} eventData={event} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// EOF

// import EventCard from '@/components/EventCard';

// async function getEvents() {
//   try {
//     const response = await fetch('https://qevent-backend.labs.crio.do/events');
//     if (!response.ok) throw new Error('Failed to fetch events');
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     return [];
//   }
// }

// export default async function EventsPage() {
//   const events = await getEvents();

//   return (
//     <div className="min-h-screen bg-[#FFF9C4] py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-center text-[#2C5530] mb-8">All Events</h1>
        
//         {events.length === 0 ? (
//           <p className="text-[#2C5530] text-center">No events found.</p>
//         ) : (
//           <div className="flex flex-wrap justify-center">
//             {events.map((event) => (
//               <EventCard key={event.id} event={event} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


//my code
// import EventCard from '@/components/EventCard';
// import { eventsData } from '../data/events';

// export default function EventsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">All Events</h1> */}
      
//     <h1 className="text-4xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 text-center mb-12">All Events</h1>
        
//         <div className="flex flex-wrap justify-center gap-6">
//           {eventsData.map((event) => (
//             <EventCard key={event.id} event={event} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// app/events/page.jsx
'use client';
import { useSearchParams } from 'next/navigation';
import EventCard from '@/components/EventCard';
import { eventsData } from '../data/events';

export default function EventsPage() {
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
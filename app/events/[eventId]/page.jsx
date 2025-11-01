// app/events/[eventId]/page.jsx
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.eventId;
  
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        
        // Pehle saare events fetch karo
        const allEventsResponse = await fetch('https://qevent-backend.labs.crio.do/events');
        
        if (!allEventsResponse.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const allEvents = await allEventsResponse.json();
        
        // Event ko ID se find karo
        const foundEvent = allEvents.find(e => 
          e.id == eventId || 
          e._id == eventId || 
          e.id?.toString() === eventId
        );
        
        if (foundEvent) {
          setEvent(foundEvent);
        } else {
          throw new Error('Event not found in the events list');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-96">
            <div className="text-lg text-foreground">Loading event...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center">
              <div className="text-destructive text-lg mb-4">Event not found</div>
              <p className="text-muted-foreground">The event you're looking for doesn't exist.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Event Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 border border-gray-200">
          {/* Image - 400x300, Less Margin */}
          <div className="flex justify-center py-4">
            <div className="relative w-[400px] h-[300px]">
              <Image
                src={event.image || event.imgUrl}
                alt={event.name}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="p-8">
            {/* Event Name, Location, Artist - Simple Text Like Screenshot */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold max-sm:text-sm bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 mb-2">
                {event.name}
              </h1>
              <p className="text-xl font-bold max-xl:text-xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 mb-2">{event.location}</p>
              <p className="text-xl font-bold max-xl:text-xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 mb-2">
                {event.artist}
              </p>
            </div>
            
            {/* Tags - With # Hashtag Like Screenshot */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-3">
                <span className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium">
                  #Music
                </span>
                <span className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium">
                  #Jazz
                </span>
                <span className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium">
                  #Live
                </span>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong className="text-gray-900">Autem</strong>, cumque placeat architecto dolorem inventore ex elus recusandae quod perspiciatis voluptatum maxime porto soluta repellat tempore accusamus. Incidunt, iure laborum? Modi odio possimus dicta sapiente neque tempora corporis recusandae nostrum et, ipsam omnis laudantium sequi, hic dolore pariatur ad commodi autem. Consectetur similique quam deleniti, nobis ullam error quisquam ipsam culpa! Quaerat, enim dolor reprehenderit excepturi esse sit aspernatur non odit aliquid sunt nam in debitis consequatur blanditlis hic nostrum odio laudantium eum numquam magni veniam inventore nesciunt minus harum? Tempore dignissimos est impedit velit esse odit tenetur ratione laudantium quia!
              </p>
            </div>
            
            {/* Price and Buy Tickets Button */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-300">
              {/* Price */}
              <p className="text-2xl font-bold max-xl:text-xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 mb-2">
                ${event.price}
              </p>
              
              {/* Buy Tickets Button - Red Background, White Text */}
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-md transition-colors" >
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
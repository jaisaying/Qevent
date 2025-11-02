
// components/EventCard.jsx
'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EventCard({ event }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/events/${event.id}`);
  };

  if (!event) {
    return null;
  }

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-80 cursor-pointer hover:shadow-lg transition-shadow"
    >
      {/* Event Image with Fixed Size */}
      <div className="relative h-48 w-80 overflow-hidden">
        <Image
          src={event.image || event.imgUrl || "/default-image.jpg"}
          alt={event.name || "Event"}
          width={320}
          height={192}
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Event Content - Exact Sequence */}
      <div className="p-6">
        {/* Tags First with Gradient Background */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags?.map((tag, index) => (
            <span 
              key={index}
              className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70 transition-opacity"
            >
              {typeof tag === 'string' ? tag : tag.name}
            </span>
          ))}
        </div>
        
        {/* Date & Time */}
        <p className="text-gray-600 font-medium mb-2">
          {event.date} | {event.time}
        </p>
        
        {/* Location */}
        <p className="text-gray-600 text-sm mb-3">
          {event.location}
        </p>
        
        {/* Event Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {event.name}
        </h3>
        
        {/* Artist */}
        <p className="text-gray-700 font-medium mb-2">
          {event.artist}
        </p>
        
        {/* Price - Sabse Last Me */}
        <p className="text-2xl font-bold text-gray-900">
          ${event.price}
        </p>
      </div>
    </div>
  );
}


// components/EventCard.jsx
// 'use client';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// export default function EventCard({ event }) {
//   const router = useRouter();

//   const handleCardClick = () => {
//     router.push(`/events/${event.id}`);
//   };

//   if (!event) {
//     return null;
//   }

//   return (
//     <div 
//       onClick={handleCardClick}
//       className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden border border-border w-80 cursor-pointer hover:shadow-lg transition-shadow hover-inverse"
//     >
//       {/* Event Image with Fixed Size */}
//       <div className="relative h-48 w-80 overflow-hidden">
//         <Image
//           src={event.image || event.imgUrl || "/default-image.jpg"}
//           alt={event.name || "Event"}
//           width={320}
//           height={192}
//           className="object-cover w-full h-full"
//         />
//       </div>
      
//       {/* Event Content - Exact Sequence */}
//       <div className="p-6">
//         {/* Tags First with Gradient Background */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {event.tags?.map((tag, index) => (
//             <span 
//               key={index}
//               className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-md font-medium hover:opacity-70 transition-opacity"
//             >
//               {typeof tag === 'string' ? tag : tag.name}
//             </span>
//           ))}
//         </div>
        
//         {/* Date & Time */}
//         <p className="text-muted-foreground font-medium mb-2">
//           {event.date} | {event.time}
//         </p>
        
//         {/* Location */}
//         <p className="text-muted-foreground text-sm mb-3">
//           {event.location}
//         </p>
        
//         {/* Event Name */}
//         <h3 className="text-xl font-bold mb-3">
//           {event.name}
//         </h3>
        
//         {/* Artist */}
//         <p className="font-medium mb-2">
//           {event.artist}
//         </p>
        
//         {/* Price - Sabse Last Me */}
//         <p className="text-2xl font-bold text-secondary">
//           ${event.price}
//         </p>
//       </div>
//     </div>
//   );
// }
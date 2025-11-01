
//crio
// "use client";

// import Tag from "./Tag";
// import Link from "next/link";

// const EventCard = ({ eventData }) => {
//   return (
//     <div className="hover-inverse w-[30%] h-fit group transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
//       <Link
//         href={`#`}
//         className="rounded-md text-dark flex-shrink-0 scroll-snap-card p-4"
//       >
//         <div>
//           <img
//             className="w-full  mb-3 group-hover:filter-none shadow-lg m-auto "
//             src={eventData.image}
//             alt="Bonnie image"
//           />
//           <div className="flex gap-2 items-center">
//             {eventData.tags.map((tag) => (
//               <Tag text={tag} key={tag} />
//             ))}
//           </div>
//           <p className="mt-5 mb-10">
//             {new Date(eventData.date).toDateString()} | {eventData.time}
//           </p>
//           <p>{eventData.location}</p>
//           <h2 className="text-2xl font-bold">{eventData.name}</h2>
//           <div className="flex justify-between items-center mt-10">
//             <h3 className="text-2xl">{eventData.artist}</h3>
//             <h3 className="text-2xl">
//               {" "}
//               {eventData.price > 0
//                 ? `$ ${eventData.price.toLocaleString()}`
//                 : "FREE"}
//             </h3>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default EventCard;




// "use client";

// import Tag from "./Tag";
// import Link from "next/link";

// const EventCard = ({ event }) => {
//   // Use event directly from API, NOT eventData
//   return (
//     <div className="hover-inverse w-[30%] h-fit group transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
//       <Link
//         href={`#`}
//         className="rounded-md text-dark flex-shrink-0 scroll-snap-card p-4"
//       >
//         <div>
//           {/* FIX: Use event.imgUrl NOT eventData.image */}
//           <img
//             className="w-full h-48 object-cover mb-3 group-hover:filter-none shadow-lg m-auto rounded-md"
//             src={event.imgUrl || "/images/preview.png"}
//             alt="Event image"
//           />
          
//           {/* Main Category */}
//           <div className="mb-2">
//             <div className="bg-gradient-to-r from-orange-400 to-teal-600 text-white rounded-2xl w-fit px-4 py-2 text-center font-bold text-lg">
//               # {event.category}
//             </div>
//           </div>
          
//           {/* Sub Categories */}
//           <div className="flex gap-2 items-center mb-4 flex-wrap">
//             {event.subCategories?.map((subCat, index) => (
//               <Tag text={subCat} key={index} />
//             ))}
//           </div>

//           {/* Date and Time */}
//           <p className="text-sm font-medium text-gray-600 mb-6">
//             {new Date(event.dateTime).toDateString()} | {new Date(event.dateTime).toLocaleTimeString('en-US', {
//               hour: '2-digit',
//               minute: '2-digit',
//               hour12: true
//             })}
//           </p>

//           {/* Location and Venue */}
//           <div className="mb-4">
//             <p className="text-gray-700">{event.city}</p>
//             <p className="text-gray-700 font-medium">{event.venueName}</p>
//           </div>

//           {/* Event Name */}
//           <h2 className="text-xl font-bold text-gray-900 mb-6">
//             {event.eventName}
//           </h2>

//           {/* Organizer and Price */}
//           <div className="flex justify-between items-center">
//             <h3 className="text-lg font-semibold text-gray-700">
//               {event.organizer || "Event Organizer"}
//             </h3>
//             <h3 className="text-xl font-bold text-gray-900">
//               $ {event.price}
//             </h3>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default EventCard;

// import Image from 'next/image';

// export default function EventCard({ event }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-80">
//       {/* Event Image with Fixed Size */}
//       <div className="relative h-48 w-80 overflow-hidden">
//         <Image
//           src={event.image}
//           alt={event.name}
//           width={320}
//           height={192}
//           className="object-cover w-full h-full"
//         />
//       </div>
      
//       {/* Event Content - Exact Sequence */}
//       <div className="p-6">
//         {/* Tags First with Gradient Background */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {event.tags.map((tag, index) => (
//             <span 
//               key={index}
//               className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-3 py-1 rounded text-sm font-medium hover:opacity-70 transition-opacity"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         {/* Date & Time */}
//         <p className="text-gray-600 font-medium mb-2">
//           {event.date} | {event.time}
//         </p>
        
//         {/* Location */}
//         <p className="text-gray-600 text-sm mb-3">
//           {event.location}
//         </p>
        
//         {/* Event Name */}
//         <h3 className="text-xl font-bold text-gray-900 mb-3">
//           {event.name}
//         </h3>
        
//         {/* Artist */}
//         <p className="text-gray-700 font-medium mb-2">
//           {event.artist}
//         </p>
        
//         {/* Price - Sabse Last Me */}
//         <p className="text-2xl font-bold text-gray-900">
//           ${event.price}
//         </p>
//       </div>
//     </div>
//   );
// }




// import Image from 'next/image';

// export default function EventCard({ event }) {
//   // Safety check - if event is undefined, don't render
//   if (!event) {
//     return null; // or you can return a loading skeleton
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-80">
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
//               className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70 transition-opacity"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         {/* Date & Time */}
//         <p className="text-gray-600 font-medium mb-2">
//           {event.date} | {event.time}
//         </p>
        
//         {/* Location */}
//         <p className="text-gray-600 text-sm mb-3">
//           {event.location}
//         </p>
        
//         {/* Event Name */}
//         <h3 className="text-xl font-bold text-gray-900 mb-3">
//           {event.name}
//         </h3>
        
//         {/* Artist */}
//         <p className="text-gray-700 font-medium mb-2">
//           {event.artist}
//         </p>
        
//         {/* Price - Sabse Last Me */}
//         <p className="text-2xl font-bold text-gray-900">
//           ${event.price}
//         </p>
//       </div>
//     </div>
//   );
// }


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
//       className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-80 cursor-pointer hover:shadow-lg transition-shadow"
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
//               className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70 transition-opacity"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         {/* Date & Time */}
//         <p className="text-gray-600 font-medium mb-2">
//           {event.date} | {event.time}
//         </p>
        
//         {/* Location */}
//         <p className="text-gray-600 text-sm mb-3">
//           {event.location}
//         </p>
        
//         {/* Event Name */}
//         <h3 className="text-xl font-bold text-gray-900 mb-3">
//           {event.name}
//         </h3>
        
//         {/* Artist */}
//         <p className="text-gray-700 font-medium mb-2">
//           {event.artist}
//         </p>
        
//         {/* Price - Sabse Last Me */}
//         <p className="text-2xl font-bold text-gray-900">
//           ${event.price}
//         </p>
//       </div>
//     </div>
//   );
// }



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
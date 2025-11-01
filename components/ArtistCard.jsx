// "use client";

// const ArtistCard = ({ artistData }) => {

//   return (
//     <div className="hover-inverse group w-[20%] min-w-[300px]  h-fit flex text-center justify-center transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
     
//         <div>
//           <img
//             className="w-24 h-24 mb-3 group-hover:filter-none rounded-full shadow-lg m-auto"
//             src={artistData.image}
//             alt={`${artistData.name} image`}
//           />
//           <p>{artistData.location}</p>
//           <h2 className="text-2xl font-bold">{artistData.name}</h2>
//           <p>{artistData.description}</p>
//           <div className="flex justify-between items-center mt-10">
//             <h3 className="text-2xl">{artistData.artist}</h3>
//           </div>
//           <button
//             className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
//           >
//             View Events
//           </button>
//         </div>
//     </div>
//   );
// };

// export default ArtistCard;

// "use client";

// import { useRouter } from 'next/navigation';

// const ArtistCard = ({ artistData }) => {
//   const router = useRouter();

//   const handleArtistClick = () => {
//     // Navigate to events page with artist name as query parameter
//     router.push(`/events?artist=${encodeURIComponent(artistData.name)}`);
//   };

//   return (
//     <div className="hover-inverse group w-[20%] min-w-[300px] h-fit flex text-center justify-center transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
//       <div>
//         <img
//           className="w-24 h-24 mb-3 group-hover:filter-none rounded-full shadow-lg m-auto"
//           src={artistData.image}
//           alt={`${artistData.name} image`}
//         />
//         <p>{artistData.location}</p>
//         <h2 className="text-2xl font-bold">{artistData.name}</h2>
//         <p>{artistData.description}</p>
//         <div className="flex justify-between items-center mt-10">
//           <h3 className="text-2xl">{artistData.artist}</h3>
//         </div>
//         <button
//           onClick={handleArtistClick}
//           className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
//         >
//           View Events
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ArtistCard;

// import Image from "next/image";
// import Link from "next/link";

// const ArtistCard = ({ artistData }) => {
//   // ✅ IMPORTANT: Safety check add karein
//   if (!artistData) {
//     return (
//       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-80 h-96 flex items-center justify-center">
//         <p className="text-gray-500 text-center">Artist data loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 overflow-hidden w-80">
//       {/* Artist Image */}
//       <div className="relative h-48 w-full">
//         <Image
//           src={artistData.image_url || "/images/default-artist.jpg"}
//           alt={artistData.name || "Artist"}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//         />
//       </div>

//       {/* Artist Info */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
//           {artistData.name || "Unknown Artist"}
//         </h3>
        
//         <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
//           {artistData.description || "No description available"}
//         </p>

//         {/* Genre Tags */}
//         {artistData.genre && (
//           <div className="flex flex-wrap gap-2 mb-4">
//             {artistData.genre.split(",").map((genre, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full font-medium"
//               >
//                 {genre.trim()}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Events Count */}
//         <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
//           <span>
//             {artistData.upcoming_events_count || 0} upcoming event
//             {(artistData.upcoming_events_count || 0) !== 1 ? "s" : ""}
//           </span>
          
//           {/* View Details Button */}
//           <Link
//             href={`/artists/${artistData.id || '#'}`}
//             className="px-4 py-2 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistCard;


//my code

// // components/ArtistCard.js
// import Image from 'next/image';

// export default function ArtistCard({ artist }) {
//   return (
//     <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 text-center">
//       {/* Artist Image - Circular */}
//       <div className="flex justify-center mt-6 mb-4">
//         <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-primary">
//           <Image
//             src={artist.image}
//             alt={artist.name}
//             width={128}
//             height={128}
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>
      
//       {/* Artist Content - All Text Centered */}
//       <div className="p-6">
//         {/* Location */}
//         <p className="text-muted-foreground text-sm mb-2">
//           {artist.location}
//         </p>
        
//         {/* Artist Name */}
//         <h3 className="text-xl font-bold text-card-foreground mb-2">
//           {artist.name}
//         </h3>
        
//         {/* Artist Type - API se 'artist' field use karenge */}
//         <p className="text-accent mb-6">
//           {artist.artist}
//         </p>
        
//         {/* View Events Button */}
//         <button className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70 transition-opacity duration-300 w-full">
//           View Events
//         </button>
//       </div>
//     </div>
//   );
// }

// components/ArtistCard.js
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ArtistCard({ artist }) {
  const router = useRouter();

  const handleViewEvents = () => {
    // Redirect to events page with artist name as query parameter
    router.push(`/events?artist=${encodeURIComponent(artist.name)}`);
  };

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 text-center">
      {/* Artist Image - Circular */}
      <div className="flex justify-center mt-6 mb-4">
        <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-primary">
          <Image
            src={artist.image}
            alt={artist.name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
      {/* Artist Content - All Text Centered */}
      <div className="p-6">
        {/* Location */}
        <p className="text-muted-foreground text-sm mb-2">
          {artist.location}
        </p>
        
        {/* Artist Name */}
        <h3 className="text-xl font-bold text-card-foreground mb-2">
          {artist.name}
        </h3>
        
        {/* Artist Type */}
        <p className="text-accent mb-6">
          {artist.artist}
        </p>
        
        {/* View Events Button with onClick */}
        <button 
          onClick={handleViewEvents}
          className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70 transition-opacity duration-300 w-full"
        >
          View Events
        </button>
      </div>
    </div>
  );
}
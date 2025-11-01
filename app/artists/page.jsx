// import ArtistCard from '@/components/ArtistCard';

// async function getArtists() {
//   try {
//     const response = await fetch('https://qevent-backend.labs.crio.do/artists');
//     if (!response.ok) throw new Error('Failed to fetch artists');
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching artists:', error);
//     return [];
//   }
// }

// export default async function ArtistsPage() {
//   const artists = await getArtists();

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Featured Artists</h1>
      
//       {artists.length === 0 ? (
//         <p className="text-gray-500">No artists found.</p>
//       ) : (
//         <div className="flex flex-wrap justify-center gap-6">
//           {artists.map((artist) => (
//             <ArtistCard key={artist.id} artistData={artist} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import ArtistCard from '@/components/ArtistCard';

// async function getArtists() {
//   try {
//     const response = await fetch('https://qevent-backend.labs.crio.do/artists');
//     if (!response.ok) throw new Error('Failed to fetch artists');
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching artists:', error);
//     return [];
//   }
// }

// export default async function ArtistsPage() {
//   const artists = await getArtists();

//   return (
//     <div className="min-h-screen bg-white py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-center text-black mb-8">Featured Artists</h1>
        
//         {artists.length === 0 ? (
//           <p className="text-gray-500 text-center">No artists found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {artists.map((artist) => (
//               <ArtistCard key={artist.id} artist={artist} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// app/artists/page.jsx
'use client';
import { useState, useEffect } from 'react';
import ArtistCard from '@/components/ArtistCard';

export default function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('https://qevent-backend.labs.crio.do/artists');
        
        if (!response.ok) {
          throw new Error('Failed to fetch artists');
        }
        
        const artistsData = await response.json();
        setArtists(artistsData);
      } catch (err) {
        console.error('Error fetching artists:', err);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
      
        {/* <h1 className="text-4xl font-bold text-center text-foreground mb-12">Featured Artists</h1> */}
        <h1 className="text-4xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 text-center mb-12">Featured Artists</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id || artist.name} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}

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
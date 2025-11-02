

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
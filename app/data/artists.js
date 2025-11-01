export default function ArtistCard({ artist }) {
    // Map API names to your desired format
    const nameMapping = {
      "Arijit Singh": "John Doe",
      "Virat Kohli": "Jane Smith", 
      "Sundar Pichai": "Alice Johnson",
      "Neha Kakkar": "Bob Brown"
    };
  
    const locationMapping = {
      "Arijit Singh": "New York, USA",
      "Virat Kohli": "London, UK",
      "Sundar Pichai": "Paris, France", 
      "Neha Kakkar": "Tokyo, Japan"
    };
  
    const descriptionMapping = {
      "Arijit Singh": "Abstract expressionist",
      "Virat Kohli": "Contemporary sculptor",
      "Sundar Pichai": "Impressionist painter",
      "Neha Kakkar": "Digital artist"
    };
  
    const displayName = nameMapping[artist.name] || artist.name;
    const displayLocation = locationMapping[artist.name] || "Unknown Location";
    const displayDescription = descriptionMapping[artist.name] || "Artist";
  
    return (
      <div className="bg-white border border-gray-300 rounded-none overflow-hidden">
        {/* Artist Image */}
        <div className="w-full h-48 bg-gray-200">
          <img
            src="/images/default-artist.jpg"
            alt={displayName}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Artist Info - EXACT FORMAT */}
        <div className="p-4">
          <p className="text-sm text-gray-700 mb-1">{displayLocation}</p>
          <h3 className="text-base font-semibold text-black mb-1">{displayName}</h3>
          <p className="text-sm text-gray-600 mb-3">{displayDescription}</p>
          <button className="w-full bg-black text-white py-2 text-sm font-medium rounded">
            View Events
          </button>
        </div>
      </div>
    );
  }
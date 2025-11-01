// "use client";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function CreateEvent() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (status === "loading") return;
    
//     if (!session) {
//       router.push("/events");
//     }
//   }, [session, status, router]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     return null;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <p className="text-green-600 mb-4">
//           Welcome, {session.user.name}! You can create events.
//         </p>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Event Title</label>
//             <input 
//               type="text" 
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter event title"
//             />
//           </div>
//           <button 
//             type="submit"
//             className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//           >
//             Create Event
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

// export default function CreateEvent() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     date: "",
//     time: "",
//     location: "",
//     artist: "",
//     price: "",
//     tags: ""
//   });
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function CreateEvent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    artist: "",
    price: "",
    tags: ""
  });

  useEffect(() => {
    if (status === "loading") return;
    
    if (!session) {
      router.push("/events");
    }
  }, [session, status, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const eventData = {
        id: uuidv4(),
        name: formData.name,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        artist: formData.artist,
        price: parseInt(formData.price),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99) + 1}.jpg`
      };

      console.log("Sending event data:", eventData);

      // Use local API (working)
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData)
      });

      console.log("Response status:", response.status);

      if (response.status === 201) {
        alert('Event created successfully!');
        router.push('/events');
      } else {
        const errorData = await response.text();
        throw new Error(`Failed to create event: ${errorData}`);
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
        <p className="text-green-600 mb-4">
          Welcome, {session.user.name}! Create your event below.
        </p>
        
        <form onSubmit={handleEventCreate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Event Name *</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter event name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date *</label>
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Time *</label>
              <input 
                type="time" 
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Location *</label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter location"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Artist *</label>
              <input 
                type="text" 
                name="artist"
                value={formData.artist}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter artist name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Price ($) *</label>
              <input 
                type="number" 
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter price"
                min="0"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Tags (comma separated)</label>
            <input 
              type="text" 
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="e.g., Music, Concert, Party"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Creating Event...' : 'Create Event'}
          </button>
        </form>
      </div>
    </div>
  );
}
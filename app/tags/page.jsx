// // cat > app/tags/page.js << 'EOF'
// export default function TagsPage() {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold">Tags Page</h1>
//       <p>All tags will be displayed here</p>
//     </div>
//   );
// }
// // EOF


// app/tags/page.jsx
// 'use client';
// import { useState, useEffect } from 'react';
// import Tag from '@/components/Tag';

// export default function TagsPage() {
//   const [tags, setTags] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTags = async () => {
//       try {
//         const response = await fetch('https://qevent-backend.labs.crio.do/tags');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch tags');
//         }
        
//         const tagsData = await response.json();
//         setTags(tagsData);
//       } catch (err) {
//         console.error('Error fetching tags:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTags();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center items-center min-h-96">
//             <div className="text-lg text-gray-700">Loading tags...</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 text-center mb-12">
//           All Tags
//         </h1>
        
//         <div className="flex flex-wrap justify-center gap-4">
//           {tags.map((tag, index) => (
//             <Tag key={index} text={tag.name || tag} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// app/tags/page.jsx
'use client';
import { useState, useEffect } from 'react';
import Tag from '@/components/Tag';

export default function TagsPage() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://qevent-backend.labs.crio.do/tags');
        
        if (!response.ok) {
          throw new Error('Failed to fetch tags');
        }
        
        const tagsData = await response.json();
        
        // Manually # add karein kyunki API without # de raha hai
        const tagsWithHash = tagsData.map(tag => ({
          ...tag,
          name: `#${tag.name}`
        }));
        
        console.log('Tags with #:', tagsWithHash);
        setTags(tagsWithHash);
      } catch (err) {
        console.error('Error fetching tags:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-96">
            <div className="text-lg text-gray-700">Loading tags...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4 text-center mb-12">
          All Tags
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, index) => (
            <Tag key={tag.id || index} text={tag.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

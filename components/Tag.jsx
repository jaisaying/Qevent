
// components/Tag.jsx
'use client';
import { useRouter } from 'next/navigation';

export default function Tag({ text }) {
  const router = useRouter();

  const handleClick = () => {
    // # ko include karke hi redirect karo
    router.push(`/events?tag=${encodeURIComponent(text)}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-70 transition-opacity duration-300 cursor-pointer"
    >
      {text}
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

function getRandomTilt() {
  const tilts = ['rotate-[-4deg]', 'rotate-[5deg]', 'rotate-[9deg]', 'rotate-[-5deg]'];
  return tilts[Math.floor(Math.random() * tilts.length)];
}

function StickyNote({ id, content, color }) {
  const tiltClass = getRandomTilt();

  return (
    <Link to={`/note/${id}`} className="relative">
      <div
        className={`relative w-40 h-40 md:w-48 md:h-48 p-4 shadow-2xl rounded-lg transform ${tiltClass} transition-transform cursor-pointer ${color} wobble-hover`}
      >
        <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 text-xl">📌</span>
        <div className="flex items-center justify-center h-full">
          <p className="text-sm md:text-base text-gray-800 text-center font-bold">{content}</p>
        </div>
      </div>
    </Link>
  );
}

export default StickyNote;

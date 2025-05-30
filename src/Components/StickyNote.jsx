// StickyNote.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';

function getRandomTilt() {
  const tilts = ['rotate-[-17deg]', 'rotate-[20deg]', 'rotate-[19deg]', 'rotate-[-13deg]'];
  return tilts[Math.floor(Math.random() * tilts.length)];
}

function StickyNote({ id, content, color, path }) {
  const tiltClass = getRandomTilt();
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-40 h-40 md:w-48 md:h-48 p-4 shadow-2xl rounded-lg transform ${tiltClass} transition-transform cursor-pointer ${color} wobble-hover`}
    >
      <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 text-xl">📌</span>
      <div className="flex items-center justify-center h-full">
        <p className="text-sm md:text-base text-black text-center font-bold">{content}</p>
      </div>
    </div>
  );
}

export default StickyNote;

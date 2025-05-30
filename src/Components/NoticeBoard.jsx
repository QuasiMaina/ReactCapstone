// NoticeBoard.jsx
import React from 'react';
import StickyNote from './StickyNote';

const notes = [
  { id: 1, text: 'JOBS', color: 'bg-yellow-400', path: '/noticeboard/jobs' },
  { id: 2, text: 'CREW', color: 'bg-green-400', path: '/noticeboard/crew' },
  { id: 3, text: 'ACTORS', color: 'bg-pink-400', path: '/noticeboard/actors' },
  { id: 4, text: 'RATE CARDS', color: 'bg-blue-500', path: '/noticeboard/ratecards' },
  { id: 5, text: 'EQUIPMENT', color: 'bg-purple-500', path: '/noticeboard/equipment' },
  { id: 6, text: 'PRODUCTION HOUSE', color: 'bg-red-600', path: '/noticeboard/productionhse' },
  { id: 7, text: 'WANNA VENT?', color: 'bg-lime-400', path: '/noticeboard/wannavent' },
];

export default function NoticeBoard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-teal-300 p-4 sm:p-6 md:p-8">
      <div
        className="bg-white border-[10px] sm:border-[16px] md:border-[20px] border-[rgba(14,10,5,0.8)] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-7xl mb-10"
        style={{
          backgroundImage: "url('/corkboard.jpeg')",
          backgroundRepeat: 'repeat',
          backgroundPosition: 'top left',
          backgroundSize: 'auto',
          backgroundAttachment: 'fixed'
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-white">THE NOTICE BOARD</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {notes.map((note) => (
            <StickyNote
              key={note.id}
              id={note.id}
              content={note.text}
              color={note.color}
              path={note.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

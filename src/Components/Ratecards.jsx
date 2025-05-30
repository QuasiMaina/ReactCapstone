import React from 'react';
import { Link } from 'react-router-dom';

const rateCardData = {
  Camera: [
    { role: 'DOP', rate: 'KES 15,000/day' },
    { role: 'Focus Puller', rate: 'KES 8,000/day' },
    { role: '2nd AC', rate: 'KES 5,000/day' },
  ],
  Sound: [
    { role: 'Sound Mixer', rate: 'KES 10,000/day' },
    { role: 'Boom Operator', rate: 'KES 6,000/day' },
  ],
  Art: [
    { role: 'Art Director', rate: 'KES 12,000/day' },
    { role: 'Set Dresser', rate: 'KES 7,000/day' },
  ],
  MakeUp: [
    { role: 'Make-Up Artist', rate: 'KES 9,000/day' },
    { role: 'Hair Stylist', rate: 'KES 8,000/day' },
  ],
  Post: [
    { role: 'Editor', rate: 'KES 11,000/day' },
    { role: 'Colorist', rate: 'KES 10,000/day' },
  ],
  Continuity: [
    { role: 'Continuity Supervisor', rate: 'KES 8,500/day' },
  ],
  Wardrobe: [
    { role: 'Wardrobe Stylist', rate: 'KES 9,000/day' },
    { role: 'Costume Assistant', rate: 'KES 6,500/day' },
  ],
  Location: [
    { role: 'Location Manager', rate: 'KES 10,000/day' },
    { role: 'Location Scout', rate: 'KES 7,000/day' },
  ],
  Writers: [
    { role: 'Screenwriter', rate: 'KES 14,000/day' },
    { role: 'Script Editor', rate: 'KES 9,500/day' },
  ],
  Sparks: [
    { role: 'Gaffer', rate: 'KES 11,000/day' },
    { role: 'Lighting Technician', rate: 'KES 7,000/day' },
  ],
  Grips: [
    { role: 'Key Grip', rate: 'KES 10,000/day' },
    { role: 'Dolly Grip', rate: 'KES 6,500/day' },
  ],
  Producers: [
    { role: 'Line Producer', rate: 'KES 16,000/day' },
    { role: 'Associate Producer', rate: 'KES 13,000/day' },
  ],
  DIT: [
    { role: 'DIT Technician', rate: 'KES 9,500/day' },
  ],
  Unit: [
    { role: 'Unit Manager', rate: 'KES 8,000/day' },
    { role: 'Unit Assistant', rate: 'KES 5,500/day' },
  ],
};

export default function RateCards() {
  return (
    <div
      className="min-h-screen text-white py-8 px-4"
      style={{
        backgroundImage: "url('/corkboard.jpeg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-pink-300 text-black py-2 px-4 rounded shadow inline-block">
          💰 CREW RATE CARDS
        </h2>

        {/* Nav Bar */}
         <nav className="sticky top-0 z-50 mb-6 flex flex-wrap justify-center gap-4 text-sm sm:text py-4">
          <Link to="/noticeboard" className="px-3 py-2 bg-yellow-300 rounded shadow hover:bg-yellow-500">
            🏠 Noticeboard
          </Link>
          <Link to="/noticeboard/jobs" className="px-3 py-2 bg-teal-300 rounded shadow hover:bg-teal-500">
            🛠️ Jobs
          </Link>
          <Link to="/noticeboard/crew" className="px-3 py-2 bg-green-300 rounded shadow hover:bg-green-500">
            🎬 Crew
          </Link>
          <Link to="/noticeboard/actors" className="px-3 py-2 bg-pink-400 rounded shadow hover:bg-pink-500">
          🎭 Actors
        </Link>

          <Link to="/noticeboard/equipment" className="px-3 py-2 bg-purple-300 rounded shadow hover:bg-purple-500">
            🎥 Equipment
          </Link>
          <Link to="/noticeboard/productionhse" className="px-3 py-2 bg-red-400 rounded shadow hover:bg-red-500">
            🏢 Production House
          </Link>
          <Link to="/noticeboard/wannavent" className="px-3 py-2 bg-lime-300 rounded shadow hover:bg-lime-500">
            💬 Wanna Vent?
          </Link>
          <Link to="/signup" className="px-3 py-2 bg-indigo-300 rounded shadow hover:bg-indigo-500">
            📝 Sign Up
          </Link>
          <Link to="/login" className="px-3 py-2 bg-gray-300 rounded shadow hover:bg-gray-500">
            🔐 Login
          </Link>
        </nav>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(rateCardData).map(([department, roles]) => (
            <div key={department} className="bg-white text-black p-6 rounded-xl shadow-md border border-black">
              <h3 className="text-xl font-bold mb-4 border-b border-black pb-2">{department} Department</h3>
              <ul className="space-y-2">
                {roles.map(({ role, rate }) => (
                  <li key={role} className="flex justify-between border-b border-gray-300 pb-1">
                    <span>{role}</span>
                    <span className="font-semibold text-green-600">{rate}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

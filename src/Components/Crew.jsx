import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const sampleCrew = [
  {
    id: 1,
    name: 'Jordan Blake',
    role: ['DOP', 'DIT'],
    location: 'Nairobi',
    availability: 'Available',
    skills: ['Cinematography', 'Lighting', 'Color Grading'],
    rating: 4.8,
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 2,
    name: 'Nia Mukami',
    role: ['MAKE-UP', 'HAIR STYLIST'],
    location: 'Mombasa',
    availability: 'Available',
    skills: ['Makeup Design', 'Hair Styling', 'SFX Makeup'],
    rating: 4.7,
    photo:  'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 3,
    name: 'Ali Omari',
    role: ['SOUND', 'EDITORS'],
    location: 'Kisumu',
    availability: 'Busy',
    skills: ['Sound Mixing', 'ADR', 'Foley'],
    rating: 4.6,
    photo: 'https://randomuser.me/api/portraits/men/8.jpg'
  },
  {
    id: 4,
    name: 'Lena Wanjiku',
    role: ['Script Supervisor', 'WRITERS'],
    location: 'Nakuru',
    availability: 'Available',
    skills: ['Script Supervision', 'Creative Writing'],
    rating: 4.5,
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',

  },
  {
    id: 5,
    name: 'David Otieno',
    role: ['2ND AC', 'FOCUS PULLER'],
    location: 'Nairobi',
    availability: 'Available',
    skills: ['Camera Focus', 'Clapperboard'],
    rating: 4.4,
    photo: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    id: 6,
    name: 'Aisha Kilonzo',
    role: ['ART', 'WARDROBE'],
    location: 'Thika',
    availability: 'Busy',
    skills: ['Set Design', 'Costume Coordination'],
    rating: 4.3,
    photo: 'https://randomuser.me/api/portraits/women/5.jpg'
  },
  {
    id: 7,
    name: 'Brian Mwangi',
    role: ['SFX', 'SPARKS'],
    location: 'Machakos',
    availability: 'Available',
    skills: ['Practical FX', 'Lighting Rigging'],
    rating: 4.2,
    photo: 'https://randomuser.me/api/portraits/men/6.jpg'
  },
  {
    id: 8,
    name: 'Clara Njeri',
    role: ['LOCATION', 'UNIT'],
    location: 'Naivasha',
    availability: 'Available',
    skills: ['Location Scouting', 'Unit Management'],
    rating: 4.1,
    photo: 'https://randomuser.me/api/portraits/women/7.jpg'
  },
  {
    id: 9,
    name: 'Eric Kimani',
    role: ['PRODUCERS', 'WRITERS'],
    location: 'Nairobi',
    availability: 'Busy',
    skills: ['Budgeting', 'Script Development'],
    rating: 4.0,
    photo:  'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    id: 10,
    name: 'Wendy Mugo',
    role: ['GRIPS', 'DIT'],
    location: 'Eldoret',
    availability: 'Available',
    skills: ['Camera Rigging', 'Data Handling'],
    rating: 3.9,
    photo: 'https://randomuser.me/api/portraits/women/9.jpg'
  },
  {
    id: 11,
    name: 'George Atieno',
    role: ['DOP', 'FOCUS PULLER'],
    location: 'Meru',
    availability: 'Busy',
    skills: ['Camera Operation', 'Lens Management'],
    rating: 3.8,
    photo: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    id: 12,
    name: 'Shiku Mburu',
    role: ['MAKE-UP', 'SFX'],
    location: 'Nakuru',
    availability: 'Available',
    skills: ['Makeup FX', 'Wound Simulation'],
    rating: 3.7,
    photo: 'https://randomuser.me/api/portraits/women/11.jpg'
  },
  {
    id: 13,
    name: 'Maureen Mwalimu',
    role: ['EDITORS', 'UNIT'],
    location: 'Kakamega',
    availability: 'Busy',
    skills: ['Video Editing', 'Production Logistics'],
    rating: 3.9,
    photo: 'https://randomuser.me/api/portraits/women/13.jpg'
  }
];

export default function Crew() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const rolesRef = useRef(null);
  const containerRef = useRef(null);

  const filteredCrew = sampleCrew
    .filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || member.role.includes(filter);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => b.rating - a.rating);

  const crewRoles = [
    'All', 'DOP', 'Script Supervisor', 'HAIR STYLIST', 'MAKE-UP', 'FOCUS PULLER', '2ND AC',
    'ART', 'SFX', 'WARDROBE', 'LOCATION', 'WRITERS', 'SOUND', 'SPARKS', 'GRIPS', 'PRODUCERS', 'EDITORS', 'DIT', 'UNIT'
  ];

  const scrollRoles = (direction) => {
    if (rolesRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      rolesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const resizeObserver = new ResizeObserver(() => {
        if (container.scrollWidth > container.clientWidth) {
          container.style.overflowX = 'auto';
        } else {
          container.style.overflowX = 'hidden';
        }
      });
      resizeObserver.observe(container);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        style={{
          backgroundImage: "url('/corkboard.jpeg')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundAttachment: 'fixed',
          padding: '2rem'
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-pink-300 text-black py-2 px-4 rounded shadow inline-block">🎬 CREW BOARD</h2>

         <nav className="sticky top-0 z-50 mb-6 flex flex-wrap justify-center gap-4 text-sm sm:text py-4">
          <Link to="/noticeboard" className="px-3 py-2 bg-yellow-300 rounded shadow hover:bg-yellow-500">
            🏠 Noticeboard
          </Link>
          <Link to="/noticeboard/jobs" className="px-3 py-2 bg-teal-300 rounded shadow hover:bg-teal-500">
            🛠️ Jobs
          </Link>
          
          <Link to="/noticeboard/actors" className="px-3 py-2 bg-pink-400 rounded shadow hover:bg-pink-500">
          🎭 Actors
        </Link>
        
          <Link to="/noticeboard/ratecards" className="px-3 py-2 bg-blue-300 rounded shadow hover:bg-blue-500">
            💰 Ratecards
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

        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search crew..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 bg-amber-200 rounded shadow-md w-full max-w-md text-black"
          />
        </div>

        <div className="relative mb-8">
          
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide px-10"
          >
            <div ref={rolesRef} className="flex gap-3 whitespace-nowrap py-2 animate-scroll-horizontal">
              {crewRoles.map(role => (
                <button
                  key={role}
                  onClick={() => setFilter(role)}
                  className={`px-3 py-2 rounded-full font-semibold shadow-md transition duration-200 hover:bg-green-700 hover:text-white ${
                    filter === role ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCrew.map(member => (
            <div
              key={member.id}
              className="bg-white bg-opacity-90 text-black p-4 rounded-xl shadow border border-black transition-transform hover:scale-105"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-48 object-cover rounded-md mb-3 border-2 border-black"
              />
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-sm text-gray-700">🎬 {member.role.join(', ')}</p>
              <p className="text-sm text-gray-700">📍 {member.location}</p>
              <p className="text-sm text-gray-700 flex items-center gap-2">
                ⏰
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: member.availability === 'Available' ? 'green' : 'gray',
                    display: 'inline-block'
                  }}
                />
                {member.availability}
              </p>
              <p className="text-sm mt-2">Skills: {member.skills.join(', ')}</p>
              <p className="text-sm mt-2">⭐ Rating: {member.rating.toFixed(1)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            50% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
          }

          .animate-scroll-horizontal {
            animation: scroll-horizontal 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

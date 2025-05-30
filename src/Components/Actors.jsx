import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sampleActors = [
  {
    id: 1,
    name: 'Alice Wanjiku',
    category: 'Lead',
    location: 'Nairobi',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/women/21.jpg',
    skills: ['Drama', 'Swahili', 'Dancer']
  },
  {
    id: 2,
    name: 'Brian Otieno',
    category: 'Supporting',
    location: 'Mombasa',
    availability: 'Unavailable',
    photo: 'https://randomuser.me/api/portraits/men/34.jpg',
    skills: ['Comedy', 'English']
  },
  {
    id: 3,
    name: 'Cynthia Mwikali',
    category: 'Lead',
    location: 'Nakuru',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    skills: ['Monologue', 'Kamba', 'Singing']
  },
  {
    id: 4,
    name: 'Daniel Kimani',
    category: 'Extras',
    location: 'Kisumu',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    skills: ['Crowd Acting', 'Walking Roles']
  },
  {
    id: 5,
    name: 'Evelyne Achieng',
    category: 'Supporting',
    location: 'Nairobi',
    availability: 'Unavailable',
    photo: 'https://randomuser.me/api/portraits/women/29.jpg',
    skills: ['Swahili Drama', 'Dance']
  },
  {
    id: 6,
    name: 'Frankline Omondi',
    category: 'Lead',
    location: 'Eldoret',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/men/12.jpg',
    skills: ['Action', 'Fight Choreography']
  },
  {
    id: 7,
    name: 'Maureen Njeri',
    category: 'Extras',
    location: 'Thika',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/women/63.jpg',
    skills: ['Background Movement', 'Fashion Walk']
  },
  {
    id: 8,
    name: 'Henry Mwangi',
    category: 'Supporting',
    location: 'Nairobi',
    availability: 'Unavailable',
    photo: 'https://randomuser.me/api/portraits/men/70.jpg',
    skills: ['English Drama', 'Satire']
  },
  {
    id: 9,
    name: 'Irene Wambui',
    category: 'Lead',
    location: 'Machakos',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    skills: ['Stage Acting', 'Improvisation']
  },
  {
    id: 10,
    name: 'James Kariuki',
    category: 'Lead',
    location: 'Naivasha',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    skills: ['Romantic Lead', 'English', 'Directing']
  },
  {
    id: 11,
    name: 'Khadija Yusuf',
    category: 'Supporting',
    location: 'Nairobi',
    availability: 'Unavailable',
    photo: 'https://randomuser.me/api/portraits/women/56.jpg',
    skills: ['Swahili Drama', 'Voice Acting']
  },
  {
    id: 12,
    name: 'Leonard Mutiso',
    category: 'Extras',
    location: 'Kitale',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/men/67.jpg',
    skills: ['Crowd Scenes', 'Dancing']
  },
  {
    id: 13,
    name: 'Miriam Njoki',
    category: 'Lead',
    location: 'Kisii',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/women/32.jpg',
    skills: ['Theatre', 'Singing', 'English']
  },
  {
    id: 14,
    name: 'Nelson Wekesa',
    category: 'Supporting',
    location: 'Busia',
    availability: 'Unavailable',
    photo: 'https://randomuser.me/api/portraits/men/84.jpg',
    skills: ['Narration', 'Monologue', 'Kiswahili']
  },
  {
    id: 15,
    name: 'Olive Auma',
    category: 'Extras',
    location: 'Homabay',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/women/75.jpg',
    skills: ['Fashion Runway', 'Dance']
  },
  {
    id: 16,
    name: 'Peter Mugo',
    category: 'Lead',
    location: 'Nanyuki',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/men/38.jpg',
    skills: ['Stage Combat', 'English', 'Directing']
  },
  {
    id: 17,
    name: 'Queenie Atieno',
    category: 'Supporting',
    location: 'Kakamega',
    availability: 'Available',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    skills: ['Swahili', 'Improvisation']
  }
];

export default function Actors() {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterSkill, setFilterSkill] = useState('All');
  const [selectedActor, setSelectedActor] = useState(null);

  const locations = ['All', ...new Set(sampleActors.map(a => a.location))];
  const skills = ['All', ...new Set(sampleActors.flatMap(a => a.skills))];

  const filteredActors = sampleActors.filter(actor => {
    const matchesSearch = actor.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filterCategory === 'All' || actor.category === filterCategory;
    const matchesLocation = filterLocation === 'All' || actor.location === filterLocation;
    const matchesSkill = filterSkill === 'All' || actor.skills.includes(filterSkill);
    return matchesSearch && matchesCategory && matchesLocation && matchesSkill;
  });

  const filmFrameStyle = {
    position: 'relative',
    padding: '20px',
    border: '12px solid black',
    backgroundColor: '#000'
  };

  const frameStripeStyle = {
    position: 'absolute',
    width: '100%',
    height: '20px',
    left: 0,
    backgroundImage: 'repeating-linear-gradient(to right, black 0 50px, white 65px 100px)',
    zIndex: 10
  };

  return (
    <div style={filmFrameStyle}>
      <div style={{ ...frameStripeStyle, top: 0 }} />
      <div style={filmFrameStyle}></div>

      <div
        className="p-4 md:p-8"
        style={{
          backgroundImage: "url('/corkboard.jpeg')",
          backgroundRepeat: 'repeat',
          backgroundPosition: 'top left',
          backgroundSize: 'auto',
          backgroundAttachment: 'fixed',
          minHeight: '100vh'
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            backgroundColor: '#f9a8d4',
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
          }}
        >
          🎭 ACTORS BOARD
        </h2>

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


        <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search actors..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 bg-amber-200 rounded shadow-md w-full max-w-md"
          />
          <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)} className="px-3 py-2 rounded bg-white shadow">
            {locations.map(loc => <option key={loc}>{loc}</option>)}
          </select>
          <select value={filterSkill} onChange={e => setFilterSkill(e.target.value)} className="px-3 py-2 rounded bg-white shadow">
            {skills.map(skill => <option key={skill}>{skill}</option>)}
          </select>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {['All', 'Lead', 'Supporting', 'Extras'].map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-semibold shadow-md transition duration-200 hover:bg-blue-400 hover:text-white ${
                filterCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setFilterCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filteredActors.map(actor => (
            <div
              key={actor.id}
              onClick={() => setSelectedActor(actor)}
              className="cursor-pointer bg-blue-200 bg-opacity-90 p-4 rounded-xl shadow border border-black transition-transform hover:scale-105"
            >
              <img
                src={actor.photo}
                alt={actor.name}
                className="w-full h-48 object-cover rounded-md mb-3 border-2 border-black"
              />
              <h4 className="text-xl font-bold">{actor.name}</h4>
              <p className="text-sm text-gray-700">🎭 {actor.category}</p>
              <p className="text-sm text-gray-700">📍 {actor.location}</p>
              <p className="text-sm text-gray-700 flex items-center gap-2">
                ⏰
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: actor.availability === 'Available' ? 'green' : 'gray',
                    display: 'inline-block'
                  }}
                />
                {actor.availability}
              </p>
              <p className="text-sm mt-2">Skills: {actor.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...frameStripeStyle, bottom: 0 }} />

      {/* Modal */}
      {selectedActor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full shadow-xl relative">
            <button
              onClick={() => setSelectedActor(null)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-700"
            >
              ✖
            </button>
            <img src={selectedActor.photo} alt={selectedActor.name} className="w-full h-56 object-cover rounded mb-4" />
            <h3 className="text-2xl font-bold">{selectedActor.name}</h3>
            <p className="text-gray-600">🎭 {selectedActor.category}</p>
            <p className="text-gray-600">📍 {selectedActor.location}</p>
            <p className="text-gray-600">⏰ {selectedActor.availability}</p>
            <p className="mt-2">🛠 Skills: {selectedActor.skills.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const productionHouses = [
  {
    name: 'CineWorks Studios',
    overview: {
      location: 'Nairobi, Kenya',
      established: '2012',
      mission: 'To empower storytelling through collaborative and creative film production.',
    },
    projects: [
      '“Savanna Skies” – Drama Series, shooting in Maasai Mara',
      '“City Beats” – Urban docuseries, currently in post-production',
    ],
    contact: {
      email: 'contact@cineworks.co.ke',
      phone: '+254 700 123456',
      instagram: '@cineworks.ke',
    },
  
  },
  {
    name: 'Sunbeam Pictures',
    overview: {
      location: 'Mombasa, Kenya',
      established: '2015',
      mission: 'Delivering cinematic brilliance from the coast to the world.',
    },
    projects: [
      '“Ocean’s Voice” – Marine life documentary, pre-production',
      '“Shadows of the Past” – Historical short film, editing stage',
    ],
    contact: {
      email: 'hello@sunbeampictures.com',
      phone: '+254 711 654321',
      instagram: '@sunbeam.pictures',
    },
   
  },
  {
    name: 'Desert Frame Studios',
    overview: {
      location: 'Isiolo, Kenya',
      established: '2018',
      mission: 'Crafting visual stories that transcend borders.',
    },
    projects: [
      '“Sand Chronicles” – Feature film, scripting phase',
      '“Nomad’s Rhythm” – Musical travelogue, filming complete',
    ],
    contact: {
      email: 'info@desertframe.com',
      phone: '+254 722 888999',
      instagram: '@desertframe.ke',
    },
    
  },
  {
    name: 'Savannah Stories',
    overview: {
      location: 'Nakuru, Kenya',
      established: '2016',
      mission: 'Fostering African narratives for global screens.',
    },
    projects: [
      '“Twilight in the Hills” – Romance film, production stage',
      '“Echoes of the Rift” – Short film series, in development',
    ],
    contact: {
      email: 'connect@savannahstories.co.ke',
      phone: '+254 733 456789',
      instagram: '@savannahstories',
    },
    
  },
  {
    name: 'Urban Reel',
    overview: {
      location: 'Kisumu, Kenya',
      established: '2020',
      mission: 'Telling vibrant urban tales with a cinematic flair.',
    },
    projects: [
      '“Lakeside Blues” – Music docuseries, in post-production',
      '“Downtown Diaries” – Web series, streaming soon',
    ],
    contact: {
      email: 'team@urbanreel.africa',
      phone: '+254 745 321654',
      instagram: '@urbanreelfilms',
    },
    
  },
  {
    name: 'Echo Film Co.',
    overview: {
      location: 'Eldoret, Kenya',
      established: '2017',
      mission: 'Echoing untold stories through visual expression.',
    },
    projects: [
      '“Resonance” – Psychological thriller, post-production',
      '“Village Scrolls” – Educational series, airing soon',
    ],
    contact: {
      email: 'hello@echofilmco.com',
      phone: '+254 712 987654',
      instagram: '@echo.film.co',
    },
    
  },
];

export default function ProductionHouse() {
  return (
    <div
      className="min-h-screen text-white py-8 px-4"
      style={{
        backgroundImage: "url('/corkboard.jpeg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-yellow-300 text-black py-2 px-4 rounded shadow inline-block">
          🏢 PRODUCTION HOUSES
        </h2>

        {/* Navigation Bar */}
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


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productionHouses.map((house, index) => (
            <div
              key={index}
              className="relative group bg-blue-300 text-black p-6 rounded-xl shadow-md border border-black cursor-pointer transition-transform hover:scale-105 overflow-hidden"
              style={{ minHeight: '220px' }}
            >
              <div className="flex items-center justify-center mb-2">
                {house.logo && <img src={house.logo} alt={`${house.name} logo`} className="w-10 h-10 mr-2" />}
                <h3 className="text-xl font-bold text-center">📽️ {house.name}</h3>
              </div>
              <div className="text-sm">
                <p><strong>📍 Location:</strong> {house.overview.location}</p>
                <p><strong>📅 Since:</strong> {house.overview.established}</p>
                <p><strong>🎯 Mission:</strong> {house.overview.mission}</p>
              </div>

              <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 rounded-xl overflow-y-auto z-10">
                <h4 className="font-bold text-lg mb-2">📽️ Projects</h4>
                <ul className="list-disc pl-5 mb-4">
                  {house.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
                <h4 className="font-bold text-lg mb-2">📞 Contact</h4>
                <p>Email: {house.contact.email}</p>
                <p>Phone: {house.contact.phone}</p>
                <p>Instagram: {house.contact.instagram}</p>
                <Link to={house.link} className="inline-block mt-4 text-blue-700 underline hover:text-blue-900">
                  View Full Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// All actors and crew members
const allActors = ['Alice Mwangi', 'John Otieno', 'Sarah Kimani', 'Peter Kamau'];
const allCrew = ['David Njoroge (DP)', 'Lilian Achieng (Sound)', 'James Kariuki (Gaffer)', 'Miriam Wanja (Editor)'];

// Randomize crew assignment for ongoing jobs without repeats
function assignRandomCrew(jobs, actors, crew) {
  const assigned = new Set();
  const actorPool = [...actors];
  const crewPool = [...crew];

  return jobs.map(job => {
    if (job.status !== 'Ongoing') return job;

    const crewCount = 2;
    const randomActors = [];
    const randomCrew = [];

    while (randomActors.length < crewCount && actorPool.length) {
      const index = Math.floor(Math.random() * actorPool.length);
      const actor = actorPool.splice(index, 1)[0];
      if (!assigned.has(actor)) {
        assigned.add(actor);
        randomActors.push(actor);
      }
    }

    while (randomCrew.length < crewCount && crewPool.length) {
      const index = Math.floor(Math.random() * crewPool.length);
      const crewMember = crewPool.splice(index, 1)[0];
      if (!assigned.has(crewMember)) {
        assigned.add(crewMember);
        randomCrew.push(crewMember);
      }
    }

    return { ...job, actors: randomActors, crew: randomCrew };
  });
}

const sampleJobs = assignRandomCrew([
  {
    id: 1,
    title: 'Feature Film: Shadows of the Sun',
    type: 'Long-term',
    status: 'Ongoing',
    equipment: ['RED Komodo', 'Boom Mic Kit'],
    startDate: '2025-05-01',
    endDate: '2025-08-15',
  },
  {
    id: 2,
    title: 'TV Commercial: Spark Water',
    type: 'Short-term',
    status: 'Upcoming',
    applyLink: '/apply/2',
    deadline: '2025-06-05'
  },
  {
    id: 3,
    title: 'Documentary: Footsteps in Time',
    type: 'Long-term',
    status: 'Upcoming',
    applyLink: '/apply/3',
    deadline: '2025-06-20'
  },
  {
    id: 4,
    title: 'Music Video: Neon Dreams',
    type: 'Short-term',
    status: 'Ongoing',
    equipment: ['Blackmagic Pocket 6K', 'Lighting Kit'],
    startDate: '2025-05-10',
    endDate: '2025-05-25'
  },
  {
    id: 5,
    title: 'Series: Damu Nyeusi',
    type: 'Long-term',
    status: 'Upcoming',
    equipment: ['ARRI Alexa mini LF', 'Boom Mic Kit', 'Arri lights and Asteras'],
    startDate: '2025-05-09',
    endDate: '2025-09-15'
  },
  {
    id: 6,
    title: 'Series: MTV SHUGA',
    type: 'Long-term',
    status: 'Upcoming',
    applyLink: '/apply/6',
    deadline: '2025-06-30'
  },
  {
    id: 7,
    title: 'Music Video: Sol Generation',
    type: 'Short-term',
    status: 'Upcoming',
    applyLink: '/apply/7',
    deadline: '2025-07-16'
  },
  {
    id: 8,
    title: 'Documentary: Who is a Maureen?',
    type: 'Short-term',
    status: 'Ongoing',
    equipment: ['Blackmagic Pocket 6K', 'Lighting Kit'],
    startDate: '2025-05-10',
    endDate: '2025-05-25'
  },
  {
    id: 9,
    title: 'Feature: A man of the People',
    type: 'Short-term',
    status: 'Upcoming',
    equipment: ['RED Raptor', 'Lighting Kit'],
    startDate: '2025-05-23',
    endDate: '2026-05-31'
  },
  {
    id: 10,
    title: 'Documentary: Golden Kenya',
    type: 'Short-term',
    status: 'Upcoming',
    applyLink: '/apply/10',
    deadline: '2025-06-16'
  },
], allActors, allCrew);

export default function Jobs() {
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = sampleJobs.filter((job) => {
    if (filter === 'All') return true;
    return job.type === filter;
  });

  const ongoingJobs = filteredJobs.filter(job => job.status === 'Ongoing');
  const upcomingJobs = filteredJobs.filter(job => job.status === 'Upcoming');

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can extend with real form handling here
    alert(`Application submitted for job: ${selectedJob.title}`);
    handleCloseModal();
  };

  return (
    <div className="p-4 md:p-8 bg-orange-700 min-h-screen"
      style={{
        backgroundImage: "url('/corkboard.jpeg')",
        backgroundRepeat: 'repeat',
        backgroundPosition: 'top left',
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed'
      }}
    >
       <nav className="sticky top-0 z-50 mb-6 flex flex-wrap justify-center gap-4 text-sm sm:text py-4">
        <Link to="/noticeboard" className="px-3 py-2 bg-yellow-300 rounded shadow hover:bg-yellow-500">
          🏠 Noticeboard
        </Link>
        
        <Link to="/noticeboard/crew" className="px-3 py-2 bg-green-300 rounded shadow hover:bg-green-500">
          🎬 Crew
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

      <h2 className="text-3xl font-bold text-center mb-6">🎬 JOBS BOARD</h2>

      <div className="flex justify-center gap-4 mb-8">
        {['All', 'Short-term', 'Long-term'].map(type => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition-colors duration-300 hover:bg-teal-400 ${
              filter === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Ongoing Jobs Section */}
        <section>
          <h3 className="text-2xl font-bold text-black mb-4">🛠️ ONGOING JOBS</h3>
          <div className="grid gap-4">
            {ongoingJobs.length === 0 && <p className="text-white">No ongoing jobs available.</p>}
            {ongoingJobs.map(job => (
              <div key={job.id} className="bg-rose-400 p-5 rounded-xl shadow-md border border-black">
                <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                <p className="text-sm text-white mb-1">Type: {job.type}</p>
                <p className="text-sm text-white mb-1">Start: {job.startDate}</p>
                <p className="text-sm text-white mb-1">End: {job.endDate}</p>

                <p className="text-sm text-white mb-1">
                  Actors:{' '}
                  {job.actors?.map((actor, index) => {
                    const nameSlug = actor.trim().replace(/\s+/g, '-');
                    return (
                      <span key={index}>
                        <Link to={`/actors/${nameSlug}`} className="underline hover:text-yellow-200">
                          {actor}
                        </Link>
                        {index < job.actors.length - 1 && ', '}
                      </span>
                    );
                  })}
                </p>

                <p className="text-sm text-white mb-1">
                  Crew:{' '}
                  {job.crew?.map((member, index) => {
                    const [nameOnly] = member.split(' (');
                    const nameSlug = nameOnly.trim().replace(/\s+/g, '-');
                    return (
                      <span key={index}>
                        <Link to={`/crew/${nameSlug}`} className="underline hover:text-yellow-200">
                          {member}
                        </Link>
                        {index < job.crew.length - 1 && ', '}
                      </span>
                    );
                  })}
                </p>

                <p className="text-sm text-white">Equipment: {job.equipment?.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Jobs Section */}
        <section>
          <h3 className="text-2xl font-bold mb-4">📅 UPCOMING JOBS</h3>
          <div className="grid gap-4">
            {upcomingJobs.length === 0 && <p className="text-gray-700">No upcoming jobs available.</p>}
            {upcomingJobs.map(job => (
              <div key={job.id} className="bg-green-300 p-4 rounded-xl shadow-md border border-black">
                <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                <p className="text-sm text-gray-700 mb-1">Type: {job.type}</p>
                <p className="text-sm text-gray-700 mb-1">Deadline to Apply: {job.deadline}</p>
                <button
                  onClick={() => handleApplyClick(job)}
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for Application Form */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('/corkboard.jpeg')",
            backgroundRepeat: 'repeat',
            backgroundPosition: 'top left',
            backgroundSize: 'auto',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Apply for {selectedJob?.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full border border-gray-400 rounded px-3 py-2"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-400 rounded px-3 py-2"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-gray-400 rounded px-3 py-2"
                  placeholder="+254 700 000 000"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="portfolio">Portfolio or Showreel Link</label>
                <input
                  id="portfolio"
                  type="url"
                  name="portfolio"
                  placeholder="http://"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full border border-gray-400 rounded px-3 py-2"
                  placeholder="Anything else you'd like us to know?"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

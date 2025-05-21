import React, { useState } from 'react';

const sampleJobs = [
  {
    id: 1,
    title: 'Feature Film: Shadows of the Sun',
    type: 'Long-term',
    status: 'Ongoing',
    crew: ['Alice (Director)', 'Bob (Cinematographer)'],
    equipment: ['RED Komodo', 'Boom Mic Kit'],
    startDate: '2025-05-01',
    endDate: '2025-08-15'
  },
  {
    id: 2,
    title: 'TV Commercial: Spark Water',
    type: 'Short-term',
    status: 'Upcoming',
    applyLink: '#apply1',
    deadline: '2025-06-05'
  },
  {
    id: 3,
    title: 'Documentary: Footsteps in Time',
    type: 'Long-term',
    status: 'Upcoming',
    applyLink: '#apply2',
    deadline: '2025-06-20'
  },
  {
    id: 4,
    title: 'Music Video: Neon Dreams',
    type: 'Short-term',
    status: 'Ongoing',
    crew: ['Zara (Director)', 'Tim (Editor)'],
    equipment: ['Blackmagic Pocket 6K', 'Lighting Kit'],
    startDate: '2025-05-10',
    endDate: '2025-05-25'
  }
];

export default function Jobs() {
  const [filter, setFilter] = useState('All');

  const filteredJobs = sampleJobs.filter((job) => {
    if (filter === 'All') return true;
    return job.type === filter;
  });

  const ongoingJobs = filteredJobs.filter(job => job.status === 'Ongoing');
  const upcomingJobs = filteredJobs.filter(job => job.status === 'Upcoming');

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
      <h2 className="text-3xl font-bold text-center mb-6">🎬 JOBS BOARD</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {['All', 'Short-term', 'Long-term'].map(type => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition-colors duration-300 ${
              filter === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Ongoing Jobs */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">🛠️ ONGOING JOBS</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {ongoingJobs.map(job => (
            <div key={job.id} className="bg-rose-400 p-5 rounded-xl shadow-md border border-black 900">
              <h4 className="text-xl font-bold mb-1">{job.title}</h4>
              <p className="text-sm text-white mb-1">Type: {job.type}</p>
              <p className="text-sm text-white mb-1">Start: {job.startDate}</p>
              <p className="text-sm text-white mb-1">End: {job.endDate}</p>
              <p className="text-sm text-white mb-1">Crew: {job.crew.join(', ')}</p>
              <p className="text-sm text-white">Equipment: {job.equipment.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Jobs */}
      <section>
        <h3 className="text-2xl font-bold mb-4">📅 UPCOMING JOBS</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingJobs.map(job => (
            <div key={job.id} className="bg-green-300 p-4 rounded-xl shadow-md border border-black">
              <h4 className="text-xl font-bold mb-1">{job.title}</h4>
              <p className="text-sm text-gray-700 mb-1">Type: {job.type}</p>
              <p className="text-sm text-gray-700 mb-1">Deadline to Apply: {job.deadline}</p>
              <a
                href={job.applyLink}
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

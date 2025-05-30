import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const actors = ['Alice Mwangi', 'John Otieno', 'Grace Wambui'];
const crewMembers = ['David Njoroge (DP)', 'Lilian Achieng (Sound)', 'Mark Otieno (Editor)'];
const rentalCompanies = ['FilmGear Rentals', 'ProEquip Rentals', 'Light & Sound Hire'];
const productionHouses = ['CineWorks Studios', 'Sunbeam Pictures', 'Desert Frame Studios'];

const categories = [
  { label: 'Actor', data: actors },
  { label: 'Crew Member', data: crewMembers },
  { label: 'Rental Company', data: rentalCompanies },
  { label: 'Production House', data: productionHouses },
];

export default function WannaVent() {
  const [category, setCategory] = useState(categories[0].label);
  const [entity, setEntity] = useState(categories[0].data[0]);
  const [message, setMessage] = useState('');
  const [ventList, setVentList] = useState([]);
  const [error, setError] = useState('');

  const generateId = () => Math.random().toString(36).slice(2);

  const handleCategoryChange = e => {
    const selected = e.target.value;
    setCategory(selected);
    const found = categories.find(c => c.label === selected);
    setEntity(found.data[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Please enter your message.');
      return;
    }
    setError('');

    const newVent = {
      id: generateId(),
      category,
      entity,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      votes: 0,
    };
    setVentList([newVent, ...ventList]);
    setMessage('');
  };

  const vote = (id, delta) => {
    setVentList(current =>
      current.map(vent =>
        vent.id === id ? { ...vent, votes: vent.votes + delta } : vent
      )
    );
  };

  return (
    <div
      className="min-h-screen text-black py-8 px-4"
      style={{
        backgroundImage: "url('/corkboard.jpeg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl mx-auto">
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
        
          <Link to="/noticeboard/ratecards" className="px-3 py-2 bg-blue-300 rounded shadow hover:bg-blue-500">
            💰 Ratecards
          </Link>
          <Link to="/noticeboard/equipment" className="px-3 py-2 bg-purple-300 rounded shadow hover:bg-purple-500">
            🎥 Equipment
          </Link>
          <Link to="/noticeboard/productionhse" className="px-3 py-2 bg-red-400 rounded shadow hover:bg-red-500">
            🏢 Production House
          </Link>
          
          <Link to="/signup" className="px-3 py-2 bg-indigo-300 rounded shadow hover:bg-indigo-500">
            📝 Sign Up
          </Link>
          <Link to="/login" className="px-3 py-2 bg-gray-300 rounded shadow hover:bg-gray-500">
            🔐 Login
          </Link>
        </nav>

        <h2 className="text-3xl font-bold text-center mb-8 bg-yellow-300 py-2 px-6 rounded shadow inline-block">
          💬 Wanna Vent
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-yellow-100 p-6 rounded-xl shadow border border-black mb-12"
        >
          <div className="flex flex-wrap gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1" htmlFor="category">
                Select Category
              </label>
              <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="px-3 py-2 rounded border border-gray-400"
              >
                {categories.map(cat => (
                  <option key={cat.label} value={cat.label}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="entity">
                Select {category}
              </label>
              <select
                id="entity"
                value={entity}
                onChange={e => setEntity(e.target.value)}
                className="px-3 py-2 rounded border border-gray-400"
              >
                {categories.find(c => c.label === category).data.map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1" htmlFor="message">
              Your Message (Praise or Concern)
            </label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full border border-gray-400 rounded px-3 py-2"
              placeholder="Write your thoughts here..."
            />
          </div>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow transition"
          >
            Submit
          </button>
        </form>

        <h3 className="text-2xl font-bold mb-6 text-center">Recent Vents & Praises</h3>
        {ventList.length === 0 ? (
          <p className="text-center text-red-700 font-extrabold">NO MESSAGES YET, BE THE FIRST TO VENT OR PRAISE!</p>
        ) : (
          <ul className="space-y-6">
            {ventList.map(({ id, category, entity, message, timestamp, votes }) => (
              <li
                key={id}
                className="bg-yellow-50 p-4 rounded-xl shadow border border-black"
              >
                <div className="flex justify-between items-center mb-1">
                  <strong>
                    {category} - {entity}
                  </strong>
                  <small className="text-gray-600 text-sm">
                    {new Date(timestamp).toLocaleString()}
                  </small>
                </div>
                <p className="mb-3 whitespace-pre-line">{message}</p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => vote(id, 1)}
                    aria-label="Upvote"
                    className="bg-green-300 hover:bg-green-400 rounded px-3 py-1 font-semibold"
                  >
                    👍
                  </button>
                  <button
                    onClick={() => vote(id, -1)}
                    aria-label="Downvote"
                    className="bg-red-300 hover:bg-red-400 rounded px-3 py-1 font-semibold"
                  >
                    👎
                  </button>
                  <span>Score: {votes}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

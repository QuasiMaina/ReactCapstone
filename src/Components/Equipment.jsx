import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const rentalHouses = [
  {
    id: 1,
    name: 'FilmGear Rentals',
    location: 'Nairobi, Kenya',
    contact: {
      email: 'contact@filmgear.co.ke',
      phone: '+254 700 123456',
      website: 'https://filmgear.co.ke',
    },
    rating: 4.5,
    equipment: [
      {
        id: 'cam1',
        name: 'Canon C300 Mark III',
        type: 'Camera',
        dailyRate: 25000,
        photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'light1',
        name: 'Aputure 120d II',
        type: 'Lighting',
        dailyRate: 6000,
        photo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'mic1',
        name: 'Sennheiser MKH416',
        type: 'Audio',
        dailyRate: 5000,
        photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 2,
    name: 'ProEquip Rentals',
    location: 'Mombasa, Kenya',
    contact: {
      email: 'info@proequip.co.ke',
      phone: '+254 711 654321',
      website: 'https://proequip.co.ke',
    },
    rating: 4.2,
    equipment: [
      {
        id: 'cam2',
        name: 'Sony FX6',
        type: 'Camera',
        dailyRate: 22000,
        photo: 'https://images.unsplash.com/photo-1525186402429-8a5a423e435f?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'light2',
        name: 'Arri Skypanel S60',
        type: 'Lighting',
        dailyRate: 9000,
        photo: 'https://images.unsplash.com/photo-1503437313881-503a91226419?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'rig1',
        name: 'DJI Ronin-S Gimbal',
        type: 'Stabilizer',
        dailyRate: 8000,
        photo: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 3,
    name: 'Light & Sound Hire',
    location: 'Kisumu, Kenya',
    contact: {
      email: 'hello@lightsound.co.ke',
      phone: '+254 745 321654',
      website: 'https://lightsound.co.ke',
    },
    rating: 4.7,
    equipment: [
      {
        id: 'mic2',
        name: 'Rode NTG3',
        type: 'Audio',
        dailyRate: 4500,
        photo: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'light3',
        name: 'Godox SL60W',
        type: 'Lighting',
        dailyRate: 5500,
        photo: 'https://images.unsplash.com/photo-1558980394-c579b65e6b62?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tripod1',
        name: 'Manfrotto Tripod',
        type: 'Support',
        dailyRate: 2500,
        photo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
];

const equipmentTypes = ['All', 'Camera', 'Lighting', 'Audio', 'Stabilizer', 'Support'];

export default function Equipment() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');
  const [inquiry, setInquiry] = useState(null);

  const handleInquiry = (equipment, rentalHouse) => {
    setInquiry({ equipment, rentalHouse });
  };

  const filteredRentalHouses = rentalHouses.map(house => {
    const filteredEquipment = house.equipment.filter(eq => {
      const matchesType = typeFilter === 'All' || eq.type === typeFilter;
      const matchesPrice = maxPrice === '' || eq.dailyRate <= Number(maxPrice);
      return matchesType && matchesPrice;
    });
    return { ...house, equipment: filteredEquipment };
  }).filter(house => house.equipment.length > 0);

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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-yellow-300 py-2 px-6 rounded shadow inline-block">
          🎥 Equipment Rentals
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
                <Link to="/noticeboard/actors" className="px-3 py-2 bg-pink-400 rounded shadow hover:bg-pink-500">
                🎭 Actors
              </Link>
              
                <Link to="/noticeboard/ratecards" className="px-3 py-2 bg-blue-300 rounded shadow hover:bg-blue-500">
                  💰 Ratecards
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
       

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div>
            <label className="block font-semibold mb-1">Filter by Type:</label>
            <select
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value)}
              className="px-3 py-2 rounded shadow border border-gray-400 bg-emerald-300"
            >
              {equipmentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Max Daily Rate (KES):</label>
            <input
              type="number"
              min="0"
              placeholder="No limit"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className="px-3 py-2 rounded shadow border border-gray-400 w-32 bg-amber-200"
            />
          </div>
        </div>

        {filteredRentalHouses.length === 0 && (
          <p className="text-center text-gray-700">No equipment found matching your filters.</p>
        )}

        <div className="space-y-12">
          {filteredRentalHouses.map(house => (
            <div key={house.id} className="bg-yellow-100 rounded-xl shadow-md p-6 border border-black">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{house.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Rating:</span>
                  <span className="text-yellow-700">{house.rating} ★</span>
                </div>
              </div>
              <p className="mb-2"><strong>Location:</strong> {house.location}</p>
              <p className="mb-4">
                <strong>Contact:</strong>{' '}
                <a href={`mailto:${house.contact.email}`} className="underline text-blue-700">{house.contact.email}</a> |{' '}
                <a href={`tel:${house.contact.phone}`} className="underline text-blue-700">{house.contact.phone}</a> |{' '}
                <a href={house.contact.website} target="_blank" rel="noopener noreferrer" className="underline text-blue-700">
                  Website
                </a>
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                {house.equipment.map(eq => (
                  <div key={eq.id} className="bg-white rounded-lg shadow p-4 border border-gray-300 flex flex-col">
                    <img
                      src={eq.photo}
                      alt={eq.name}
                      className="w-full h-40 object-cover rounded mb-3"
                      loading="lazy"
                    />
                    <h4 className="text-lg font-semibold mb-1">{eq.name}</h4>
                    <p className="text-sm mb-1"><strong>Type:</strong> {eq.type}</p>
                    <p className="text-sm mb-3"><strong>Daily Rate:</strong> KES {eq.dailyRate.toLocaleString()}</p>
                    <button
                      onClick={() => handleInquiry(eq, house)}
                      className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow transition"
                    >
                      Inquire / Book
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {inquiry && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
              <button
                onClick={() => setInquiry(null)}
                className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl font-bold"
                aria-label="Close inquiry modal"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-4">Inquiry / Booking</h3>
              <p className="mb-2">
                <strong>Equipment:</strong> {inquiry.equipment.name}
              </p>
              <p className="mb-2">
                <strong>Rental House:</strong> {inquiry.rentalHouse.name}
              </p>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  alert('Inquiry sent! Thank you.');
                  setInquiry(null);
                }}
              >
                <label className="block mb-2 font-semibold" htmlFor="name">Your Name:</label>
                <input
                  required
                  id="name"
                  type="text"
                  className="w-full border border-gray-400 rounded px-3 py-2 mb-4"
                />
                <label className="block mb-2 font-semibold" htmlFor="email">Your Email:</label>
                <input
                  required
                  id="email"
                  type="email"
                  className="w-full border border-gray-400 rounded px-3 py-2 mb-4"
                />
                <label className="block mb-2 font-semibold" htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-gray-400 rounded px-3 py-2 mb-4"
                  placeholder="Any special requirements or questions?"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

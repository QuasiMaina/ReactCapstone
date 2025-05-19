import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jobs from './Jobs';
import Crew from './Crew';
import Ratecards from './Ratecards';
import Equipment from './Equipment';
import ProductionHse from './ProductionHse';
import WannaVent from './WannaVent';
import StickyNote from './StickyNote';

const notes = [
  { id: 1, text: 'JOBS', color: 'bg-yellow-400' },
  { id: 2, text: 'CREW', color: 'bg-green-400' },
  { id: 3, text: 'ACTORS', color: 'bg-pink-400' },
  { id: 4, text: 'RATE CARDS', color: 'bg-blue-500' },
  { id: 5, text: 'EQUIPMENT', color: 'bg-purple-500' },
  { id: 6, text: 'PRODUCTION HOUSE', color: 'bg-red-500'},
  { id: 7, text: 'WANNA VENT?', color: 'bg-lime-400' },
];

export default function NoticeBoard() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-blue-400 p-8">
        <Switch>
          <Route path="/" exact component={Jobs} />
          <Route path="/crew" component={Crew} />
          <Route path="/ratecards" component={Ratecards} />
          <Route path="/equipment" component={Equipment} />
          <Route path="/productionhse" component={ProductionHse} />
          <Route path="/wannavent" component={WannaVent} />
        </Switch>

        <div
          className="bg-white border-[20px] border-brown-700 rounded-2xl shadow-2xl p-10 max-w-9xl w-full"
          style={{ backgroundImage: "url('/corkboard.jpeg')", backgroundRepeat: 'repeat' }}
        >
          <h1 className="text-4xl font-bold text-center mb-10 text-white">THE NOTICE BOARD</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {notes.map((note) => (
              <StickyNote key={note.id} id={note.id} content={note.text} color={note.color} />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

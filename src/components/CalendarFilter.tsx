import React, { useState } from 'react';
import { Calendar, Search, MapPin, Clock, Tag } from 'lucide-react';
import { schoolEvents, type EventItem } from '../data/eventsData';

export const CalendarFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Academic', 'Cultural', 'APC Meeting', 'No School', 'Community'];

  const filteredEvents = schoolEvents.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadgeClass = (cat: string) => {
    switch (cat) {
      case 'Cultural':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Academic':
        return 'bg-teal-100 text-teal-900 border-teal-300';
      case 'APC Meeting':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'No School':
        return 'bg-rose-100 text-rose-900 border-rose-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Controls Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-teal-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-700 text-xs text-slate-900"
          />
        </div>
      </div>

      {/* Events List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            const eventDate = new Date(event.date + 'T00:00:00');
            const monthStr = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
            const dayStr = eventDate.getDate();

            return (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-teal-900 text-white rounded-xl flex flex-col items-center justify-center font-bold shadow-sm shrink-0">
                        <span className="text-[10px] text-amber-400 uppercase tracking-widest leading-none">
                          {monthStr}
                        </span>
                        <span className="text-xl leading-none mt-1">{dayStr}</span>
                      </div>
                      <div>
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold border ${getCategoryBadgeClass(
                            event.category
                          )}`}
                        >
                          {event.category}
                        </span>
                        <h4 className="font-serif font-bold text-teal-950 text-lg group-hover:text-teal-700 transition-colors mt-1">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-700" />
                    <span className="truncate max-w-[180px]">{event.location}</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full bg-slate-50 rounded-2xl p-12 text-center text-slate-500 border border-slate-200">
            <Calendar className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p className="font-bold text-slate-700">No matching events found</p>
            <p className="text-xs mt-1">Try resetting your category filter or search keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

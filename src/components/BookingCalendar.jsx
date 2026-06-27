import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Updated time slots: 10 AM to 6 PM
const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
];

export default function BookingCalendar({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [hoveredDate, setHoveredDate] = useState(null);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isToday = (day) => {
    return day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
  };

  const isPast = (day) => {
    const date = new Date(viewYear, viewMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  // Sunday is now allowed - removed isSunday check
  const isSelected = (day) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === viewMonth && selectedDate.getFullYear() === viewYear;
  };

  const handleDateClick = (day) => {
    if (isPast(day)) return; // Only check for past dates, Sundays allowed
    setSelectedDate(new Date(viewYear, viewMonth, day));
  };

  const monthName = new Date(viewYear, viewMonth).toLocaleString('default', { month: 'long' });

  return (
    <div className="w-full">
      {/* Calendar Header */}
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
          <CalendarIcon size={16} className="text-saffron-600" />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold text-base">Select a Date</h3>
          <p className="text-xs text-gray-400">Available all days</p>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-5">
        <button 
          onClick={prevMonth} 
          className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 text-gray-600 hover:text-saffron-600"
        >
          <ChevronLeft size={18} />
        </button>
        <h3 className="text-gray-900 font-semibold text-base">
          {monthName} <span className="text-gray-400 text-sm ml-1">{viewYear}</span>
        </h3>
        <button 
          onClick={nextMonth} 
          className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 text-gray-600 hover:text-saffron-600"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-3">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-gray-500 text-xs font-medium py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="h-10" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const disabled = isPast(day);
          const isSelectedDate = isSelected(day);
          const isTodayDate = isToday(day);
          
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              disabled={disabled}
              onMouseEnter={() => setHoveredDate(day)}
              onMouseLeave={() => setHoveredDate(null)}
              className={`
                relative h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200
                ${disabled ? 'text-gray-300 cursor-not-allowed line-through' : 'cursor-pointer'}
                ${!disabled && !isSelectedDate && 'text-gray-700 hover:bg-orange-50 hover:text-saffron-700'}
                ${isSelectedDate ? 'bg-saffron-500 text-white shadow-sm' : ''}
                ${isTodayDate && !isSelectedDate ? 'border-2 border-saffron-300 font-semibold' : ''}
                ${hoveredDate === day && !isSelectedDate && !disabled ? 'bg-orange-50 scale-95' : ''}
              `}
            >
              {day}
              {isTodayDate && !isSelectedDate && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-saffron-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Time Slots - 10 AM to 6 PM */}
      {selectedDate && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                <Clock size={16} className="text-saffron-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-sm">Select Time Slot</h3>
                <p className="text-xs text-gray-400">9 slots available (10 AM - 6 PM)</p>
              </div>
            </div>
            {selectedTime && (
              <span className="text-xs text-saffron-600 font-medium bg-orange-50 px-2 py-1 rounded-full">
                Selected: {selectedTime}
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => {
              const isSelectedSlot = selectedTime === slot;
              
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`
                    py-2.5 px-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${isSelectedSlot 
                      ? 'bg-saffron-500 text-white shadow-sm transform scale-105' 
                      : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-orange-50 hover:border-saffron-200 hover:text-saffron-700'
                    }
                  `}
                >
                  {slot}
                </button>
              );
            })}
          </div>

          {/* Time slot legend */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-saffron-500" />
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-orange-100" />
              <span>Available</span>
            </div>
          </div>
        </div>
      )}

      {/* Prompt to select date */}
      {!selectedDate && (
        <div className="mt-6 pt-4 border-t border-gray-100 text-center py-6">
          <Clock size={24} className="text-gray-300 mx-auto mb-2" />
          <p className="text-xs text-gray-400">
            Select a date to view available time slots
          </p>
        </div>
      )}
    </div>
  );
}
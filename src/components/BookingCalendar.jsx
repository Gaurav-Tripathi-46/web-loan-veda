import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

export default function BookingCalendar({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

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

  const isSunday = (day) => {
    return new Date(viewYear, viewMonth, day).getDay() === 0;
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === viewMonth && selectedDate.getFullYear() === viewYear;
  };

  const handleDateClick = (day) => {
    if (isPast(day) || isSunday(day)) return;
    setSelectedDate(new Date(viewYear, viewMonth, day));
  };

  const monthName = new Date(viewYear, viewMonth).toLocaleString('default', { month: 'long' });

  return (
    <div className="transform scale-[0.85] origin-top">
      {/* Month Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="text-saffron-500 hover:text-saffron-600 p-1">
          <ChevronLeft size={20} />
        </button>
        <h3 className="text-blue-500 font-bold text-lg">{monthName} {viewYear}</h3>
        <button onClick={nextMonth} className="text-saffron-500 hover:text-saffron-600 p-1">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-blue-500 text-sm font-medium">{d}</div>
        ))}
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const disabled = isPast(day) || isSunday(day);
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              disabled={disabled}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors mx-auto
                ${disabled ? 'text-gray-300 cursor-not-allowed' : 'text-blue-500 cursor-pointer hover:bg-saffron-50'}
                ${isToday(day) && !isSelected(day) ? 'border-2 border-saffron-500 font-semibold' : ''}
                ${isSelected(day) ? 'bg-saffron-500 text-white font-bold' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="mt-6">
          <p className="text-blue-500 text-sm font-medium mb-3">Select Time:</p>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`rounded-full px-3 py-1 text-sm transition-colors ${
                  selectedTime === slot
                    ? 'bg-saffron-500 text-white font-semibold'
                    : 'border border-blue-200 text-blue-500 hover:border-saffron-500'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';

interface CalendarProps {
  year: number;
  month: number;
  dDay: number;
  className?: string;
}


const Calendar = ({ year, month, dDay, className = "" }: CalendarProps) => {
  const generateCalendar = (year: number, month: number): string[][] => {
    const firstDay = new Date(year, month, 1).getDay();
    const allDays = Array.from(
      { length: new Date(year, month + 1, 0).getDate() }, 
      (_, i) => i + 1
    )
    const { calendar } =  allDays.reduce((acc, day: number) => {
      const newWeek = [...acc.week, String(day)];
      return {
        week: newWeek.length === 7 ? [] : newWeek,
        calendar: newWeek.length === 7 ? [...acc.calendar, newWeek]: acc.calendar,
      }
    }, { week: Array(String(firstDay)).fill(""), calendar: [] as string[][] });
  
    return calendar;
  };
  const calendarList = [['일', '월', '화', '수', '목', '금', '토'], ...generateCalendar(year, month)];

  return (
    <div className={`p-3 ${className}`}>
      <div className="grid grid-cols-7 gap-3 text-center">
        {calendarList.map((week, weekIdx) => (
          <React.Fragment key={weekIdx}>
            {week.map((day, dayIdx) => {
              if (day === String(dDay)) {
                return (<div key={dayIdx} className={`p-1 text-white bg-rosegray rounded-full`}>{day}</div>);
              } else if (dayIdx === 0) {
                return (<div key={dayIdx} className={`p-1 text-rosegray opacity-80`}>{day}</div>);
              } else if (dayIdx === 6) {
                return (<div key={dayIdx} className={`p-1 text-gray-400`}>{day}</div>);
              } else {
                return (<div key={dayIdx} className={`p-1`}>{day}</div>);
              }
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
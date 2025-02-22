import Calendar from "./common/calendar";

export const Day = () => {
  return (
    <div className="my-5 py-10 flex flex-col items-center bg-neutral-50">
      <div className="mb-7 text-title">Wedding Day</div>
      <div className="text-default">2025년 03월 07일 토요일 오후 1시 30분</div>
      <div className="text-mini text-gray-400">Sunday, Feb 16, 2025 | PM 12:30</div>
      <Calendar 
        year={2025} 
        month={2} 
        dDay={16}
        className="border-y border-gray-200 my-5 text-mini"
      />
      <div className="text-mini">곰곰 🩶 미미 결혼식 n일 전</div>
    </div>
  );
}

import { Util } from "utils";
import Calendar from "./common/calendar";
import dayjs from "dayjs";

export const Day = ({ brideName, groomName, date }: { brideName: string; groomName: string; date?: Date; }) => {
  if (!date) {
    return;
  }
  
  const diffDay = dayjs(date).startOf("day").diff(dayjs().startOf("day"), "day");

  return (
    <div className="my-5 py-10 flex flex-col items-center bg-neutral-50">
      <div className="mb-7 text-title">Wedding Day</div>
      <div className="text-default">{Util.getFormattedDate(date)}</div>
      <div className="text-mini text-gray-400">{Util.getFormattedDate(date, "en")}</div>
      <Calendar 
        year={date.getFullYear()} 
        month={date.getMonth()} 
        dDay={date.getDate()}
        className="border-y border-gray-200 my-5 text-mini"
      />
      {brideName && groomName && (
        <div className="text-mini">
          {brideName} 🩶 {groomName} 결혼식 {diffDay > 0 ? `${diffDay}일 전` : "당일"}
        </div>
      )}
    </div>
  );
}

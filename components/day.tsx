import { Util } from "utils";
import Calendar from "./common/calendar";
import dayjs from "dayjs";

export const Day = ({ brideName, groomName, date }: { brideName: string; groomName: string; date?: Date; }) => {
  if (!date) {
    return;
  }
  
  const diffDay = dayjs(date).startOf("day").diff(dayjs().startOf("day"), "day");

  return (
    <div className="py-12 flex flex-col items-center bg-neutral-light text-mini">
      <div className="mb-7 text-default">웨딩 일정</div>
      <div>{Util.getFormattedDate(date)}</div>
      <div className="text-mini-gray">{Util.getFormattedDate(date, "en")}</div>
      <Calendar 
        year={date.getFullYear()} 
        month={date.getMonth()} 
        dDay={date.getDate()}
        className="border-y border-gray-200 my-5 text-mini"
      />
      {brideName && groomName && (
        <div className="pt-1 flex">
          {diffDay > 0 && (
            <>
              <div className="px-1">{brideName} 🩶 {groomName} 결혼식이</div>
              <div className="text-rosegray">{diffDay}</div>
              <div>일 남았습니다.</div>
            </>
          )}
          {diffDay === 0 && <div>{brideName} 🩶 {groomName} 결혼식 당일입니다.</div>}
        </div>
      )}
    </div>
  );
}

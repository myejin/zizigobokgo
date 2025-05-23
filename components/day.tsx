import dayjs from "dayjs";
import { Util } from "utils";
import Calendar from "./common/calendar";

export const Day = ({ brideName, groomName, date, isEn }: { brideName: string; groomName: string; date?: Date; isEn: boolean; }) => {
  if (!date) {
    return;
  }
  
  const diffDay = dayjs(date).startOf("day").diff(dayjs().startOf("day"), "day");

  return (
    <div className="py-12 flex flex-col items-center bg-neutral-light text-mini">
      <div className="mb-5 text-default">{isEn ? "Wedding day": "웨딩 일정"}</div>
      <div>{Util.getFormattedDate(date, isEn ? "en" : "ko")}</div>
      <Calendar 
        year={date.getFullYear()} 
        month={date.getMonth()} 
        dDay={date.getDate()}
        className="border-y border-gray-200 my-5 text-mini"
      />
      {groomName && brideName && (
        isEn ? (
          <div className="pt-1 flex">
            {diffDay > 0 && (
              <>
                <div className="px-1">Only</div>
                <div className="text-rosegray">{diffDay}</div>
                <div className="px-1">days left until the wedding!</div>
              </>
            )}
            {diffDay === 0 && <div>It's finally our wedding day!</div>}
          </div>
        ) : (
          <div className="pt-1 flex">
            {diffDay > 0 && (
              <>
                <div className="px-1">{groomName} 🩶 {brideName} 결혼식이</div>
                <div className="text-rosegray">{diffDay}</div>
                <div>일 남았습니다.</div>
              </>
            )}
            {diffDay === 0 && <div>{groomName} 🩶 {brideName} 결혼식 당일입니다.</div>}
          </div>
        )
      )}
    </div>
  );
}

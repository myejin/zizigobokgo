import dayjs from 'dayjs';

export class Util {
    static getFormattedDate(date: Date, version: "ko" | "en" | "date_ko" = "ko"): string {
        if (version === "en") {
            return dayjs(date).format('dddd, MMM DD, YYYY | A hh:mm')
        } else if (version === "date_ko") {
            return dayjs(date).format('YYYY년 M월 D일')
        }

        return dayjs(date).format("YYYY년 M월 D일 _d a h시 m분")
            .replace("am", "오전")
            .replace("pm", "오후")
            .replace(/_(\d+)/g, (match) => {
                const dayLabel = ['일', '월', '화', '수', '목', '금', '토'];
                return `${dayLabel[Number(match.replace("_", ""))]}요일`;
            });
    }
}

import { Util } from "utils";

export const WeddingInfo = ({ locationName, date, isEn = false }: { locationName: string; date: Date; isEn: boolean }) => {
  if (!(locationName && date)) {
    return;
  }
  return (
    <div className="py-17 text-center">
      <div className="pb-1 text-mini">{locationName}</div>
      <div className="pb-1 text-mini">{Util.getFormattedDate(date, isEn ? "en" : "ko")}</div>
    </div>
  );
}

import { Util } from "utils";

export const Info = ({ locationName, date }: { locationName: string; date: Date; }) => {
  if (!(locationName && date)) {
    return;
  }
  return (
    <div className="py-17 text-center">
      <div className="pb-1 text-mini">{locationName}</div>
      <div className="pb-1 text-mini">{Util.getFormattedDate(date)}</div>
    </div>
  );
}

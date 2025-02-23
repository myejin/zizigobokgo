import { Util } from "utils";

interface MainPhotoProps {
  title: string;
  photoUrl?: string;
  date: Date;
  locationName: string;
}

export const MainPhoto = ({ title, photoUrl = "", date, locationName }: MainPhotoProps) => {
  if (!photoUrl) {
    return;
  }
  return (
    <div className="relative flex justify-center">
      <img
        src={photoUrl}
        alt="main_photo"
        className="w-full max-w-2xl h-auto"
      />
      <div className="absolute inset-0 my-15 flex flex-col justify-between text-white">
        <div className="text-title flex justify-center gap-x-3">{title}</div>
        <div className="flex flex-col items-center">
          <div>{Util.getFormattedDate(date)}</div>
          <div>{locationName}</div>
        </div>
      </div>
    </div>
  );
}

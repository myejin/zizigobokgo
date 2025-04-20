import { useState } from "react";


interface MainPhotoProps {
  photoUrl?: string;
}

export const MainPhoto = ({ photoUrl = "" }: MainPhotoProps) => {
  if (!photoUrl) {
    return;
  }
  return (
    <div className="flex justify-center">
      <img
        src={photoUrl}
        alt="main_photo"
        className="w-full-or-max"
      />
    </div>
  );
}

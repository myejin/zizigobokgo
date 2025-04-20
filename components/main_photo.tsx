import { useState } from "react";


interface MainPhotoProps {
  photoUrl?: string;
}

export const MainPhoto = ({ photoUrl = "" }: MainPhotoProps) => {
  if (!photoUrl) {
    return;
  }
  return (
    <img
      src={photoUrl}
      alt="main_photo"
      className="w-full-or-max"
    />
  );
}

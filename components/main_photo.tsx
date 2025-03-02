import { useState } from "react";


interface MainPhotoProps {
  photoUrl?: string;
}

export const MainPhoto = ({ photoUrl = "" }: MainPhotoProps) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  if (!photoUrl) {
    return;
  }
  return (
    <img
      src={photoUrl}
      alt="main_photo"
      className="w-full max-w-2xl h-auto"
    />
  );
}

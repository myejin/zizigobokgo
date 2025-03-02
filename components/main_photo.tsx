import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faMusic } from "@fortawesome/free-solid-svg-icons";


interface MainPhotoProps {
  photoUrl?: string;
  bgmUrl?: string;
}

export const MainPhoto = ({ photoUrl = "", bgmUrl = "" }: MainPhotoProps) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudioPlayer = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

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
      {bgmUrl && (
        <div 
          className="absolute right-3 top-2 text-mini cursor-pointer" 
          onClick={toggleAudioPlayer}
        >
          <FontAwesomeIcon icon={faMusic} className="pr-1" />
          <FontAwesomeIcon icon={isAudioPlaying ? faPause : faPlay} />
          <audio ref={audioRef} src={bgmUrl} loop />
        </div>
      )}
    </div>
  );
}

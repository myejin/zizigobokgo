import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay} from "@fortawesome/free-solid-svg-icons";


export const Header = ({ title = "", bgmUrl = "" }: { title?: string; bgmUrl?: string; }) => {
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

  if (!title) {
    return;
  }
  return (
    <div className="relative flex justify-center">
      <div className="mt-15 mb-5 text-center">
        <div>INVITATION</div>
        <div>{title}</div>
      </div>
      {bgmUrl && (
        <div
          className="absolute right-3 top-2 text-mini-gray cursor-pointer" 
          onClick={toggleAudioPlayer}
        >
          <FontAwesomeIcon icon={isAudioPlaying ? faPause : faPlay} />
          <audio ref={audioRef} src={bgmUrl} loop />
        </div>
      )}
    </div>
  );
}

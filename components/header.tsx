import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";


export const Header = ({ 
  headTitle = "", 
  title = "", 
  bgmUrl = "" 
}: { headTitle?: string; title?: string; bgmUrl?: string; }) => {
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudioPlayer = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        setIsManuallyPaused(true);
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  useEffect(() => {
    if (isManuallyPaused || isAudioPlaying) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  }, [isManuallyPaused, isAudioPlaying]);

  if (!title) {
    return;
  }
  return (
    <>
      <head>
        <title>{headTitle}</title>
      </head>
      <div className="relative flex justify-center">
        <div className="mt-15 mb-5 text-center">
          {title.split("\n").map((line, idx) => (<div key={idx}>{line}</div>))}
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
    </>
  );
}

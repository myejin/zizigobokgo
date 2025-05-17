import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";


export const Bgm = ({
  title = "",
  bgmUrl = "" 
}: { title?: string; bgmUrl?: string; }) => {
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

  if (!bgmUrl) {
    return;
  }
  return (
    <>
      <div className="relative flex justify-center">
        {bgmUrl && (
          <div
            className={`absolute right-3 top-2 ${title ? 'text-white': 'text-mini-gray'} cursor-pointer`} 
            onClick={toggleAudioPlayer}
          >
            <FontAwesomeIcon 
              icon={isAudioPlaying ? faPause : faPlay}
            />
            <audio 
              ref={audioRef} 
              src={bgmUrl} 
              loop 
              onLoadedMetadata={() => {
                if (audioRef.current) {
                  audioRef.current.volume = 0.3;
                }
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

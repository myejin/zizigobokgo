import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Button from "./common/button";

const PhotoModal = ({ photoUrls, onClose }: { photoUrls: string[], onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(null);
  const touchEndX = useRef<number>(null);

  const goPrev = () => {
    setCurrentIndex((idx) => (idx === 0 ? photoUrls.length - 1 : idx - 1));
  };
  const goNext = () => {
    setCurrentIndex((idx) => (idx === photoUrls.length - 1 ? 0 : idx + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const distance = touchStartX.current - touchEndX.current;

      if (distance > 50) {
        goPrev();
      } else if (distance < -50) {
        goNext();
      }
  
      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[999] bg-blurred-black" />
      <div className="fixed inset-0 flex items-center w-full-or-max mx-auto z-[1000]">
        <Button 
          type="icon"
          className="absolute top-5 right-5 p-5" 
          icon={<FontAwesomeIcon icon={faTimes} className="text-white" />}
          onClick={onClose}
        />
        <div 
          className="flex flex-col text-gray-700"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative">
            <Button
              type="icon"
              className="absolute top-1/2 left-5"
              icon={<FontAwesomeIcon icon={faChevronLeft} className="text-white" />}
              onClick={goPrev}
            />
            <img 
              src={photoUrls[currentIndex]} 
              alt={`photo_${currentIndex}`}
            />
            <Button 
              type="icon"
              className="absolute top-1/2 right-5"
              icon={<FontAwesomeIcon icon={faChevronRight} className="text-white" />}
              onClick={goNext}
            />
          </div>
        </div>
      </div>
    </>
  );
};


export const Gallery = ({ photoUrls = [] }: { photoUrls?: string[] }) => {
  const preViewLength = 9;
  const [viewModal, setModalAll] = useState(false);

  useEffect(() => {
    if (viewModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [viewModal]);
  
  if (photoUrls.length === 0) {
    return;
  }
  return (
    <div className="my-15 flex flex-col items-center">
      <div className="text-default">웨딩 갤러리</div>
      <div className="my-5 w-85 max-w-lg grid grid-cols-3 gap-1">
        {photoUrls.slice(0, preViewLength).map((url, idx) => (
          <div key={idx} className="w-full aspect-square bg-gray-50">
            <img src={url} alt={`photo_${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <Button
        className="w-85 bg-rosegray text-mini"
        text={`더보기`}
        onClick={() => setModalAll(true)}
      />
      {viewModal && <PhotoModal photoUrls={photoUrls} onClose={() => setModalAll(false)} />}
    </div>
  );
}

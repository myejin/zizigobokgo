import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./common/button";

const PhotoModal = ({ photoUrls, onClose }: { photoUrls: string[], onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((idx) => (idx === 0 ? photoUrls.length - 1 : idx - 1));
  };
  const goNext = () => {
    setCurrentIndex((idx) => (idx === photoUrls.length - 1 ? 0 : idx + 1));
  };

  return (
    <>
      <div className="fixed inset-0 z-999 bg-blurred-black">
        <Button 
          type="icon"
          className="absolute top-5 right-5" 
          icon={<FontAwesomeIcon icon={faTimes} className="text-white" />}
          onClick={onClose}
        />
      </div>
      <div className="fixed inset-0 flex items-center w-full-or-max mx-auto z-1000">
        <div className="flex flex-col text-gray-700">
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
  const preViewLength = 8;
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
    <div className="py-15 flex flex-col items-center">
      <div className="mb-5 text-default">웨딩 갤러리</div>
      
      <div className="grid grid-cols-3 gap-1">
        {photoUrls.slice(0, preViewLength).map((url, idx) => (
          <div key={idx} className="w-25 h-25 bg-gray-50">
            <img src={url} alt={`photo_${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <button
          onClick={() => setModalAll(true)}
          className="w-25 h-25 text-mini"
        >
          + more
        </button>
      </div>

      {viewModal && <PhotoModal photoUrls={photoUrls} onClose={() => setModalAll(false)} />}
    </div>
  );
}

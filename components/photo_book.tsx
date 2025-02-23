import { useState } from "react";

const PhotoModal = ({ photoUrls, onClose }: { photoUrls: string[], onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((idx) => (idx === 0 ? photoUrls.length - 1 : idx - 1));
  };
  const goNext = () => {
    setCurrentIndex((idx) => (idx === photoUrls.length - 1 ? 0 : idx + 1));
  };

  return (
    <div className="fixed inset-0 flex items-center">
      <div className="flex flex-col bg-white text-gray-700">
        <button 
          onClick={onClose} 
          className="flex justify-end mx-3 my-2" 
        >
          X
        </button>
        <div className="relative">
          <button 
            onClick={goPrev} 
            className="absolute top-1/2 left-5"
          >
            &lt;
          </button>
          <img 
            src={photoUrls[currentIndex]} 
            alt={`photo_${currentIndex}`} 
            className="max-w-full h-auto" 
          />
          <button 
            onClick={goNext} 
            className="absolute top-1/2 right-5"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};


export const PhotoBook = ({ photoUrls = [] }: { photoUrls?: string[] }) => {
  const preViewLength = 8;
  const [viewModal, setModalAll] = useState(false);
  
  if (photoUrls.length === 0) {
    return;
  }
  return (
    <div className="py-15 flex flex-col items-center">
      <div className="mb-10 text-title">Photo</div>
      
      <div className="grid grid-cols-3 gap-1">
        {photoUrls.slice(0, preViewLength).map((url, idx) => (
          <div key={idx} className="w-25 h-25 bg-gray-50">
            <img src={url} alt={`photo_${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <button
          onClick={() => setModalAll(true)}
          className="w-25 h-25"
        >
          + more
        </button>
      </div>

      {viewModal && <PhotoModal photoUrls={photoUrls} onClose={() => setModalAll(false)} />}
    </div>
  );
}

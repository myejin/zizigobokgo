import { Heart, MessageCircle, Send } from 'lucide-react';
import React from 'react';

interface FrameImageProps {
  profileUrl: string;
  imageUrl: string;
  content?: string;
}

const FrameImage: React.FC<FrameImageProps> = ({
  profileUrl,
  imageUrl,
  content,
}) => {
  if (!imageUrl || !profileUrl) {
    return null;
  }
  return (
    <div className="bg-neutral flex justify-center pt-10 text-white">
      <div className="w-75 rounded-lg bg-black">
        <div className="flex items-center p-3">
          <img src={profileUrl} alt="profile" className="w-7 h-7 rounded-full mr-2" />
          <span className="text-mini">예신예랑</span>
        </div>
        <img src={imageUrl} alt="frame-image" className="w-full h-auto object-cover" />
        <div className="flex space-x-4 px-3 pt-3">
          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
          <MessageCircle className="w-5 h-5" />
          <Send className="w-5 h-5" />
        </div>
        <div className="px-3 pt-3 pb-5 flex flex-col text-mini">
          <div>{content ?? '저희 예쁘게 잘 살겠습니다 😊'}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameImage;

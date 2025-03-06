import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  title,
  className = '',
  autoplay = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg shadow-xl ${className}`}
    >
      <div className="aspect-w-26 aspect-h-20">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}${
            autoplay ? '?autoplay=1' : ''
          }`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[370px] transition-all duration-300"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;

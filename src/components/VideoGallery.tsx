"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoData {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  quote: string;
  author: string;
  company: string;
}

const videoData: VideoData[] = [
  {
    id: "video1",
    videoUrl:
      "https://player.vimeo.com/video/1073248466?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-1.png",
    quote:
      "Dank der SGB konnten wir von den günstigen Sportmarkt-Preisen profitieren.",
    author: "CHRISTIAN ANDRESEN",
    company: "The Mandala Hotel Berlin",
  },
  {
    id: "video2",
    videoUrl:
      "https://player.vimeo.com/video/1060820061?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-2.png",
    quote:
      "Die intelligenten Tarife der SGB Energie GmbH sichern die Unternehmenserträge.",
    author: "OLIVER BETZ",
    company: "Systec Controls",
  },
  {
    id: "video3",
    videoUrl:
      "https://player.vimeo.com/video/1026792501?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-3.jpg",
    quote: "Ich habe durch den Wechsel zu SGB deutlich Geld gespart.",
    author: "CHRISTIAN STOCK",
    company: "Eigentümer der Bürokomplexe 'Stockwerk'",
  },
  {
    id: "video4",
    videoUrl:
      "https://player.vimeo.com/video/1051042714?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-4.png",
    quote: "Durch die SGB kann ich einiges an Geld sparen.",
    author: "THOMAS GÖDTEL",
    company: "Inhaber Tenno Sushi Lounge",
  },
  {
    id: "video5",
    videoUrl:
      "https://player.vimeo.com/video/1052955488?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-5.png",
    quote:
      "Ich muss mir keine Sorgen um falsch berechnete Energiekosten machen.",
    author: "CORD PLEIS",
    company: "Haustechnik Johann Pleis GmbH",
  },
  {
    id: "video6",
    videoUrl:
      "https://player.vimeo.com/video/1055616449?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-6.png",
    quote: "Mein persönlicher SGB-Berater kümmert sich um alles.",
    author: "HENNING WAGNER",
    company: "Inhaber Wagner Hotel zur Post",
  },
  {
    id: "video7",
    videoUrl:
      "https://player.vimeo.com/video/1055858621?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-7.png",
    quote: "Dank SGB haben wir wieder Mittel, um zu investieren.",
    author: "WOLF WALLENDORF",
    company: "Pureburrito GmbH",
  },
  {
    id: "video8",
    videoUrl:
      "https://player.vimeo.com/video/1026862864?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-8.jpg",
    quote: "Mit SGB muss ich keinen Budget-Puffer für Energie einplanen.",
    author: "PHILIP IBRAHIM",
    company: "SocialHub Berlin",
  },
  {
    id: "video9",
    videoUrl:
      "https://player.vimeo.com/video/1026866124?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=",
    thumbnailUrl: "/assets/video-thumbnail-9.jpg",
    quote: "Durch den Energieaudit von SGB konnte ich Stromfresser beseitigen.",
    author: "JÖRN BRINKMANN",
    company: "Ständige Vertretung Berlin",
  },
];

const VideoCard = ({
  video,
  isPlaying,
  onPlay,
  className,
}: {
  video: VideoData;
  isPlaying: boolean;
  onPlay: (id: string) => void;
  className?: string;
}) => {
  const isVideo3 = video.id === "video3";

  return (
    <div
      className={`video-container relative z-10 flex ${isVideo3 ? "flex-col md:flex-row" : "flex-col"} overflow-hidden shadow-lg ${className || ""}`}
    >
      <div className={`video w-full`}>
        <div className="relative">
          <iframe
            className="aspect-video w-full"
            allowFullScreen
            allow="clipboard-write"
            title="vimeo Video-Player"
            src={video.videoUrl}
          />
          {!isPlaying && (
            <div
              className="absolute inset-0 cursor-pointer bg-cover bg-center"
              style={{
                backgroundImage: `url(${video.thumbnailUrl})`,
              }}
              onClick={() => onPlay(video.id)}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                role="button"
                aria-label="Video abspielen"
                tabIndex={0}
              >
                <svg
                  aria-hidden="true"
                  className="h-20 w-20 text-white transition-colors duration-300 hover:text-green-500"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`text flex flex-col justify-center bg-slate-900 p-8 text-center text-white transition-all duration-300 hover:bg-slate-800 ${isVideo3 ? "md:absolute md:top-1/2 md:right-0 md:w-1/3 md:-translate-y-1/2 md:bg-transparent" : "w-full"} ${isVideo3 && isPlaying ? "hidden" : ""}`}
      >
        <p className="mb-4 text-xl font-light">"{video.quote}"</p>
        <p className="text-green-500">{video.author}</p>
        <p className="text-sm text-gray-400">{video.company}</p>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  const [playingVideos, setPlayingVideos] = useState<{
    [key: string]: boolean;
  }>(Object.fromEntries(videoData.map((video) => [video.id, false])));

  const handlePlayClick = (videoId: string) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [videoId]: true,
    }));
  };

  return (
    <div className="all-videos mt-4 w-full bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {videoData.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isPlaying={playingVideos[video.id]}
              onPlay={handlePlayClick}
              className={video.id === "video3" ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;

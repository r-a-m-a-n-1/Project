import React, { useState } from "react";
import YouTube from "react-youtube";

const ProbabilityAndStatisticsVideoPage = () => {
  const videoIDs = [
    "_6oRqxY6O5w", "yzuoyA2EJPA", "5LCO26C-ggo", "QZi8OqYSLgU", "kSyYgXvBpQQ",
    "9WjuLvPT_2A", "pG-IAFOiOw4", "itCTFw0d4hs", "iF7ya80h1Rs", "wGiJkeuJDcM",
    "cwIIXBSEFX4", "WBvroWQecEI", "bJcGmEkiyz8", "HZxJtGqkJLM", "EL3fXu9FFII",
    "NzuTxGGFcrg", "KgZR5L9jTJA", "jAH5rcWIyCE", "NCsoLIlz_lU", "bXeQILCHnVY",
    "HnFFuXDi9p8", "qIOCtAR0Qw0", "3HoSPQmpzKc", "TH2nvOymftc", "CDKS5Se6r3Q",
    "X7tLRj8Le-8", "qMwnGmEXBpY", "OM8zRM5v8U0", "XdmVCN8bCQs", "wmw4pbFIaV4",
    "DoHj2cPwz8U", "X1vBZcpHDXA", "xnPmAe09KQs", "5ezk6z98wEo", "vzj4E6F1O7M",
    "L-UcOD04rUQ", "QAawJJDWe5M", "OXMqPo1Spm4", "A0eX8tM0GLE", "MgrJMCzPJHU",
    "9E51guuulgU", "K0Q-TaQ2ZtA", "XMr7ddjxxr8", "iwLTbgKGuI8", "videoID45",
    "videoID46", "videoID47", "videoID48", "videoID49", "videoID50"
  ];

  const videoDescriptions = [
    "Vector Space-Concept and defintion in Hindi(Lecture-1)",
    "Vector Space-General Properties in Hindi(Lecture 2)",
    "Vector Space-Vector Subspace in Hindi (Lecture 3)",
    // ... your remaining descriptions here, matching index
    "Linking linear systems to differential equations."
  ];

  const videoData = videoIDs.map((videoId, index) => ({
    id: index + 1,
    title: `Linear Algebra Video ${index + 1}`,
    thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    videoId: videoId,
    description: videoDescriptions[index] || ""
  }));

  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const playerOptionsLarge = {
    height: "360",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      controls: 1,
    },
  };

  const playerOptionsMini = {
    height: "180",
    width: "320",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      controls: 1,
    },
  };

  return (
    <div className="bg-black text-white w-full min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
       Probability And Statistics Videos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer flex flex-col items-center transform hover:scale-105 transition duration-300"
            onClick={() => openVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold text-center">{video.title}</h2>
            <p className="text-gray-400 text-center text-sm">{video.description}</p>
          </div>
        ))}
      </div>

      {/* Mini floating player at bottom-right */}
      {selectedVideo && (
        <div className="fixed bottom-4 right-4 z-50 w-[320px] bg-gray-900 rounded-lg shadow-xl">
          <div className="relative">
            <button
              onClick={closeVideo}
              className="absolute top-1 right-2 text-white text-2xl font-bold z-10"
              aria-label="Close video player"
            >
              ✖
            </button>
            <YouTube videoId={selectedVideo.videoId} opts={playerOptionsMini} />
          </div>
          <div className="p-2">
            <h2 className="text-sm font-semibold">{selectedVideo.title}</h2>
            <p className="text-gray-400 text-xs">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProbabilityAndStatisticsVideoPage;

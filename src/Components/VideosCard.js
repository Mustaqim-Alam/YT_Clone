import React from "react";

const VideosCard = ({ videoInfo }) => {
  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    }
    return viewCount;
  };

  console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  console.log("snippet", snippet);
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" p-2 w-80">
      <img
        className=" rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul>
        <li className=" font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li> {formatViewCount(statistics.viewCount)} Views</li>
      </ul>
    </div>
  );
};

export default VideosCard;

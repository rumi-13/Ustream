import VideoCard from "./VideoCard";
import { useState } from "react";
import { useEffect } from "react";
export default function Recommendations({ categoryId, id }) {
  const [data, setData] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Function to  fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=PK&videoCategoryId=${categoryId}&key=${API_KEY}`;

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.items ?? []);
      } catch (err) {
        console.error("YouTube API error:", err);
        setData([]);
      }
    };

    fetchData();
  }, [categoryId]);

  {
    /* If no data is fethed*/
  }
  if (!data) {
    return (
      <div className="py-20 flex justify-center">
        <div className="h-10 w-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <aside
      className="
        shrink-0
        w-[38%] sm:w-[34%] md:w-[32%] lg:w-[30%] xl:w-[28%]
        flex flex-col
      "
    >
      <h3 className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide mb-4">
        Recommended
      </h3>

      {/* Scrollable list of Recommended Videos */}
      <div className="h-[calc(100vh-4rem)] overflow-y-scroll scrollbar-none flex flex-col gap-4 pr-1">
        {data.map((video) => (
          <VideoCard // Render Each video using Card
            key={video.id}
            id={video.id}
            title={video.snippet.title}
            thumbUrl={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
            stats={`${Number(video.statistics.viewCount)} `}
            categoryId={video.snippet.categoryId}
          />
        ))}
      </div>
    </aside>
  );
}

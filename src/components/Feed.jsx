import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

export default function Feed({ sideMenu, category }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const leftOffset = sideMenu ? "ml-16" : "ml-[11rem] 2xl:ml-[15%]";
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Function to Fetch Data FRom API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.items ?? []);
      } catch (err) {
        console.error("YouTube API error:", err);
        setError("Failed to load videos. Please try again later.");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  // UI of Cards when API is Loading
  if (loading) {
    return (
      <main
        className={`h-screen overflow-y-auto px-5 py-6 ${leftOffset} bg-neutral-50/50 dark:bg-neutral-900/50`}
      >
        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/*Random Cards to make UI enhancing (while loading)*/}
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-700"></div>

              <div className="p-4 space-y-3">
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
                </div>

                <div className="space-y-2">
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // If Error Occurs 
  if (error) {
    return (
      <main
        className={`h-screen overflow-y-auto px-5 py-20 ${leftOffset} bg-neutral-50/50 dark:bg-neutral-900/50`}
      >
        <div className="flex flex-col items-center justify-center max-w-md mx-auto text-center">
          <div className="w-16 h-16 mb-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2 font-inter">
            Oops! Something went wrong
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 font-inter">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 font-inter"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  // If data ism;t fetched and array is empty;
  if (!data || data.length === 0) {
    return (
      <main
        className={`h-screen overflow-y-auto px-5 py-20 ${leftOffset} bg-neutral-50/50 dark:bg-neutral-900/50`}
      >
        <div className="flex flex-col items-center justify-center max-w-md mx-auto text-center">
          <div className="w-16 h-16 mb-6 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-neutral-500 dark:text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2 font-inter">
            No videos found
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-inter">
            Try selecting a different category or check back later.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`h-screen overflow-y-auto px-5 py-6 ${leftOffset} bg-neutral-50/50 dark:bg-neutral-900/50 transition-all duration-300`}
    >
      {/* When Data is fetched; show the video in CardFormat by importing videoCard Component */}
      <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.snippet.title}
            thumbUrl={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
            stats={`${video.statistics.viewCount}`}
            categoryId={video.snippet.categoryId}
          />
        ))}
      </div>
    </main>
  );
}

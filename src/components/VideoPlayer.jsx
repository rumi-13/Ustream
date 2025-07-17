import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import formatViewCount from "../assets/formatViewCount";
import formatDate from "../assets/formatDate";

export default function VideoPlayer({ videoId }) {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Function to Fetch Video from API
  useEffect(() => {
    async function fetchVideo() {
      try {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
        const res = await fetch(url);
        const json = await res.json();
        setApiData(json.items?.[0] ?? null);
      } catch (err) {
        console.error("Video fetch error:", err);
      }
    }
    fetchVideo();
  }, [videoId]);

  // Function to Channel Data from API
  useEffect(() => {
    if (!apiData) return;
    const channelId = apiData.snippet.channelId;

    async function fetchChannel() {
      try {
        const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;
        const res = await fetch(url);
        const json = await res.json();
        setChannelData(json.items?.[0] ?? null);
      } catch (err) {
        console.error("Channel fetch error:", err);
      }
    }
    fetchChannel();
  }, [apiData]);

  // Function to Comments Data from API
  useEffect(() => {
    if (!channelData) return;

    async function fetchComments() {
      try {
        const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`;
        const res = await fetch(url);
        const json = await res.json();
        setCommentData(json.items ?? []);
      } catch (err) {
        console.error("Comment fetch error:", err);
      }
    }

    fetchComments();
  }, [channelData]);

  // In case videos are not fethched
  if (!apiData) {
    return (
      <div className="py-20 flex justify-center">
        <div className="h-10 w-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="flex flex-col w-full font-[Poppins] pl-4 text-neutral-900 dark:text-neutral-100">
      {/*  Video Frame */}
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200 dark:ring-neutral-700">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={apiData.snippet.title}
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      {/* Meta Data For current Video */}
      <div className="mt-5 flex flex-col gap-5 px-1 sm:px-2 md:px-0 ">
        {/* Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-tight ">
          {apiData.snippet.title}
        </h1>

        <div className="flex flex-wrap justify-between items-center gap-4 text-sm sm:text-base">
          <span className="text-gray-600 dark:text-gray-400">
            {formatViewCount(apiData.statistics.viewCount)} views •{" "}
            {formatDate(apiData.snippet.publishedAt)}
          </span>

          <div className="flex items-center gap-2 sm:gap-3">
            {[
              {
                icon: <AiOutlineLike className="w-5 h-5" />,
                label: formatViewCount(apiData.statistics.likeCount),
              },
              { icon: <AiOutlineDislike className="w-5 h-5" /> },
              { icon: <FiShare2 className="w-5 h-5" /> },
              { icon: <MdOutlinePlaylistAdd className="w-5 h-5" /> },
              { icon: <HiDotsVertical className="w-5 h-5" /> },
            ].map((btn, i) => (
              <button
                key={i}
                aria-label="action"
                className="group flex items-center gap-1 px-3 py-2 rounded-full bg-white dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-800 shadow-sm transition-all focus-visible:ring-2 ring-indigo-400"
              >
                {btn.icon}
                {btn.label && <span className="text-sm">{btn.label}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Meta Data for Channel that published the video */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3 pl-4">
            <img
              src={channelData?.snippet.thumbnails.high.url || ""}
              alt="channel-logo"
              className="w-12 h-12  rounded-full object-cover ring-1 ring-gray-300 dark:ring-neutral-700"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-medium truncate max-w-[200px] pl-4">
                {apiData.snippet.channelTitle}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {formatViewCount(channelData?.statistics.subscriberCount)}{" "}
                subscribers
              </span>
            </div>
          </div>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-full shadow-md focus-visible:ring-2 ring-red-400 transition-all">
            Subscribe
          </button>
        </div>

        {/* Description of video */}
        <div className="border-y border-gray-200 dark:border-neutral-700 py-4 px-2 sm:px-3 text-sm leading-relaxed text-gray-800 dark:text-gray-200 bg-white/50 dark:bg-neutral-900/30 rounded-xl">
          <p className="whitespace-pre-line">
            {apiData.snippet.description.slice(0, 250)}...
          </p>
        </div>

        {/* Comment Section  */}
        <h2 className="text-lg font-semibold mt-4 pl-4">
          Comments{" "}
          <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">
            {formatViewCount(apiData.statistics.commentCount)}
          </span>
        </h2>

        <div className="max-h-[60vh] overflow-y-auto pr-2 mt-3 flex flex-col gap-6 pl-4 pb-2">
          {commentData.map((item, i) => {
            const comment = item.snippet.topLevelComment.snippet;

            return (
              <div key={i} className="flex gap-3">
                <img
                  src={comment.authorProfileImageUrl}
                  alt=""
                  className="w-9 h-9 rounded-full object-cover ring-1 ring-gray-300 dark:ring-neutral-700"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <a
                      href={comment.authorChannelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sm hover:underline truncate max-w-[200px]"
                    >
                      {comment.authorDisplayName}
                    </a>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(comment.publishedAt)}
                    </span>
                  </div>
                  <p
                    className="text-sm text-gray-700 dark:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: comment.textDisplay }}
                  />
                  <div className="flex items-center gap-3 mt-2">
                    <button className="text-gray-500 hover:text-red-500 transition-all">
                      <AiOutlineLike className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {comment.likeCount}
                    </span>
                    <button className="text-xs text-gray-500 hover:underline">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

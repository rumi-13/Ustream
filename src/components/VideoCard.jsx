import { NavLink } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import formatViewCount from "../assets/formatViewCount";
export default function VideoCard({
  id,
  title,
  thumbUrl,
  channel,
  stats,
  categoryId,
}) {
  return (
    <NavLink to={`/video/${categoryId}/${id}`} className="block group">
      <article
        className="
          flex flex-col rounded-xl overflow-hidden
          bg-white dark:bg-neutral-800
          shadow-sm hover:shadow-xl dark:hover:shadow-2xl/20
          border border-neutral-200/50 dark:border-neutral-700/50
          transition-all duration-300 ease-out
          group-hover:scale-[1.02] group-hover:-translate-y-1
          group-active:scale-[0.98] group-active:translate-y-0
        "
      >
        {/* Thumbnail container */}
        <div className="relative overflow-hidden bg-neutral-100 dark:bg-neutral-700">
          <img
            src={thumbUrl || ""}
            alt=""
            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />

          {/* placeholder for missing thumbnails */}
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 hidden items-center justify-center">
            <svg
              className="w-12 h-12 text-neutral-400 dark:text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/*  overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
        </div>

        {/*  content section */}
        <div className="flex gap-3 p-3 sm:p-4">
          <div className="flex-1 text-neutral-800 dark:text-neutral-100 min-w-0">
            {/* title of video  */}
            <h3 className="font-inter font-semibold leading-tight line-clamp-2 text-sm sm:text-base md:text-lg mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
              {title || "Untitled Video"}
            </h3>

            {/*  channel name */}
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-inter font-medium mb-1 truncate hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200">
              {channel || "Unknown Channel"}
            </p>

            {/* view count */}
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-inter">
              {formatViewCount(stats)} views
            </p>
          </div>

          {/* more options button */}
          <button
            aria-label="More options"
            className="
              rounded-full p-2 text-neutral-500 dark:text-neutral-400
              hover:bg-neutral-100 dark:hover:bg-neutral-700
              hover:text-neutral-700 dark:hover:text-neutral-200
              focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400
              focus-visible:ring-offset-2 focus-visible:outline-none
              transition-all duration-200 hover:scale-110 active:scale-95
              opacity-0 group-hover:opacity-100
            "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: Handle more options menu
            }}
          >
            <HiDotsVertical className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </article>
    </NavLink>
  );
}

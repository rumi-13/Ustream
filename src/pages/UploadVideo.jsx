import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { RiLiveLine } from "react-icons/ri";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

// IMPORTANT: This Component is Static; it doesn't handle any function yet
export default function UploadVideo() {
  return (
    <section className="bg-white dark:bg-neutral-900 w-full max-h-screen overflow-y-auto overflow-x-hidden p-4 sm:p-6 md:p-8 text-gray-800 dark:text-gray-100 font-inter">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ───────── Upload Video Panel ───────── */}
        <div className="flex-1 rounded-2xl bg-white dark:bg-neutral-900 shadow-md dark:shadow-none p-6 flex flex-col gap-6">
          <header className="flex items-center gap-3">
            <FiUploadCloud className="w-7 h-7 text-red-600 dark:text-red-400" />
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight font-poppins">
              Upload Video
            </h2>
          </header>

          {/* Drag‑and‑Drop Zone */}
          <label
            htmlFor="fileInput"
            className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all text-center"
          >
            <FiUploadCloud className="w-14 h-14 text-gray-500 dark:text-gray-400" />
            <p className="text-sm sm:text-base">
              Drag & drop your video here or{" "}
              <span className="text-red-600 dark:text-red-400 underline font-medium font-roboto">
                browse
              </span>
            </p>
          </label>
          <input type="file" id="fileInput" className="hidden" />

          {/* Thumbnail Preview */}
          <div className="flex flex-col gap-2">
            <span className="font-medium font-poppins">Thumbnail</span>
            <div className="relative flex h-32 items-center justify-center rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800">
              <BiImageAdd className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-base font-roboto focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full resize-none rounded-md border border-gray-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-base font-roboto focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>

          {/* Privacy Dropdown */}
          <div className="flex flex-col gap-2">
            <label htmlFor="privacy" className="font-medium font-poppins">
              Privacy
            </label>
            <select
              id="privacy"
              className="w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400"
            >
              <option>Public</option>
              <option>Unlisted</option>
              <option>Private</option>
            </select>
          </div>

          {/* Progress Bar */}
          <div className="flex flex-col gap-2">
            <label className="font-medium font-poppins">Upload Progress</label>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
              <div className="h-full w-1/3 bg-red-600 dark:bg-red-500 transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* ───────── Go Live Panel ───────── */}
        <div className="flex-1 rounded-2xl bg-white dark:bg-neutral-900 shadow-md dark:shadow-none p-6 flex flex-col gap-6">
          <header className="flex items-center gap-3">
            <RiLiveLine className="w-7 h-7 text-red-600 dark:text-red-400" />
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight font-poppins">
              Go Live
            </h2>
          </header>

          {/* Stream Preview */}
          <div className="relative flex h-48 items-center justify-center rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 overflow-hidden">
            <MdOutlineSlowMotionVideo className="w-20 h-20 text-gray-500" />
            <span className="absolute top-2 left-2 rounded bg-red-600 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
              Live
            </span>
          </div>

          {/* Stream Title & Category */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Stream Title"
              className="w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-base font-roboto focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
            <select className="w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400">
              <option>Gaming</option>
              <option>Education</option>
              <option>Music</option>
              <option>Sports</option>
              <option>Other</option>
            </select>
          </div>

          {/* Start Streaming Button */}
          <button className="flex items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2 font-semibold text-white shadow hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 transition-all">
            <RiLiveLine className="w-6 h-6" />
            Start Streaming
          </button>

          {/* Stats Placeholders */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 p-4">
              <span className="text-sm font-medium">Viewers</span>
              <span className="text-2xl font-semibold">0</span>
            </div>
            <div className="flex flex-col items-center rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 p-4">
              <span className="text-sm font-medium">Bitrate</span>
              <span className="text-2xl font-semibold">0 kbps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

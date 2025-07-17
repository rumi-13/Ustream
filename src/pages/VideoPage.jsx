import VideoPlayer from "../components/VideoPlayer";
import Recommendations from "../components/Recommendations";
import { useParams } from "react-router-dom";

export default function VideoPage() {
  // The parameter contains videoId, and category which are passed ib to other components as props
  const { id, categoryId } = useParams();

  return (
    <div
      className="
        bg-white text-gray-800 dark:bg-neutral-900 dark:text-gray-100
        pt-[calc(var(--navbar-height,4rem)+1rem)]
        px-4 sm:px-6 md:px-4 py-4
        min-h-screen
      "
    >
      <div className="flex flex-row flex-nowrap gap-6 ">
        {/* Left Column: To Play Video and render comments */}
        <div
          className="flex-1 min-w-0 h-[calc(100vh-4rem)] overflow-y-auto pr-2
        bg-gray-50 dark:bg-neutral-800
            rounded-xl shadow-sm ring-1 ring-gray-200/60 dark:ring-neutral-700/50
         
        "
        >
          <VideoPlayer videoId={id} />
        </div>

        {/* Rcommendations column */}
        <Recommendations categoryId={categoryId} id={id} />
      </div>
    </div>
  );
}

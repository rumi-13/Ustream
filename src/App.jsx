import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import UploadVideo from "./pages/UploadVideo";
import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoPage from "./pages/VideoPage";
const App = () => {
  const [sideMenu, setSideMenu] = useState(true);

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout setSideMenu={setSideMenu} />}>
        <Route index element={<Home sideMenu={sideMenu} />} />
        <Route path="upload" element={<UploadVideo />} />

        <Route
          path="video/:categoryId/:id"
          element={<VideoPage sideMenu={sideMenu} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

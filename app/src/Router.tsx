import { createBrowserRouter } from "react-router-dom";
import App from '@/App'
import CreatePlaylist from '@/CreatePlaylist'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-playlist",
    element: <CreatePlaylist />,
  },
]);

export default router
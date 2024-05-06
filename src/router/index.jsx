import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home";
import FavoritesPage from "../pages/favoritesPage";
import Playlists from "../pages/playlists";
import RecentsPage from "../pages/recentsPage";
import PlayerPage from "../pages/player-page";
import Player from "../pages/player-page/player";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/favourites",
    element: <FavoritesPage />,
  },
  {
    path: "/playlists",
    element: <Playlists />,
  },
  {
    path: "/playlists/:playlistId",
    element: <PlayerPage />,
    children: [
      {
        path: 'video/:videoId',
        element : <Player/>
      }
    ]
  },
  {
    path: "/recents",
    element: <RecentsPage />,
  },
]);

export default router;

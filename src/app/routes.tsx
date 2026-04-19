import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/dashboard";
import { LiveFeed } from "./pages/liveFeed";
import { Security } from "./pages/security";
import { Auth } from "./pages/auth";
import { Unauthorized } from "./pages/unauthorized";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/live-feed",
    Component: LiveFeed,
  },
  {
    path: "/security",
    Component: Security,
  },

  {
    path: "/auth",
    Component: Auth,
  },
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },
]);

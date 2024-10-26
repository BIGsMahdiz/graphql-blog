import { Route, Routes } from "react-router-dom";

import HomePage from "../templates/HomePage";
import BlogsPage from "../pages/BlogsPage";
import AuthorsPage from "../pages/AuthorsPage";
import NotFound from "../pages/404";

function RouteConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogsPage />} />
        <Route path="/authors/:slug" element={<AuthorsPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RouteConfig;

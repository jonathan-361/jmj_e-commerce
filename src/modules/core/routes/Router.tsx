import { Routes, Route } from "react-router";
import paths from "./paths/paths";
import Error500 from "../../errors/pages/error_500";

function AppRouter() {
  return (
    <Routes>
      <Route path={paths.error500} element={<Error500 />} />
      <Route path={paths.error502} element={<Error500 />} />
      <Route path={paths.error503} element={<Error500 />} />
      <Route path={paths.error504} element={<Error500 />} />
    </Routes>
  );
}

export default AppRouter;

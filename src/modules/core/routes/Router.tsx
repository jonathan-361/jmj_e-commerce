import { Routes, Route } from "react-router";
import paths from "./paths/paths";
import Error500 from "../../errors/pages/error_500";
import Error502 from "../../errors/pages/error_502";
import Error503 from "../../errors/pages/error_503";
import Error504 from "../../errors/pages/error_504";
import Error400 from "../../errors/pages/error_400";
import Error401 from "../../errors/pages/error_401";
import Error403 from "../../errors/pages/error_403";
import Error404 from "../../errors/pages/error_404";

function AppRouter() {
  return (
    <Routes>
      <Route path={paths.error400} element={<Error400 />} />
      <Route path={paths.error401} element={<Error401 />} />
      <Route path={paths.error403} element={<Error403 />} />
      <Route path={paths.error404} element={<Error404 />} />

      <Route path={paths.error500} element={<Error500 />} />
      <Route path={paths.error502} element={<Error502 />} />
      <Route path={paths.error503} element={<Error503 />} />
      <Route path={paths.error504} element={<Error504 />} />
    </Routes>
  );
}

export default AppRouter;

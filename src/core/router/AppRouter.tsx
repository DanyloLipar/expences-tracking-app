import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { IRoute, UIRoutes } from "./app-router-types";
import AppLayout from "../../layout/AppLayout";
import Home from "../../components/pages/Home";
import Expences from "../../components/pages/Expences";

export const appRoutes: IRoute[] = [
  {
    path: UIRoutes.HOME,
    element: <Home />,
  },
  {
    path: UIRoutes.EXPENCES,
    element: <Expences />,
  },
];

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />}>
        {appRoutes.map((route, index) => (
          <Route key={`${route.path}${index}`} {...route} />
        ))}
        <Route
          path="*"
          element={<Navigate to={`/${UIRoutes.HOME}`} replace />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;

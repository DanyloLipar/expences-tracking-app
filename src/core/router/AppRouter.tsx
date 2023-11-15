import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { IRoute, UIRoutes } from "./app-router-types";
import AppLayout from "../../layout/AppLayout";
import Home from "../../components/pages/Home";
import { ScrollTop } from "../../ScrollToTop";
import Expenses from "../../components/pages/Expenses";

export const appRoutes: IRoute[] = [
  {
    path: UIRoutes.HOME,
    element: <Home />,
  },
  {
    path: UIRoutes.EXPENSES,
    element: <Expenses />,
  },
];

const AppRouter: FC = () => {
  return (
    <ScrollTop>
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
    </ScrollTop>
  );
};

export default AppRouter;

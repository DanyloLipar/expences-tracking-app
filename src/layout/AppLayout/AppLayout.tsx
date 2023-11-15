import { Outlet } from "react-router-dom";
import Header from "../../components/shared/Header";
import Menu from "../../components/shared/Menu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Menu />
    </>
  );
};

export default AppLayout;

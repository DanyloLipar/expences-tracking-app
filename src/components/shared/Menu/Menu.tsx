import { Toolbar, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { UIRoutes } from "../../../core/router/app-router-types";

import home from "../../../assets/icons/home.svg";
import homeActive from "../../../assets/icons/home-active.svg";
import card from "../../../assets/icons/card.svg";
import cardActive from "../../../assets/icons/card-active.svg";
import add from "../../../assets/icons/add.svg";
import calendar from "../../../assets/icons/calendar.svg";
import settings from "../../../assets/icons/settings.svg";

const Menu = () => {
  const location = useLocation();

  return (
    <Toolbar
      className="flex items-center justify-between shadow-footer-menu py-[20px] bottom-0 right-0 left-0 border-box bg-white"
      style={{ position: "fixed" }}
    >
      <Link to={UIRoutes.HOME} color="inherit">
        <img
          className="pt-[3px] px-[3px] w-[100%]"
          src={location.pathname !== `/${UIRoutes.HOME}` ? home : homeActive}
          alt="home"
        />
      </Link>

      <Link to={`/${UIRoutes.EXPENSES}`} color="inherit">
        <img
          className="pt-[3px] px-[3px] w-[100%]"
          src={
            location.pathname !== `/${UIRoutes.EXPENSES}` ? card : cardActive
          }
          alt="expenses"
        />
      </Link>

      <IconButton color="inherit">
        <img className="pt-[3px] px-[3px] w-[100%]" src={add} alt="add" />
      </IconButton>

      <IconButton color="inherit">
        <img
          className="pt-[3px] px-[3px] w-[100%]"
          src={calendar}
          alt="calendar"
        />
      </IconButton>

      <IconButton color="inherit">
        <img
          className="pt-[3px] px-[3px] w-[100%]"
          src={settings}
          alt="settings"
        />
      </IconButton>
    </Toolbar>
  );
};

export default Menu;

import { Container, Typography, IconButton } from "@mui/material";
import person from "../../assets/icons/person.svg";
import notifications from "../../assets/icons/notification.svg";

const Header = () => {
  return (
    <header className="pt-[40px]">
      <Container className="flex items-center justify-between h-[43px]">
        <div className="bg-violet-1 rounded-[6px] max-w-[46px]">
          <img
            className="pt-[3px] px-[3px] w-[100%]"
            src={person}
            alt="avatar"
          />
        </div>

        <Typography
          variant="h4"
          fontWeight="medium"
          className="text-center text-black"
        >
          {window.location.pathname === "/expences" ? "Expences" : "Home"}
        </Typography>

        <IconButton color="inherit">
          <img src={notifications} alt="notifications" />
        </IconButton>
      </Container>
    </header>
  );
};

export default Header;

import { Box, Container, Paper, Typography } from "@mui/material";
import cardOne from "../../../assets/icons/card-1.svg";
import cardTwo from "../../../assets/icons/card-2.svg";

const Balance = () => {
  return (
    <Container
      style={{ display: "flex" }}
      className="flex-wrap justify-between gap-[20px] mt-[32px] "
    >
      <Box className="flex-1 bg-violet-1 rounded-tl-[6px] rounded-tr-[6px]">
        <div className="flex flex-col gap-[15px] pb-[27px] px-[23px] pt-[21px]">
          <span className="text-[17px] font-medium text-white">
            Total Balance
          </span>
          <div>
            <p className="text-white text-[28px] font-bold">$76,22.00</p>
          </div>
        </div>
        <div className="flex items-center gap-[8px] py-[13px] bg-bg-grey rounded-tl-[10px] rounded-tr-[10px] px-[21px] border-box">
          <img src={cardOne} alt="card" />
          <div>
            <p className="font-roboto">Bank Account</p>
            <span className="text-[12px] text-grey">**** **** 1965</span>
          </div>
        </div>
      </Box>
      <Box className="flex-1 bg-orange rounded-tl-[6px] rounded-tr-[6px]">
        <div className="flex flex-col gap-[15px] pb-[27px] px-[23px] pt-[21px]">
          <span className="text-[17px] font-medium text-white">
            Total Balance
          </span>
          <p className="text-white text-[28px] font-bold">$76,22.00</p>
        </div>
        <div className="flex items-center gap-[8px] py-[13px] bg-bg-grey rounded-tl-[10px] rounded-tr-[10px] px-[21px] border-box">
          <img src={cardTwo} alt="card" />
          <div>
            <p className="font-roboto">Bank Account</p>
            <span className="text-[12px] text-grey">**** **** 1965</span>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Balance;

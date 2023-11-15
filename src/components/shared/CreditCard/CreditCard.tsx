import { useState } from "react";
import mastercard from "../../../assets/icons/mastercard.svg";
import dots from "../../../assets/icons/dots.svg";
import { Card, CardContent, Container } from "@mui/material";

const CreditCard = () => {
  const [userCard, setUserCard] = useState<{
    card_number: string;
    balance: number;
  }>({ card_number: "2544754537851023", balance: 76.22 });

  const cardMask = () => {
    const numericValue = userCard.card_number.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(\d{4})/g, "$1 ").trim();
    return formattedValue;
  };

  const copyCardNumber = () => {
    const cardNum = document.getElementById("cardNumber")?.innerText;

    navigator.clipboard.writeText(userCard.card_number);
    alert(`Copied: ${cardNum}`);
  };

  return (
    <Container
      style={{ display: "flex" }}
      className="flex-col items-center mt-[36px]"
    >
      <div className="bg-violet-2 h-[34px] w-[85%] rounded-tl-[24px] rounded-tr-[24px]"></div>
      <Card style={{ borderRadius: "24px" }} className="w-[100%]">
        <CardContent className="bg-card-bg relative">
          <div className="absolute top-[9px] right-[27px]">
            <img src={dots} alt="details" />
          </div>
          <div>
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-bg-grey text-[18px] font-medium">
                Total Balance
              </h3>
              <span className="text-white text-[30px] font-bold">
                ${userCard.balance}.00
              </span>
            </div>
            <div className="flex justify-between items-center mt-[40px]">
              <span
                id="cardNumber"
                className="text-grey text-[18px] font-medium"
                onClick={copyCardNumber}
              >
                {cardMask()}
              </span>
              <div>
                <img src={mastercard} alt="mastercard" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CreditCard;

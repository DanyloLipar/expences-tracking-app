import nikeLogo from "../../assets/icons/nike-store.svg";
import pumaLogo from "../../assets/icons/puma-store.svg";
import { Transaction } from "../types/transaction";

export const transactionData: Transaction[] = [
  {
    id: 1,
    logo: nikeLogo,
    name: "Nike Super Store",
    sum: 475,
    date: "05-04-2020",
  },
  {
    id: 1,
    logo: pumaLogo,
    name: "Puma Store",
    sum: 952,
    date: "05-04-2020",
  },
  {
    id: 1,
    logo: pumaLogo,
    name: "Adidas Store",
    sum: 700,
    date: "05-04-2020",
  },
];

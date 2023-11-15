import { useEffect, useState } from "react";
import { List, ListItem, Typography, Container } from "@mui/material";
import { transactionData } from "../../../core/constants/transactionsData";
import { Transaction } from "../../../core/types/transaction";
import TransactionsListItem from "../TransactionsListItem";
import { Link } from "react-router-dom";

const TransactionsList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactions(transactionData);
  }, []);

  return (
    <Container className="flex flex-col pt-[32px] pb-[124px]">
      <div className="flex justify-between items-center w-[100%] mb-[24px]">
        <Typography variant="h4" fontWeight="medium">
          Transactions
        </Typography>
        <Link to="" className="text-grey font-roboto text-[12px]">
          View all
        </Link>
      </div>
      <List disablePadding={true} className="flex flex-col gap-[16px] w-[100%]">
        {transactions.map((transaction: Transaction) => (
          <ListItem key={transaction.id} disablePadding={true}>
            <TransactionsListItem transaction={transaction} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TransactionsList;

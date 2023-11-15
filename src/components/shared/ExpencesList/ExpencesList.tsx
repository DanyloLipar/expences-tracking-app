import { useEffect, useState } from "react";
import { Container, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { expencesData } from "../../../core/constants/expencesData";
import { Expense } from "../../../core/types/expense";
import ExpencesListItem from "../ExpencesListItem/ExpencesListItem";

const ExpencesList = () => {
  const [expences, setExpences] = useState<Expense[]>([]);

  useEffect(() => {
    setExpences(expencesData);
  }, []);

  return (
    <Container className="flex flex-col pt-[32px] pb-[124px]">
      <div className="flex justify-between items-center mb-[24px] w-[100%]">
        <Typography variant="h4" fontWeight="medium">
          Expences
        </Typography>
        <Link to="" className="text-grey font-roboto text-[12px]">
          View all
        </Link>
      </div>
      <List disablePadding={true} className="flex flex-col gap-[16px] w-[100%]">
        {expences.map((expense: Expense) => (
          <ListItem key={expense.id} disablePadding={true}>
            <ExpencesListItem expense={expense} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ExpencesList;

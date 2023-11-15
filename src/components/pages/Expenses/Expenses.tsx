import Balance from "../../shared/Balance";
import DatePicker from "../../shared/DatePicker";
import ExpensesList from "../../shared/ExpensesList/ExpensesList";

const Expenses = () => {
  return (
    <>
      <DatePicker />
      <Balance />
      <ExpensesList />
    </>
  );
};

export default Expenses;

import AnalyticsDiagram from "../../shared/AnalyticsDiagram";
import CreditCard from "../../shared/CreditCard";
import TransactionsList from "../../shared/TransactionsList";

const Home = () => {
  return (
    <>
      <CreditCard />
      <AnalyticsDiagram />
      <TransactionsList />
    </>
  );
};

export default Home;

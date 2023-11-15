import { Transaction } from "../../../core/types/transaction";

type Props = {
  transaction: Transaction;
};

const TransactionsListItem: React.FC<Props> = ({ transaction }) => {
  const formatDate = () => {
    const dateObject = new Date(transaction.date);

    const options: any = {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return dateObject.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex items-center justify-between bg-bg-grey rounded-[10px] p-[10px] w-[100%]">
      <div className="flex items-center gap-[16px]">
        <div className="max-w-[39px]">
          <img
            className="w-[100%]"
            src={transaction.logo}
            alt={transaction.name}
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="text-black text-[16px] font-roboto font-medium">
            {transaction.name}
          </p>
          <span className="text-grey text-[12px]">Bank Account</span>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] items-end">
        <p className="text-green text-[18px] font-medium">${transaction.sum}</p>
        <span className="text-grey tex-[12px]">{formatDate()}</span>
      </div>
    </div>
  );
};

export default TransactionsListItem;

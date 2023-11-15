import { Expense } from "../../../core/types/expense";

type Props = {
  expense: Expense;
};

const ExpencesListItem: React.FC<Props> = ({ expense }) => {
  const formatDate = () => {
    const dateObject = new Date(expense.date);

    const options: any = { month: "long", year: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  };

  const formatSum = (sum: number) => {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="flex flex-col gap-[24px] justify-between bg-bg-grey rounded-[10px] p-[10px] w-[100%]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[16px]">
          <div className="max-w-[39px]">
            <img className="w-[100%]" src={expense.logo} alt={expense.name} />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="text-black text-[16px] font-roboto font-medium">
              {expense.name}
            </p>
            <span className="text-grey text-[12px]">Bank Account</span>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-end">
          <span className="text-grey text-[12px]">{formatDate()}</span>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <span className="text-grey-2 text-[16px]">Total Spend</span>
            <span className="text-green text-[18px] font-medium">
              ${formatSum(expense.spent)}
            </span>
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="text-grey-2 text-[16px]">Total Budget</span>
            <span className="text-[18px] font-medium">
              ${formatSum(expense.budget)}
            </span>
          </div>
        </div>
        <div>
          <span className="text-green text-[18px] font-medium">
            {((expense.spent / expense.budget) * 100).toFixed(2)}%
          </span>
        </div>
      </div>
      <div>
        <div
          style={{
            width: `${((expense.spent / expense.budget) * 100).toFixed(2)}%`,
          }}
          className="h-[13px] rounded-[13px] bg-violet-1"
        ></div>
      </div>
    </div>
  );
};

export default ExpencesListItem;

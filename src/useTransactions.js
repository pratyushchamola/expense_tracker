import { useContext } from "react";
import { ExpenseTrackerContext} from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';


// custom hook 
const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    console.log({ transactions });
    console.log("title ", title )
    const transactionsPerType = transactions.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc,currVal) => acc += currVal.amount, 0); // return sum of the values

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);

        if(category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = {
        labels: filteredCategories.map((c) => c.type),
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
            // borderwidth: 1,
        }]
    }

    return {total, chartData};
}

export default useTransactions;
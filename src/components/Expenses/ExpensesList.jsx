import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ items }) => {
	return items.length === 0 ? (
		<h2 className="expenses-list__fallback">No expenses found.</h2>
	) : (
		<ul className="expenses-list">
			{items.map((expense) => (
				<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
			))}
		</ul>
	);
};

export default ExpensesList;

import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
	const [ enteredTitle, setEnteredTitle ] = useState('');
	const [ enteredAmount, setEnteredAmount ] = useState('');
	const [ enteredDate, setEnteredDate ] = useState('');

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};

		onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input type="text" onChange={titleChangeHandler} value={enteredTitle} />
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input type="number" min="0.00" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

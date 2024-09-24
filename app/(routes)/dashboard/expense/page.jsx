"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/dbConfig'; // Your database configuration
import { Expenses } from '@/utils/schema'; // Your schema definition
import { desc } from 'drizzle-orm'; // For sorting data

function ExpensesScreen() {
  const [expensesList, setExpensesList] = useState([]);

  // Fetch all expenses from the Expenses table
  const fetchAllExpenses = async () => {
    try {
      const result = await db
        .select() // Select all columns
        .from(Expenses) // From the 'Expenses' table
        .orderBy(desc(Expenses.id)); // Order by ID in descending order

      // Log the result to the console
      console.log("All Expenses Data:", result);

      // Set the fetched data in state
      setExpensesList(result);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  // useEffect to fetch expenses when the component is mounted
  useEffect(() => {
    fetchAllExpenses();
  }, []); // Runs once after the component mounts

  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold mb-4'>All Expenses</h2>
      <table className='min-w-full border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>ID</th>
            <th className='border border-gray-300 p-2'>Name</th>
            <th className='border border-gray-300 p-2'>Amount</th>
            <th className='border border-gray-300 p-2'>Budget ID</th>
            <th className='border border-gray-300 p-2'>Created By</th>
          </tr>
        </thead>
        <tbody>
          {expensesList.map((expense) => (
            <tr key={expense.id}>
              <td className='border border-gray-300 p-2'>{expense.id}</td>
              <td className='border border-gray-300 p-2'>{expense.name}</td>
              <td className='border border-gray-300 p-2'>${expense.amount}</td>
              <td className='border border-gray-300 p-2'>{expense.budgetId}</td>
              <td className='border border-gray-300 p-2'>{expense.createdBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesScreen;
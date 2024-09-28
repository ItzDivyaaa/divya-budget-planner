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
      
      <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
  <thead>
    <tr>
      <th className="bg-gray-100 border border-gray-300 p-2 text-left">ID</th>
      <th className="bg-gray-100 border border-gray-300 p-2 text-left">Name</th>
      <th className="bg-gray-100 border border-gray-300 p-2 text-left">Amount</th>
      <th className="bg-gray-100 border border-gray-300 p-2 text-left">Budget ID</th>
      <th className="bg-gray-100 border border-gray-300 p-2 text-left">Created By</th>
    </tr>
  </thead>
  <tbody>
    {expensesList.map((expense) => (
      <tr key={expense.id} className="hover:bg-gray-100">
        <td className="border border-gray-300 p-2">{expense.id}</td>
        <td className="border border-gray-300 p-2">{expense.name}</td>
        <td className="border border-gray-300 p-2">${expense.amount}</td>
        <td className="border border-gray-300 p-2">{expense.budgetId}</td>
        <td className="border border-gray-300 p-2">{expense.createdBy}</td>
      </tr>
    ))}
  </tbody>
</table>
{/* <table className="min-w-full border-collapse border border-primary-200 shadow-md rounded-lg overflow-hidden">
  <thead>
    <tr>
      <th className="bg-primary-100 text-primary-600 border border-primary-200 p-2 text-left">ID</th>
      <th className="bg-primary-100 text-primary-600 border border-primary-200 p-2 text-left">Name</th>
      <th className="bg-primary-100 text-primary-600 border border-primary-200 p-2 text-left">Amount</th>
      <th className="bg-primary-100 text-primary-600 border border-primary-200 p-2 text-left">Budget ID</th>
      <th className="bg-primary-100 text-primary-600 border border-primary-200 p-2 text-left">Created By</th>
    </tr>
  </thead>
  <tbody>
    {expensesList.map((expense) => (
      <tr key={expense.id} className="hover:bg-primary-50">
        <td className="border border-primary-200 p-2">{expense.id}</td>
        <td className="border border-primary-200 p-2">{expense.name}</td>
        <td className="border border-primary-200 p-2">${expense.amount}</td>
        <td className="border border-primary-200 p-2">{expense.budgetId}</td>
        <td className="border border-primary-200 p-2">{expense.createdBy}</td>
      </tr>
    ))}
  </tbody>
</table> */}
    </div>
  );
}

export default ExpensesScreen;
// "use client";
// import React, { useEffect, useState } from 'react';
// import { db } from '@/utils/dbConfig'; // Your database configuration
// import { Expenses } from '@/utils/schema'; // Your schema definition
// import { desc } from 'drizzle-orm'; // For sorting data

// // function ExpensesScreen({user}) {
// //   const [expensesList, setExpensesList] = useState([]);

// //   // Fetch all expenses from the Expenses table
// //   const fetchAllExpenses = async () => {
// //     try {
// //       console.log("login id",user?.primaryEmailAddress?.emailAddress)
// //       const result = await db
// //         .select() // Select all columns
// //         .from(Expenses) // From the 'Expenses' table
// //         // .where(eq(Expenses.createdBy, user?.primaryEmailAddress?.emailAddress))
// //         .orderBy(desc(Expenses.id));
// //          // Order by ID in descending order

// //       // // Log the result to the console
// //       console.log("All Expenses Data:", result);

// //       // Set the fetched data in state
// //       setExpensesList(result);
// //     } catch (error) {
// //       console.error("Error fetching expenses:", error);
// //     }
// //   };

// //   // useEffect to fetch expenses when the component is mounted
// //   useEffect(() => {
// //     fetchAllExpenses();
// //   }, []); // Runs once after the component mounts

// //   return (
// //     <div className='p-10'>
// //       <h2 className='text-2xl font-bold mb-4'>All Expenses</h2>
      
// //       <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
// //   <thead>
// //     <tr>
// //       <th className="bg-gray-100 border border-gray-300 p-2 text-left">ID</th>
// //       <th className="bg-gray-100 border border-gray-300 p-2 text-left">Name</th>
// //       <th className="bg-gray-100 border border-gray-300 p-2 text-left">Amount</th>
// //       <th className="bg-gray-100 border border-gray-300 p-2 text-left">Budget ID</th>
// //       <th className="bg-gray-100 border border-gray-300 p-2 text-left">Created By</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     {expensesList.map((expense) => (
// //       <tr key={expense.id} className="hover:bg-gray-100">
// //         <td className="border border-gray-300 p-2">{expense.id}</td>
// //         <td className="border border-gray-300 p-2">{expense.name}</td>
// //         <td className="border border-gray-300 p-2">${expense.amount}</td>
// //         <td className="border border-gray-300 p-2">{expense.budgetId}</td>
// //         <td className="border border-gray-300 p-2">{expense.createdBy}</td>
// //       </tr>
// //     ))}
// //   </tbody>
// // </table>

// //     </div>
// //   );
// // }
// function ExpensesScreen({ user }) {
//   const [expensesList, setExpensesList] = useState([]);

//   // Fetch all expenses from the Expenses table
//   const fetchAllExpenses = async () => {
//     try {
//       console.log("login id", user?.primaryEmailAddress?.emailAddress)
//       const result = await db
//         .select() // Select all columns
//         .from(Expenses) // From the 'Expenses' table
//         .where(eq(Expenses.createdBy, user?.primaryEmailAddress?.emailAddress)) // Filter by current user's email address
//         .orderBy(desc(Expenses.id)); // Order by ID in descending order

//       // Log the result to the console
//       console.log("All Expenses Data:", result);

//       // Set the fetched data in state
//       setExpensesList(result);
//     } catch (error) {
//       console.error("Error fetching expenses:", error);
//     }
//   };

//   // useEffect to fetch expenses when the component is mounted
//   useEffect(() => {
//     fetchAllExpenses();
//   }, []); // Runs once after the component mounts

//   return (
//     <div className='p-10'>
//       <h2 className='text-2xl font-bold mb-4'>All Expenses</h2>
      
//       <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
//   <thead>
//     <tr>
//       <th className="bg-gray-100 border border-gray-300 p-2 text-left">ID</th>
//       <th className="bg-gray-100 border border-gray-300 p-2 text-left">Name</th>
//       <th className="bg-gray-100 border border-gray-300 p-2 text-left">Amount</th>
//       <th className="bg-gray-100 border border-gray-300 p-2 text-left">Budget ID</th>
//       <th className="bg-gray-100 border border-gray-300 p-2 text-left">Created By</th>
//     </tr>
//   </thead>
//   <tbody>
//     {expensesList.map((expense) => (
//       <tr key={expense.id} className="hover:bg-gray-100">
//         <td className="border border-gray-300 p-2">{expense.id}</td>
//         <td className="border border-gray-300 p-2">{expense.name}</td>
//         <td className="border border-gray-300 p-2">${expense.amount}</td>
//         <td className="border border-gray-300 p-2">{expense.budgetId}</td>
//         <td className="border border-gray-300 p-2">{expense.createdBy}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//     </div>
//   );
// }

// // export default ExpensesScreen;

// export default ExpensesScreen;


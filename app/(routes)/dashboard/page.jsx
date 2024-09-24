"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CardInfo from './_components/CardInfo';
import { db } from '@/utils/dbConfig';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';
import BarChartDashboard from './_components/BarChartDashboard';

function dashboard() {
  const {user}=useUser();
  const [budgetList,setBugetList]=useState([]);
  useEffect(()=>{
    user&&getBudgetList();
  },[user])

  /*
  //Used to get budget list. 
  */ 

  const getBudgetList=async()=>{
    const result=await db.select({
      ...getTableColumns(Budgets),
      totalSpend:sql `sum(${Expenses.amount}::float)`.mapWith(Number),
      totalItems:sql `count(${Expenses.id})`.mapWith(Number)
    }).from(Budgets)
    .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id));


   setBugetList(result);
  }

  return (
    <div className='p-9'>
      <h2 className='font-bold text-gray-600 text-3xl'>Hi, {user?.fullName}! ✨</h2>
      <p className='text-gray-500'>Here's what's happening  with your money. Let's manage your expenses.</p>
      <CardInfo budgetList={budgetList}/>

      <div className='grid grid-cols-1 md:grid-cols-3 mt-6'>
        <div className='md:col-span-2'>
            <BarChartDashboard
            budgetList={budgetList}
            />
        </div>
        <div>
            Other Content
        </div>

      </div>

    </div>
  )
}

export default dashboard
import { PiggyBank } from 'lucide-react'
import React from 'react'

function CardInfo({budgetList}) {
  return (
    <div className='mt-7'>
        <div className='p-7 border rounded-lg'>
            <div>
            <h2 className='text-sm'>Total Budget</h2>
            <h2 className='font-bold text-2xl'>$15000</h2>
            </div>
            <PiggyBank className='bg-primary rounded-full p-3 h-12 w-12 text-white fill-current'
            />
        </div>
    </div>
  )
}

export default CardInfo
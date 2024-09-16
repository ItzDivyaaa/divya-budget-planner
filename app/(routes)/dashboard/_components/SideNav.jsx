import React from 'react'
import Image from 'next/image'
import { Layout, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'

function SideNav() {
    const menuList=[
        {
            id:1,
            name:'Dashboard',
            icon:Layout
        },
        {
            id:2,
            name:'Budgets',
            icon:PiggyBank
        },{
            id:3,
            name:'Expenses',
            icon:ReceiptText
        },{
            id:4,
            name:'Upgrade',
            icon:ShieldCheck
        }
    ]
  return (

    <div className='h-screen p-5 border shadow-md'>
        <Image src={'/logo.svg'} alt='logo' height={100} width={160}></Image>
        <div className='mt-5'>
            {menuList.map((menu,index)=> (

                <h2 className='flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md
                hover:text-primary hover:bg-blue-100'>
                    <menu.icon/>
                    {menu.name}</h2>
            ))}
        </div>

    </div>
  )
}

export default SideNav
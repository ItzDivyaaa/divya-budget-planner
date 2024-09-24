'use client';
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Layout, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'

function SideNav() {
    const router = useRouter();  // Access the router
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: Layout,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        },
        {
            id: 4,
            name: 'Upgrade',
            icon: ShieldCheck,
            path: '/dashboard/upgrade'
        }
    ]
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);  // Ensure the effect runs whenever the path changes

    return (
        <div className='h-screen p-5 border shadow-md'>
            <Image src={'/logo2.png'} alt='logo' height={100} width={160}></Image>
            <div className='mt-5'>
                {menuList.map((menu, index) => (
                    <h2
                        key={menu.id}  // Ensure each item has a unique key
                        className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md
                        hover:text-primary hover:bg-blue-100
                        ${path === menu.path && 'text-primary bg-blue-100'}`}
                        onClick={() => router.push(menu.path)}  // Navigate on click
                    >
                        <menu.icon />
                        {menu.name}
                    </h2>
                ))}
            </div>
            <div className='fixed bottom-5 p-5 flex gap-2 items-center'>
                <UserButton />
                Profile
            </div>
        </div>
    )
}

export default SideNav
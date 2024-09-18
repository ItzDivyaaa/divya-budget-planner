"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
  

function CreateBudget() {

    const [emojiIcon, setEmojiIcon]=useState('😊');
    const [openEmojiPicker, setOpenEmojiPicker]=useState(false);
    const [name,setName]=useState();
    const [amount,setAmount]=useState();

    const {user}=useUser();
    const onCreateBudget=async()=>{
        const result=await db.insert(Budgets)
        .values({
            name:name,
            amount:amount,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            icon:emojiIcon
        }).returning({insertedId:Budgets.id})

        if(result){
            
        }

    }

  return (
    <div>
        
        <Dialog>
  <DialogTrigger asChild><div className='bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed 
        cursor-pointer hover:shadow-md'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Budget</h2>
        </div></DialogTrigger>
  <DialogContent className="bg-white text-black">
    <DialogHeader>
      <DialogTitle>Create New Budget</DialogTitle>
      <DialogDescription>
        <div className='mt-5'>
        <Button variant="outline"
        size="lg"
        className="text-lg"
        onClick={()=>setOpenEmojiPicker(!openEmojiPicker)}
        >{emojiIcon}</Button>

      <div className='absolute'>
      <EmojiPicker
      open={openEmojiPicker}
      onEmojiClick={(e)=>{
        setEmojiIcon(e.emoji)
        setOpenEmojiPicker(false)
      }}
      />
    </div>
    <div>
        <h2>Budget Name</h2>
        <Input placeholder="e.g. Home Decor"
        onChange={(e)=>setName(e.target.value)}
        />
    </div>
    <div>
        <h2>Budget Amount</h2>
        <Input
        type="number"
        placeholder="5000"
        onChange={(e)=>setAmount(e.target.value)}
        />

    </div>
    <Button 
    disabled={!(name&&amount)}
    onClick={()=>onCreateBudget()}
    className="mt-5 w-full">Create Budget</Button>
    </div>
      </DialogDescription>

    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default CreateBudget
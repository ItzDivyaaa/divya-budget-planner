"use client"
import { Button } from '@/components/ui/button'
import { PenBox } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { useUser } from '@clerk/nextjs'
import { Input } from '@/components/ui/input'

function EditBudget() {
    const [emojiIcon, setEmojiIcon]=useState('😊');
    const [openEmojiPicker, setOpenEmojiPicker]=useState(false);
    const [name,setName]=useState();
    const [amount,setAmount]=useState();

    const {user}=useUser();
    const onUpdateBudget=()=>{

    }

  return (
    <div>
     <Dialog>
  <DialogTrigger asChild>
  <Button classname='flex gap-2'> <PenBox/>Edit</Button>

  </DialogTrigger>
  <DialogContent className="bg-white text-black">
    <DialogHeader>
      <DialogTitle>Update New Budget</DialogTitle>
      <DialogDescription>
        <div className='mt-5'>
        <Button variant="outline"
        size="lg"
        className="text-lg"
        onClick={()=>setOpenEmojiPicker(!openEmojiPicker)}
        >{emojiIcon}</Button>

      <div className='absolute z-20'>
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
   
    </div>
      </DialogDescription>

    </DialogHeader>
    <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          <Button 
    disabled={!(name&&amount)}
    onClick={()=>onUpdateBudget()}
    className="mt-5 w-full">Update Budget</Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>
</div>
  )
}

export default EditBudget
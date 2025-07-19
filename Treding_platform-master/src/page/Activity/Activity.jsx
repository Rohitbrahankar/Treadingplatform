

import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableRow, TableHeader, TableHead
} from "@/components/ui/table";
import {
  Avatar, AvatarImage
} from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { IoSaveSharp } from 'react-icons/io5';

const Activity=() => {
   
  return (
    <div className='lg:px-20 p-5'>
          <h1 className='flex flex-start font-bold text-black text-3xl'>Activity </h1>
           <Table>
        <TableHeader>
    <TableRow>
      <TableHead >Data & Time </TableHead>
       <TableHead >Trading Pair </TableHead>
      <TableHead > Buy price</TableHead>
      <TableHead >Sell price</TableHead>
      <TableHead >Order type </TableHead>
      <TableHead >Profit/Loss</TableHead>
    <TableHead className='text-right'>Value </TableHead>
    </TableRow>
  </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1,1,1].map((item, index) => (
            <TableRow key={index}>
             
              <TableCell>
                <p>
                  2025/05/03
                </p>
                <p className='text-gray-500'> 
                  12:39:32
                </p>
              </TableCell>
               <TableCell className="font-medium flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://media.istockphoto.com/id/502347558/photo/bitcoin-on-white.jpg?s=612x612&w=0&k=20&c=s8Q2mGv9rq8-lLhq33SzK4RPl5n5wYUwr_66ZBDA6b4=" />
                </Avatar>
                <span>BitCoin</span>
              </TableCell>
              <TableCell>$66</TableCell>
              <TableCell>$2,087,549</TableCell>
              <TableCell>-0.07062%</TableCell>
              <TableCell>$105,003</TableCell>
              <TableCell className='text-right'>$105,003</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
  )
}

export default Activity

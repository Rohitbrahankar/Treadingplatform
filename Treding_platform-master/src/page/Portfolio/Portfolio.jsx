import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@/components/ui/table"; // adjust the path as needed
import {
  Avatar,
  AvatarImage
} from "@/components/ui/avatar"; // adjust the path if needed
import {
  TableHeader,
  TableHead
} from "@/components/ui/table"; // 






const Portfolio=() => {
  return (
    <div className='lg:px-20 p-5' >
      <h1 className='flex  flex-start font-bold  text-black text-3xl '>Portfolio</h1>
      <Table>
              <TableHeader>
          <TableRow>
            <TableHead  >Assets</TableHead>
             <TableHead >Price</TableHead>
            <TableHead > Unit </TableHead>
            <TableHead >Change </TableHead>
            <TableHead >Change(%)</TableHead>
            <TableHead >Value</TableHead>
          </TableRow>
        </TableHeader>
              <TableBody>
                {[1, 1, 1, 1, 1,1].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="https://media.istockphoto.com/id/502347558/photo/bitcoin-on-white.jpg?s=612x612&w=0&k=20&c=s8Q2mGv9rq8-lLhq33SzK4RPl5n5wYUwr_66ZBDA6b4=" />
                      </Avatar>
                      <span>BitCoin</span>
                    </TableCell>
                    <TableCell>BTC</TableCell>
                    <TableCell>25,866,706,828</TableCell>
                    <TableCell>2,087,549,297,958</TableCell>
                    <TableCell>-0.07062%</TableCell>
                    <TableCell>$105,003</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>


    </div>
  )
}

export default Portfolio

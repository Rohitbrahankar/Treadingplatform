import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoSaveSharp } from "react-icons/io5";

const Withdrawal = () => {
  return (
    <div className="lg:px-20 p-5">
      <h1 className="flex flex-start font-bold text-black text-3xl">
        Activity{" "}
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Method   </TableHead>
            <TableHead> Amount   </TableHead>
            
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="flex start-0">
                <p>2025/05/03</p>
                
              </TableCell>
              
              <TableCell>Bank  </TableCell>
              <TableCell>$2,087,549</TableCell>
              
              <TableCell className="text-right"> 
                  
                345 </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;

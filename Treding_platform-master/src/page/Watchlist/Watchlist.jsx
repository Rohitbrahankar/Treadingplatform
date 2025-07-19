import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableRow, TableHeader, TableHead
} from "@/components/ui/table";
import {
  Avatar, AvatarImage
} from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { IoSaveSharp } from 'react-icons/io5';

const Watchlist = () => {
  // Step 1: Add state
  const [watchlist, setWatchlist] = useState([
    { id: 1, name: "Bitcoin", symbol: "BTC", volume: "25,866,706,828", marketCap: "2,087,549,297,958", change: "-0.07062%", price: "$105,003" },
    { id: 2, name: "Ethereum", symbol: "ETH", volume: "10,123,456,789", marketCap: "1,234,567,890,123", change: "+1.23%", price: "$3,000" },
    { id: 3, name: "Ripple", symbol: "XRP", volume: "5,678,901,234", marketCap: "456,789,012,345", change: "+0.45%", price: "$1.50" },
    { id: 4, name: "Litecoin", symbol: "LTC", volume: "2,345,678,901", marketCap: "123,456,789,012", change: "-0.12%", price: "$200" },   
    { id: 5, name: "Cardano", symbol: "ADA", volume: "1,234,567,890", marketCap: "89,012,345,678", change: "+2.34%", price: "$0.50" }
    
  ]);

  // Step 2: Remove item by id
  const handleRemoveToWatchlist = (id) => {
    setWatchlist(prevList => prevList.filter(item => item.id !== id));
  };

  return (
    <div className='lg:px-20 p-5'>
      <h1 className='flex flex-start font-bold text-black text-3xl'>Watchlist</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className='py-5'>Coins</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className='text-right text-red-600'>Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://media.istockphoto.com/id/502347558/photo/bitcoin-on-white.jpg?s=612x612&w=0&k=20&c=s8Q2mGv9rq8-lLhq33SzK4RPl5n5wYUwr_66ZBDA6b4=" />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.volume}</TableCell>
              <TableCell>{item.marketCap}</TableCell>
              <TableCell>{item.change}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell className='text-right'>
                <Button
                  variant="ghost"
                  onClick={() => handleRemoveToWatchlist(item.id)}
                  className="bg-white text-red-600 hover:bg-red-600 hover:text-white"
                >
                  <IoSaveSharp className='w-6 h-6' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Watchlist;

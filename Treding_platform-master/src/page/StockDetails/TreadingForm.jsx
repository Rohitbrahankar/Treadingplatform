import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const TreadingForm = () => {
  const [orderType, setOrderType] = useState("BUY");

  return (
    <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-xl w-full max-w-lg mx-auto space-y-8 text-white">
      {/* Amount Section */}
      <div className="flex gap-4 items-center justify-between">
        <Input
          className="py-6 px-4 text-white bg-gray-800 border border-gray-600 focus:outline-none rounded-md w-full"
          placeholder="Enter Amount..."
          type="number"
          name="amount"
        />
        <div>
          <p className="border border-gray-600 text-2xl flex justify-center items-center w-36 h-14 rounded-md">
            4567
          </p>
        </div>
      </div>

      {/* Optional Error */}
      {false && (
        <h1 className="text-red-500 text-center pt-2">
          Insufficient Wallet Balance to buy
        </h1>
      )}

      {/* Coin Info */}
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
            alt="Bitcoin"
          />
        </Avatar>

        <div className="flex items-center gap-2">
          <p className="text-lg font-medium">BTC</p>
          <DotIcon className="text-gray-400 w-4 h-4" />
          <p className="text-gray-400">Bitcoin</p>
          <p className="text-green-500 ">$23456784</p>
        </div>
      </div>

      {/* Order Type */}
      <div className="flex items-center justify-between text-sm text-gray-300">
        <p>Order Type</p>
        <p className="text-white font-semibold">Market Order</p>
      </div>

      {/* Cash or Quantity */}
      <div className="text-sm">
        <p>{orderType === "BUY" ? "Available Cash" : "Available Quantity"}</p>
        <p className="flex justify-end ">
          {orderType=="BUY" ? 9000 : 23.80 }
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <Button
          className={`w-full py-6 text-white 
            ${
            orderType === "SELL" ? "bg-red-500" : "bg-white text-black"
           }`}
        >
          {orderType}
        </Button>

        <Button
          onClick={() =>
            setOrderType((prev) => (prev === "BUY" ? "SELL" : "BUY"))
          }
          className="w-full py-6 bg-transparent border border-gray-600 text-gray-300 hover:text-white" >
          {orderType === "BUY" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>
    </div>
  );
};

export default TreadingForm;

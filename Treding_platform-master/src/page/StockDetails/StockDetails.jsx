import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutline } from "@heroicons/react/24/outline";
import { DotIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TreadingForm from "./TreadingForm";
// import Stockchart from "./Stockchart";

import React from "react";
import Stockchart from "../Home/Stockchart";

const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between items-center flex-wrap gap-6">
        {/* Left Side: Avatar + Coin Info */}
        <div className="flex items-center gap-4">
          {/* ✅ Use a valid image or local asset */}
          <Avatar>
            <AvatarImage
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              alt="Bitcoin"
            />
          </Avatar>

          <div className="flex items-center gap-2">
            <p className="text-lg font-medium">BTC</p>
            <DotIcon className="text-gray-400 w-4 h-4" />
            <p className="text-gray-500">Bitcoin</p>
          </div>
        </div>

        {/* Right Side: Price Info */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-3">
          <p className="text-xl font-bold text-black">$6,553</p>
          <p className="text-sm text-red-600">
            <span>-1,324,566,788</span>
            <span className="ml-1">(-0.29803%)</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            {true ? (
              <BookmarkSolid className="h-6 w-6 text-blue-600" />
            ) : (
              <BookmarkOutline className="h-6 w-6 text-gray-500" />
            )}
          </Button>

          <Dialog className="fill-slate-700">
            <DialogTrigger>
              <Button size="lg"> Tread </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-white font-semibold ">
                  How much do you want to spend ?{" "}
                </DialogTitle>
              </DialogHeader>
              <TreadingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-10">
             <Stockchart />
      </div>
      
    </div>
  );
};

export default StockDetails;

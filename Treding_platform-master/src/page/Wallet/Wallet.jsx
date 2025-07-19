import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CopyIcon,
  DollarSign,
  WalletIcon,
  RotateCcw,
  UploadIcon,
  DownloadIcon,
  ShuffleIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TopupForm from "./TopupForm";
import TransferForm from "./TransferForm";
import WithDrawlFrom from "./WithDrawlFrom";
import { IoReload } from "react-icons/io5";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pt-20 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="text-2xl font-bold text-black">
                    Wallet
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">#A475Ed</p>
                    <CopyIcon
                      className="cursor-pointer hover:text-slate-300"
                      size={16}
                    />
                  </div>
                </div>
              </div>
              <RotateCcw
                className="cursor-pointer hover:text-slate-300"
                size={16}
              />
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center">
              <DollarSign className="text-black" size={24} />
              <span className="text-2xl font-semibold text-black ml-2">
                12,345.67
              </span>
            </div>

            <div className="flex gap-7 mt-5">
              {/* Add Money */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-md shadow-slate-800">
                    <UploadIcon />
                    <span className="text-sm font-semibold text-black mt-2">
                      Add Money
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white font-bold">
                  <DialogHeader>
                    <DialogTitle>Add Money to Wallet</DialogTitle>
                  </DialogHeader>
                  <TopupForm />
                </DialogContent>
              </Dialog>

              {/* Withdraw Money */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-md shadow-slate-800">
                    <DownloadIcon />
                    <span className="text-sm font-semibold text-black mt-2">
                      Withdraw
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white font-bold">
                  <DialogHeader>
                    <DialogTitle>Withdraw Money</DialogTitle>
                  </DialogHeader>
                  <WithDrawlFrom />
                </DialogContent>
              </Dialog>

              {/* Transfer Money */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-md shadow-slate-800">
                    <ShuffleIcon />
                    <span className="text-sm font-semibold text-black mt-2">
                      Transfer
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white font-bold">
                  <DialogHeader>
                    <DialogTitle className="flex  justify-center">
                      Transfer To Other Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <div className="py-5 pt-10">
          <div className="flex items-center gap-2 pb-5">
            <h1 className="text-2xl font-semibold">History</h1>
            <IoReload className="cursor-pointer hover:text-gray-400" />
          </div>

          <div className="space-y-5">
            {/* History Card */}
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <Card className="px-5 py-4" key={index}>
                <div className="flex justify-between items-center">
                  {/* Left Side: Icon and Info */}
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon />
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                      <h1 className="font-medium">Buy asset</h1>
                      <p className="text-sm text-gray-500">2025-06-23</p>
                    </div>
                  </div>

                  {/* Right Side: Amount */}
                  <div>
                    <p className="text-green-500 font-semibold text-lg">
                      999 USD
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

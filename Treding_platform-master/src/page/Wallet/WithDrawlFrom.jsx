import React from "react";
import { Input } from "@/components/ui/input"; // ✅ Correct Input import
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const WithDrawlForm = () => {
  const [amount, setAmount] = React.useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Withdraw amount:", amount);
  };

  return (
    <div className="pt-10 space-y-5">
      {/* Balance Card */}
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-white text-xl font-bold px-5 py-4">
        <p>Available balance</p>
        <p>$9999</p>
      </div>

      {/* Withdrawal Input */}
      <div className="flex flex-col items-center">
        <h1 className="mb-2 text-lg font-medium">Enter Withdrawal Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          type="number"
          placeholder="$9999"
          className="withdrawlInput py-7 border text-2xl text-center"
        />
      </div>
      <div>
        <p className="pb-2"> Transfer to </p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img
            className="h-8 w-8"
            src="https://cdn.vectorstock.com/i/1000v/06/78/classical-bank-icon-vector-1770678.jpg"
            alt=""
          />
          <div>
            <p>State bank of India </p>
            <p> ***********345</p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl  ">
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithDrawlForm;

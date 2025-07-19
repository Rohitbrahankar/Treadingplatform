import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };
  const handleSubmit = () => {
    console.log(amount, paymentMethod);
  };

  return (
    <div className="pt-10 space-y-6">
      {/* Amount input */}
      <div>
        <h1 className="pb-1 font-medium">Enter amount to top up</h1>
        <input
          onChange={handleChange}
          value={amount}
          type="number"
          placeholder="₹9999"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      {/* Payment method */}
      <div>
        <h1 className="pb-1 font-medium">Select payment method</h1>
        <RadioGroup
          value={paymentMethod}
          onValueChange={handlePaymentMethodChange}
          className="flex gap-4"
        >
          {/* Razorpay option */}
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem value="RAZORPAY" id="r1" />
            <Label htmlFor="r1" className="flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTyQr77jTaet0ai9jeKErezXc7uqzGDKIhQ&s"
                alt="Razorpay Logo"
                className="h-6 w-6"
              />
              Razorpay
            </Label>
          </div>

          {/* PayPal option */}
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem value="PAYPAL" id="p1" />
            <Label htmlFor="p1" className="flex items-center gap-2">
              <img
                src="https://images.ctfassets.net/y6oq7udscnj8/7pGYJSsSu8IjvuscnxPcng/ae9dc800b649640406b5bfa1ae9b02d6/PayPal.png?w=592&h=368&q=50&fm=png"
                alt="PayPal Logo"
                className="h-6 w-6"
              />
              PayPal
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Optional Submit Button */}
      <DialogClose className="w-full">
        <div className="pt-4">
          <Button onClick={handleSubmit} className="w-full">
            Continue
          </Button>
        </div>
      </DialogClose>
    </div>
  );
};

export default TopupForm;

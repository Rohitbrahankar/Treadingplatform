import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PayementDetailsForm from "./PayementDetailsForm";

const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>

  { false ?
      <Card>
        <CardHeader>
          <CardTitle className="font-bold"> Yes Bank </CardTitle>
          <CardDescription>*******12345</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center">
            <p className="w-32 font-medium text-gray-600">A/C Holder</p>
            <p>Rohit</p>
          </div>

          <div className="flex items-center">
            <p className="w-32 font-medium text-gray-600">IFSC</p>
            <p className="text-gray-800">YESB00000007</p>
          </div>
        </CardContent>
      </Card> :

      <Dialog>
        <DialogTrigger>
          <Button className="mt-6 flex gap-3 px-5 py-3">
            {" "}
            Add Payment Details
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payement Details </DialogTitle>
          </DialogHeader>
          <PayementDetailsForm />
        </DialogContent>
      </Dialog>
  }
    </div>
  );
};

export default PaymentDetails;

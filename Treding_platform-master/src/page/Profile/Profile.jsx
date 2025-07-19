import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, VerifiedIcon } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AccountVarificationForm from "./AccountVarificationForm";
import { useSelector } from "react-redux";

const Profile = () => {
    // const{auth}=useSelector(store=>store.auth);

    const auth = useSelector(store => store.auth);


  const handleEnableTwoStepVerification=()=>{
    console.log("two step verification");
  }
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle className="flex items-center  justify-center font-bold  ">
              Your Information{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex ">
                  <p className="w--[9rem] font-semibold ">Email : </p>
                  <p className="text-gray-500 gap-5 space-x-2">
                    {auth?.user.email }
                    {/* temp@gmail.com */}
                  </p>
                </div>
                {/*Full name  */}
                <div className="flex ">
                  <p className="w--[9rem] font-semibold ">Full Name : </p>
                  <p className="text-gray-500 gap-5 space-x-2"> {auth?.user?.full_name} </p>
                </div>

                {/*DOB */}

                <div className="flex ">
                  <p className="w--[9rem] font-semibold ">Date of Birth : </p>
                  <p className="text-gray-500 gap-5 space-x-2">
                    {" "}
                    DD - MM - YYYY
                  </p>
                </div>

                {/*Nationality  */}
                <div className="flex ">
                  <p className="w--[9rem] font-semibold"> Nationality : </p>
                  <p className="text-gray-500 gap-5 space-x-2"> Indian </p>
                </div>
              </div>
              {/*Address */}
              <div className="space-y-7">
                <div className="flex ">
                  <p className="w--[9rem] font-semibold ">Address : </p>
                  <p className="text-gray-500 gap-5 space-x-2">
                    {" "}
                    opposite padole traders
                  </p>
                </div>

                {/* City  */}
                <div className="flex ">
                  <p className="w--[9rem] font-semibold ">City : </p>
                  <p className="text-gray-500 gap-5 space-x-2"> Nagpur </p>
                </div>

                {/* PostCode  */}

                <div className="flex ">
                  <p className="w--[9rem] font-semibold ">Postcode : </p>
                  <p className="text-gray-500 gap-5 space-x-2"> 441910</p>
                </div>

                {/*Country */}
                <div className="flex ">
                  <p className="w--[9rem] font-semibold"> Country : </p>
                  <p className="text-gray-500 gap-5 space-x-2"> India </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card>
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center justify-center font-bold gap-3 start-0">
                2 Step Verification
                {true ? (
                  <Badge className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">
                    <VerifiedIcon className="w-4 h-4" />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-sm">
                    Disabled
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog className='text-white '>
                  <DialogTrigger>
                    <Button> Enable Two step Verification </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle  className='text-white font-bold flex justify-center  '>Verify Your Account </DialogTitle>
                     <AccountVarificationForm handleSubmit={handleEnableTwoStepVerification}/>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

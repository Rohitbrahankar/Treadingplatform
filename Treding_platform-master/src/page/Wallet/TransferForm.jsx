import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Wallet } from 'lucide-react';
import React, { useState } from 'react';   


  const TransferForm = () => {
      const [formData  , setFormData]= React.useState(
        {
            amount:'',
            wallet:'',
            purpose:'',

        } );

      
    
      const handleChange = (e) => {
           setFormData({... formData , [e.target.name] :e.target.value})
      };

  const handleSubmit=()=>{
    console.log(formData)
  };

        return (
          <div className="pt-10 space-y-6">
            <div>
                <h1 className="pb-1 font-medium">
                    Enter amount to transfer</h1>
                <input
                 name="amount"
                 onChange={handleChange}
                 value={FormData.amount}
                  type="number"
                  placeholder="$9999"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div>
              <h1 className="pb-1 font-medium">
                    Walet id to transfer </h1>
                <input
                name="wallet"
                onChange={handleChange}
                value={FormData.amount}
                  type="text"
                  placeholder="#ADEF3445"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                
            </div>
            <div>
                  <h1 className="pb-1 font-medium">
                    Purpose</h1>
                <input
                  type="text"
                   onChange={handleChange}
                     value={FormData.porpose}
                     name="purpose"
                  placeholder="Gift to friend"
                 className="border border-gray-300 rounded-md p-2 w-full"/>
               
            </div>

            <DialogClose>
            <Button onClick={handleSubmit}
                className='flex items-center justify-center w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors'>
                    Send
                </Button>
            </DialogClose>
           
               
          </div>
        );
  }
  export default TransferForm;
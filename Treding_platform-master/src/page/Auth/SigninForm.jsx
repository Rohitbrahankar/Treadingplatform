import React, { use } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from "react-hook-form";
import { login } from '@/State/Auth/Action';  
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


const SigninForm = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();


  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const onSubmit = (values) => {
  //   dispatch(login({values, navigate})); // Dispatch the login action with values and navigate
  //   // console.log("Submitted values:", values);
  //   // navigate("./"); // ✅ redirect after submission
  // };
  const onSubmit = (values) => {
  console.log("Submitting login:", values);
  dispatch(login({ data: values, navigate }));
};


  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full text-white">
          
          <FormField
            control={form.control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md"
                    placeholder="you@gmail.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md"
                    placeholder="********"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full py-4 text-lg bg-white text-black hover:bg-gray-200"
            
          >
            Log in
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;

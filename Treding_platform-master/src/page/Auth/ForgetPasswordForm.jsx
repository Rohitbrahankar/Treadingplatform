import React from 'react';
import { useForm } from "react-hook-form";
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

const ForgetPasswordForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Submitted values:", values);
    // TODO: send values to API here
  };

  return (
    <div className="w-full px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 text-white w-full sm:w-80 md:w-96"
        >
          <FormField
            control={form.control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input
                    className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="temp@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            onClick={"./SigninForm "}
            className="w-full py-4 text-lg bg-white text-black hover:bg-gray-200 transition"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgetPasswordForm;

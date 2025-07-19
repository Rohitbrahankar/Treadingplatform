// import React from 'react';
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useDispatch } from 'react-redux';
// import { register } from '@/State/Auth/Action';

// const SignupForm = () => {
//   const  dispatch = useDispatch();
//   const form = useForm({
//     defaultValues: {
//       full_name: "",
//        Email: "",
//       password: "",
//       ConformPassword: "",
//     },
//   });

//   const onSubmit = (values) => {
//     dispatch(register(values));
//     console.log("Submitted values:", values);
//     // TODO: send values to API here
//   };

//   return (
//     <div className="">
//       <h1 className='text-white font-semibold gap-2'>Create Account</h1>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  text-white">
//           {/* Account Holder Name */}
//           <FormField
//             control={form.control}
//             name="Full name "
//             rules={{ required: " name is required" }}
//             render={({ field }) => (
//               <FormItem>
//                 {/* <FormLabel className="start-0 text-start">Full name </FormLabel> */}
//                 <FormControl>
//                   <Input
//                     className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                     placeholder="Enter  name"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Bank Name */}
//           <FormField
//             control={form.control}
//             name="Email"
//             rules={{ required: "Email is required" }}
//             render={({ field }) => (
//               <FormItem>
//                 {/* <FormLabel>Email</FormLabel> */}
//                 <FormControl>
//                   <Input
//                     className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                     placeholder="Email"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* IFSC Code */}
//           <FormField
//             control={form.control}
//             name="Password"
//             rules={{ required: "Password  is required" }}
//             render={({ field }) => (
//               <FormItem>
//                 {/* <FormLabel>Password </FormLabel> */}
//                 <FormControl>
//                   <Input
//                     className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                     placeholder="Password "
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Account Number */}
//           {/* <FormField
//             control={form.control}
//             name="accountNumber"
//             rules={{ required: "Account number is required" }}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Account Number</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                     placeholder="********789"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} */}
//           {/* /> */}

//           {/* Submit Button */}
//           <Button type="submit" className="w-full mt-4 py-4 text-lg bg-white text-black hover:bg-gray-200 transition">
//             Save
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default SignupForm;

// import React from 'react';
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useDispatch } from 'react-redux';
// import { register } from '@/State/Auth/Action';

// const SignupForm = () => {
//   const dispatch = useDispatch();

//   const form = useForm({
//     defaultValues: {
//       fullName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = (values) => {
//     // Only send required fields to the backend
//     const { fullName, email, password } = values;
//     dispatch(register({ fullName, email, password }));
//     console.log("Submitted values:", { fullName, email, password });
//   };

//   return (
//     <div>
//       <h1 className='text-white font-semibold gap-2'>Create Account</h1>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">

//           {/* Full Name */}
//           <FormField
//             control={form.control}
//             name="fullName"
//             rules={{ required: "Full name is required" }}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                     placeholder="Enter your full name"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Email */}
//           <FormField
//             control={form.control}
//             name="email"
//             rules={{ required: "Email is required" }}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                     placeholder="Enter your email"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Password */}
//           <FormField
//             control={form.control}
//             name="password"
//             rules={{ required: "Password is required" }}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     type="password"
//                     className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                     placeholder="Enter password"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Confirm Password */}
//           <FormField
//             control={form.control}
//             name="confirmPassword"
//             rules={{
//               required: "Please confirm your password",
//               validate: (value) =>
//                 value === form.getValues("password") || "Passwords do not match",
//             }}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     type="password"
//                     className="w-full bg-transparent border border-white/50 placeholder-white/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                     placeholder="Confirm password"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full mt-4 py-4 text-lg bg-white text-black hover:bg-gray-200 transition"
//           >
//             Create Account
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default SignupForm;


import React from 'react';
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from 'react-redux';
import { register } from '@/State/Auth/Action';

const SignupForm = () => {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values) => {
    const { full_name, email, password } = values;

    // OPTIONAL: Password match check
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(register({ full_name, email, password }));
    console.log("Submitted values:", { full_name, email, password });
  };

  return (
    <div>
      <h1 className='text-white font-semibold'>Create Account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">

          <FormField
            control={form.control}
            name="full_name"
            rules={{ required: "Full name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            rules={{ required: "Confirm password is required" }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-4 bg-white text-black">
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;

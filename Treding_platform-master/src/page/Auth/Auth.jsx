import React from 'react';
import "./Auth.css";
import SignupForm from './SignupForm';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import ForgetPasswordForm from './ForgetPasswordForm';
import SigninForm from './SigninForm';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='h-screen relative authContainer'>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#030712] bg-opacity-50'>
        <div className='bgBlure absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        transform flex flex-col justify-center items-center 
                        h-[30rem] w-[30rem] rounded-md bg-black bg-opacity-10 
                        shadow-2xl shadow-white'>
          <h1 className='text-6xl font-bold pb-9 text-white'>Dhan Trading</h1>

          {location.pathname === "/signup" ? (
            <section className='w-[70]'>
              <SignupForm />

              {/* Sign in redirect */}
              <div className='flex items-center justify-center text-white mt-4'>
                <span>Have an account?</span>
                <Button onClick={() => navigate("/signin")} variant="ghost" className='ml-1'>
                  Sign in
                </Button>
              </div>

              {/* Forgot Password link */}
              {/* */}
            </section>
          ) : location.pathname === "/forgot-password" ? (
            <section>
              <ForgetPasswordForm />
              <div className='flex items-center justify-center text-white mt-4'>
                <span>Back to login?</span>
                <Button onClick={() => navigate("/signin")} variant="ghost" className='ml-1'>
                  Sign in
                </Button>
              </div>
            </section>
          ) : (
            <section>
              <SigninForm />
              <div className='flex items-center justify-center text-white mt-4'>
                <span>Don't have an account?</span>
                <Button onClick={() => navigate("/signup")} variant="ghost" className='ml-1'>
                  Sign up
                </Button>
              </div>
              <div className='flex items-center justify-center text-white mt-2'>
                {/* <span>Forgot your password?</span> */}
                <Button onClick={() => navigate("/forgot-password")} variant="ghost" className='ml-1'>
                  Reset here
                </Button>
              </div> 
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

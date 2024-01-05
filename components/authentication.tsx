'use client';
import React from "react";
import { useSearchParams } from "next/navigation";
import ValidationButton from "./validation-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner";

export default function Authentication(props:{user:any}) {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  // If we have the email param
  // It means we are asking for OTP
  if(email){
    return(
    <Drawer open dismissible={false}>
      <DrawerTrigger
        className="rounded-none bg-blue-100/50 dark:bg-blue-900/50 px-3.5 py-2.5 text-sm  text-blue-600 shadow-sm hover:bg-blue-200/50 dark:hover:bg-blue-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        Login
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>One Time Password</DrawerTitle>
          <DrawerDescription>Please enter OTP code you received</DrawerDescription>
        </DrawerHeader>
                <form 
                  id="otp-form"
                  className="flex-1 flex  w-full  justify-center text-foreground  bg-gray-100 dark:bg-gray-800"
                  action="/auth/valid-otp"
                  method="post">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="rounded-md px-4 py-2 bg-inherit border mb-6 dark:text-white text-black dark:bg-white dark:border-black max-w-5xl w-fit hidden"
                      defaultValue={email?email?.toString():""}
                    />
                    <input
                      type="otp"
                      name="otp"
                      id="otp"
                    className="bg-transparent  appearance-none caret-blue-500 border-none ring-focus  focus:outline-none focus:ring-0 text-left flex-1 dark:text-white px-2"
                      autoComplete="one-time-code"
                      placeholder="Enter OTP Code"
                    />
                    <ValidationButton></ValidationButton>
                </form>
        <DrawerFooter>
          <DrawerClose>
            {/* <Button variant="outline">Cancel</Button> */}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    )
  }

  if(props.user){
    return(
      <form action="/auth/sign-out" method="post">
        <button 
          type="submit"
          className="rounded-none bg-red-100/50  dark:bg-red-900/50 px-3.5 py-2.5 text-sm  text-red-600 shadow-sm hover:bg-red-100/30 dark:hover:bg-red-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          onClick={()=>toast("Logging out")}
        >
          Log Out
        </button>
      </form>
    )
  }

  return(
    <Drawer>
      <DrawerTrigger
        className="rounded-none bg-blue-100/50 dark:bg-blue-900/50 px-3.5 py-2.5 text-sm  text-blue-600 shadow-sm hover:bg-blue-200/50 dark:hover:bg-blue-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        Login
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Authentication</DrawerTitle>
          <DrawerDescription>Please enter a valid email address</DrawerDescription>
        </DrawerHeader>
          <form
                  className="ml-4 mr-4 flex-1 flex  justify-center text-foreground  bg-gray-100 dark:bg-gray-800"
                  action="/auth/sign-otp"
                  method="post"
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="bg-transparent  appearance-none caret-blue-500 border-none ring-focus  focus:outline-none focus:ring-0 text-left flex-1 dark:text-white px-2"
                    placeholder="youremail@domain.com"
                  />
                  <ValidationButton></ValidationButton>
                </form>
        <DrawerFooter>
          {/* <Button>Submit</Button> */}
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )

  
}




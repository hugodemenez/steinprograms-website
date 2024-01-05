"use client";
import React, { useState } from "react";
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
import { sendOTP, validateOTP } from "./server/otp";
import { ReloadIcon } from "@radix-ui/react-icons"
import { logout } from "./server/user";


export default function Authentication(props:{user:any}) {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [sent, setSent] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  // If there is a user, display log out button
  if(props.user){
    return(
        <Button 
          type="submit"
          className="rounded-none bg-red-100/50  dark:bg-red-900/50 px-3.5 py-2.5 text-sm  text-red-600 shadow-sm hover:bg-red-100/30 dark:hover:bg-red-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          onClick={
            async ()=>{
              toast("Logging out")
              await logout()
              setEmail('')
              setToken('')
              setSent(false)
              setLoading(false)
            }
          }
        >
          Log Out
        </Button>
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
        <div className="flex gap-4 flex-col max-w-sm mx-auto">
          <Input
            className="text-lg"
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            disabled={sent}
            placeholder="youremail@domain.com"
            onChange={
              //Update email var
              (e) => setEmail(e.target.value)
            }
          />
          {!sent?
          <>
          {loading?
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>   
            :
          <Button
            onClick={async ()=>{
              setLoading(true)
              const response = await sendOTP(email);
              setLoading(false)
              response.errorMessage?toast(response.errorMessage):setSent(true)
            }}>
            Submit
          </Button>
        }
          </>
          :
          <>
          <Input
          className="text-lg" 
          placeholder="Enter your OTP"
          onChange={
              //Update email var
              (e) => setToken(e.target.value)
            }
          />
          {loading?
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>   
          :
          <Button
            onClick={async ()=>{
              setLoading(true)
              const response = await validateOTP(email,token);
              setLoading(false)
              response.errorMessage?toast(response.errorMessage):setSent(true)
              toast("Logged in")
            }}>
            Submit
          </Button>
        }
          </>
        }
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )

  
}




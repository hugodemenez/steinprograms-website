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
import { logout } from "./server/database";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useMediaQuery } from "@/hooks/use-media-query";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AuthenticationButton(props: { user: any}) {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [sent, setSent] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [logoutLoader, setLogoutLoader] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const isDesktop = useMediaQuery("(min-width: 640px)");

  function resetAuth() {
    setEmail('')
    setToken('')
    setSent(false)
    setLoading(false)
    setOpen(false)
  }

  // If there is a user, display log out button

  if (props.user) {
    return (
      <Button
        type="submit"
        variant='destructive'
        onClick={
          async () => {
            setLogoutLoader(true)
            await logout()
            resetAuth()
            setLogoutLoader(false)
          }
        }
      >
        {logoutLoader ?
          <div className="flex gap-2 items-center">
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Logging out
          </div>
          :
          <div className="flex items-center">
          <LogOut /> 
          </div>
        }
      </Button>
    )
  }

  // If there is no user, display login button
  // Either drawer or modal depending on screen size

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          asChild
        >
          <Button
          variant='default'
          onClick={()=>setOpen(true)}
          >
            connect
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Authentication</DialogTitle>
            <DialogDescription>
              {!sent ? "Please enter a valid email address" : "Check " + email + " inbox"}
            </DialogDescription>
          </DialogHeader>
          <form className="flex gap-4 flex-col max-w-sm mx-auto">
            {!sent ?
              <>
                <Input
                  className="text-lg"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  disabled={sent}
                  placeholder="youremail@domain.com"
                  value={email}
                  onChange={
                    //Update email var
                    (e) => setEmail(e.target.value)
                  }
                />
                {loading ?
                  <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                  :
                  <Button
                    onClick={async () => {
                      setLoading(true)
                      const response = await sendOTP(email);
                      setLoading(false)
                      response.errorMessage ? toast(response.errorMessage) : setSent(true)
                    }}>
                    Submit
                  </Button>
                }
              </>
              :
              <>
                <Input
                  className="text-lg"
                  type="tel"
                  value={token}
                  name="password"
                  id="OTP"
                  autoComplete="one-time-code"
                  placeholder="enter your code"
                  onChange={
                    //Update email var
                    (e) => setToken(e.target.value)
                  }
                />
                {loading ?
                  <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                  :
                  <Button
                    onClick={async () => {
                      setLoading(true)
                      const response = await validateOTP(email, token);
                      setLoading(false)
                      response.errorMessage ? toast(response.errorMessage) : () => { setSent(true); toast("Logged in"); }

                    }}>
                    Submit
                  </Button>
                }
              </>
            }
          </form>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <Drawer shouldScaleBackground open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        asChild
      >
        <Button
        onClick={()=>setOpen(true)}
        >
          connect
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Authentication</DrawerTitle>
          <DrawerDescription>{!sent ? "Please enter a valid email address" : "Check " + email + " inbox"}</DrawerDescription>
        </DrawerHeader>
        <div className="flex gap-4 flex-col max-w-sm mx-auto">
          {!sent ?
            <>
              <Input
                className="text-lg"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                disabled={sent}
                placeholder="youremail@domain.com"
                value={email}
                onChange={
                  //Update email var
                  (e) => setEmail(e.target.value)
                }
              />
              {loading ?
                <Button disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
                :
                <Button
                  onClick={async () => {
                    setLoading(true)
                    const response = await sendOTP(email);
                    setLoading(false)
                    response.errorMessage ? toast(response.errorMessage) : setSent(true)
                  }}>
                  Submit
                </Button>
              }
            </>
            :
            <>
              <Input
                className="text-lg"
                type="tel"
                value={token}
                name="password"
                id="OTP"
                autoComplete="one-time-code"
                placeholder="enter your code"
                onChange={
                  //Update email var
                  (e) => setToken(e.target.value)
                }
              />
              {loading ?
                <Button disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
                :
                <Button
                  onClick={async () => {
                    setLoading(true)
                    const response = await validateOTP(email, token);
                    setLoading(false)
                    response.errorMessage ? toast(response.errorMessage) : () => { setSent(true); toast("Logged in"); }

                  }}>
                  Submit
                </Button>
              }
            </>
          }
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" onClick={() => resetAuth()}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
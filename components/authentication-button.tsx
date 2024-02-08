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
import { getUser, logout } from "./server/user";
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

export default function AuthenticationButton(props: { user: any }) {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [sent, setSent] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [logoutLoader, setLogoutLoader] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const isDesktop = useMediaQuery("(min-width: 768px)");

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
        className="rounded-md bg-red-100/50  dark:bg-red-900/50 px-3.5 py-2.5 text-sm  text-red-500 border-red-300 dark:border-red-900 border hover:bg-red-200 dark:hover:bg-red-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
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
          <>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Logging out
          </>
          :
          <LogOut />
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
            className="rounded-md ring-1  ring-green-500 bg-green-500 px-3.5 py-2.5 text-sm  text-gray-100 dark:text-black shadow-sm hover:bg-green-600 dark:hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
        sign in
        </Button>

        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Authentication</DialogTitle>
            <DialogDescription>
              {!sent ? "Please enter a valid email address" : "Check " + email+" inbox"}
            </DialogDescription>
          </DialogHeader>
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
            className="rounded-md ring-1  ring-green-500 bg-green-500 px-3.5 py-2.5 text-sm  text-gray-100 dark:text-black shadow-sm hover:bg-green-600 dark:hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
        sign in
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Authentication</DrawerTitle>
          <DrawerDescription>{!sent ? "Please enter a valid email address" : "Check " + email+" inbox"}</DrawerDescription>
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
'use client';
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import ValidationButton from "./validation-button";

export default function Authentication(props:{user:any}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  if(email){
    return (
        <Modal defaultOpen backdrop="blur"  isDismissable={false} onOpenChange={onOpenChange} radius="none" className="py-4 bg-white dark:bg-gray-900" closeButton={<></>}>
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="text-black dark:text-white">We've sent you a code</ModalHeader>
              <ModalBody>
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
                      defaultValue={email?email:""}
                    />
                    <input
                      type="otp"
                      name="otp"
                      id="otp"
                      autoComplete="one-time-code"
                      className="bg-transparent  appearance-none caret-blue-500 border-none ring-focus  focus:outline-none focus:ring-0 text-left flex-1 dark:text-white px-2" 
                      placeholder="Enter OTP Code"
                    />
                    <ValidationButton></ValidationButton>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      )}
    

  return (
      <>
      {
      props.user?
        <form action="/auth/sign-out" method="post">
          <button 
          type="submit"
          className="rounded-none bg-red-900/50 px-3.5 py-2.5 text-sm  text-red-600 shadow-sm hover:bg-red-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Log Out
          </button>
        </form>
        :
        <>
          <button 
            onClick={onOpen} 
            className="rounded-none bg-blue-900/50 px-3.5 py-2.5 text-sm  text-blue-600 shadow-sm hover:bg-blue-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
            Login
          </button>
          <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} radius="none" className="py-4 bg-white dark:bg-gray-900">
            <ModalContent >
              {(onClose) => (
                <>
                  <ModalHeader className="text-black dark:text-white">Authentication</ModalHeader>
                  <ModalBody>
                    <form
                      className="flex-1 flex  w-full  justify-center text-foreground  bg-gray-100 dark:bg-gray-800"
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
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      }
    </>  
  );
}




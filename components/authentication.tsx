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
                      placeholder="if your email adress is missing, please enter it here"
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
      {props.user?
      <form action="/auth/sign-out" method="post">
        <Button type="submit" color="danger" variant="flat" radius="none">Log Out</Button>
      </form>
        :
        <>
        <Button onPress={onOpen} color="primary" radius="none" variant="flat">Login</Button>
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




'use client'

import { useSearchParams } from 'next/navigation'
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";


export default function Messages() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')
  const email = searchParams.get('email')

  return (
    <>
      {error && (
        <p role="alert" className="alert mt-4 p-4 fixed right-0 left-0 bottom-0 sm:left-auto sm:bottom-2 mx-auto sm:right-2 bg-red-900 text-red-300 text-center animate-appearance-in">
          {error}
        </p>
      )}
      {message && (
        <p role="alert" className="alert mt-4 p-4 fixed right-0 left-0 bottom-0 sm:left-auto sm:bottom-2 mx-auto sm:right-2 bg-neutral-900 text-neutral-300 text-center animate-appearance-in ">
          {message}
        </p>
      )}
      {email && (
        <Modal defaultOpen backdrop="blur"  onOpenChange={onOpenChange} radius="none" className="py-4 bg-white dark:bg-gray-900">
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="text-black dark:text-white">OTP</ModalHeader>
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
                        className="bg-transparent  appearance-none caret-blue-500 border-none ring-focus  focus:outline-none focus:ring-0 text-left flex-1 dark:text-white" 
                        placeholder="Enter OTP Code"
                    />
                    <button>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" stroke-gray-500">
                      {isOpen?
                      <path d="M7.75 12H16.25M16.25 12L13 15.25M16.25 12L13 8.75"></path>
                      :
                      <path d="M8 13L10.5 15.5L15.5 8.5" stroke="#4EBE96" ></path>
                      }
                    </svg>
                  </button>

            </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      )}

    
    </>
  )
}

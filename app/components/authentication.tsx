'use client';
import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Authentication(props:{user:any}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
      <>
      {props.user?
      <form action="/auth/sign-out" method="post">
        <Button type="submit" color="danger" variant="flat">Log Out</Button>
      </form>
        :
        <>
        <Button onPress={onOpen} color="primary" variant="flat">Login</Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Authentication - Sign In</ModalHeader>
              <ModalBody>
              <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
                <form
                  className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
                  action="/auth/sign-in"
                  method="post"
                >
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="rounded-md px-4 py-2 bg-inherit border mb-6"
                  placeholder="youremail@domain.com"
                />
                  <label className="text-md" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                  />
                  <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
                    Sign In
                  </button>
                  <button
                    formAction="/auth/sign-up"
                    className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </>
    }
    </>  
    
  );
}

'use client';
import Link from "next/link"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function SubscribeNewsletter() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className="relative overflow-hidden max-w-5xl pb-16 sm:py-24 lg:py-32 mx-auto px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">Subscribe to our market updates newsletter.</h2>
          </div>
            <div className="flex max-w-md gap-x-4 gap-y-4 flex-col pt-2">
                <div className="flex gap-4">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-1 rounded-md border-0 bg-black/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 dark:ring-white/30 focus:ring-2 focus:ring-inset focus:to-blue-500 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                    />

                      <Button onPress={onOpen} color="primary" variant="solid" className="bg-blue-500 hover:bg-blue-400">Subscribe</Button>
                      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1">Newsletter - Subscription</ModalHeader>
                              <ModalBody>
                                <p> 
                                I apologize for the inconvenience, but the subscription feature is not yet implemented. 
                                We are working on adding this functionality as soon as possible. 
                                Thank you for your patience.
                                </p>
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
                </div>
              <p className="dark:text-white">We care about your data. Read our <Link href="legalNotices" className="text-blue-500">privacy policy</Link>.</p>
            </div>
        </div>
    </div>
  )
}

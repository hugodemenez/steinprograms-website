'use client'
import { useSearchParams } from 'next/navigation'
import { Toaster, toast } from "sonner"

export default function Notifications() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')
  if (error) {
    console.log("Error :",error)
    toast(error, {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }
  if (message){
    console.log("Message :",error)
    toast(error)
  }
  return(
    <></>
    )
}

'use client'
import { useSearchParams } from 'next/navigation'
import { toast } from "sonner"

export default function Notifications() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')
  if (error) toast(error)
  if (message) toast(error)
  return(
    <></>
  )
}

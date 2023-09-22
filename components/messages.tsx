'use client'
import { useSearchParams } from 'next/navigation'

export default function Messages() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')

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
    </>
  )
}

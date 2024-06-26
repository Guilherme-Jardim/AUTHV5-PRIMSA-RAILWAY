'use client'

import { signIn } from "next-auth/react"

export default function GoogleButton() {
  return (
    <div>
      <button
        onClick={() => signIn('google')}
      >
        Login com Google
      </button>
    </div>
  )
}
'use client'

import { signOut } from "next-auth/react"

export default function ButtonLogOut() {
  return (
    <div>
      <button
        onClick={() => signOut()}
      >
        LogOut
      </button>
    </div>
  )
}
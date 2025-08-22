'use client'

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const LoginButton = () => {
  return (
    <div>
       <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

export default LoginButton

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignedOut>
      <SignInButton mode='modal'/>
    </SignedOut>  

    <SignedIn>
      <SignOutButton />
    </SignedIn>

    <UserButton/>
    </>
  )
}

export default App

import React from 'react'
import {
    SignedOut,
    SignedIn,
    SignInButton,
    SignOutButton,
    UserButton,
} from "@clerk/clerk-react";

function HomePage() {
    return (
        <>
            <div>HomePage</div>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>

            <SignedIn>
                <UserButton />
                <SignOutButton />
            </SignedIn>

            <UserButton/>
        </>
    )
}

export default HomePage
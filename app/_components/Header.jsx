"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      {/* Make sure the logo is in the 'public' directory for the Image component */}
      <Image
        src="/logo.svg" // Use a path relative to the public folder
        alt="logo"
        width={160}
        height={100}
      />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Button>Get Started</Button>
      )}
    </div>
  );
}

export default Header;

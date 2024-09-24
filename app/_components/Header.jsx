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
      <Image src={'/logo2.png'} alt='logo' height={100} width={160}></Image>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <Button>Get Started</Button>
      )}
    </div>
  );
}

export default Header;

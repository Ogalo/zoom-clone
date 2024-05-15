import StreamVideoProvider from "@/Providers/StreamClientProvider";
import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASSEMBLE",
  description: "A Video calling conference",
  icons: {
    icon: '/icons/logo.svg'
  }
};


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;

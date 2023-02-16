"use client"

import "@lib/styles/global.css";

import { ReactElement, ReactNode } from "react";
import { Header } from "@lib/components/navigation/header";

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <html lang="fr">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
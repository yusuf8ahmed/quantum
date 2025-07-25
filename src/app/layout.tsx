import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

import "react-loading-skeleton/dist/skeleton.css"
import { Toaster } from "@/components/ui/toaster";
import 'simplebar-react/dist/simplebar.min.css'
import { constructMetadata } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
          <Toaster />
          <Navbar />
          {children}
        </body>        
      </Providers>
    </html>
  );
}

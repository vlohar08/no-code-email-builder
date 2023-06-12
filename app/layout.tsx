"use client";
import SessionProvider from "@/context/SessionProvider";
import "@/sass/main.scss";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>No Code Email Builder</title>
        <link rel="icon" href="/assets/brand/no-code-email-builder-icon.svg" />
        <meta
          name="description"
          content="Design emails for your business without writing a single line of code"
        />
      </head>
      <body>
        <SessionProvider>
          <Toaster
            toastOptions={{
              style: {
                fontSize: 16,
              },
            }}
          />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

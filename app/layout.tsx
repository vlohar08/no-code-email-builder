"use client";
import SessionProvider from "@/context/SessionProvider";
import "@/sass/main.scss";

export const metadata = {
  title: "No Code Email Builder",
  description: "Create stunning emails using our Drag and Drop editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

"use client";
import Footer from "@/components/backend/Footer";
import Header from "@/components/backend/Header";
import { useSession } from "@/context/SessionProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function AppLayout({ children }: { children: React.ReactNode }) {
  const { session, isLoading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session) {
      router.push("/login");
    }
  }, [session]);

  return (
    <>
      <Header name={session?.name} />
      <Toaster
        toastOptions={{
          style: {
            fontSize: 16,
          },
        }}
      />
      <main style={{ minHeight: "calc(100vh - 140px)" }}>{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;

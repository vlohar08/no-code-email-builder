"use client";
import Header from "@/components/backend/Header";
import { useSession } from "@/context/SessionProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

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
      <main>{children}</main>
    </>
  );
}

export default AppLayout;

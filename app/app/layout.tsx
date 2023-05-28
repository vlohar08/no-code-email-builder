import Footer from "@/components/backend/Footer";
import Header from "@/components/backend/Header";
import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 140px)" }}>{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;

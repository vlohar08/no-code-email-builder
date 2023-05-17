import Footer from "@/components/backend/Footer";
import Header from "@/components/backend/Header";
import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;

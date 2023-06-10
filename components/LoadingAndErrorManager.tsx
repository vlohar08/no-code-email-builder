"use client";
import { useSession } from "@/context/SessionProvider";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";

type LoadingAndErrorManagerProps = {
  onLoad: () => Promise<void>;
  children: React.ReactNode;
  errorMessage?: string;
};

function LoadingAndErrorManager({
  onLoad,
  children,
  errorMessage,
}: LoadingAndErrorManagerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ title: "", message: "" });
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.session) {
      onLoad()
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) =>
          setError({ title: err.message, message: errorMessage || "" })
        );
    } else if (!session.isLoading) {
      setError({
        title: "401: Please Login and Try again",
        message: "Redirecting to the login page...",
      });
      setIsLoading(false);
      setTimeout(() => router.push("/login"), 3000);
    }
  }, [session]);

  if (error.title) {
    return <Error error={error.title} message={error.message} />;
  }

  return <>{isLoading ? <Loading /> : children}</>;
}

export default LoadingAndErrorManager;

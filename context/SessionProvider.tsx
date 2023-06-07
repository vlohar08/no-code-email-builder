"use client";
import { account } from "@/appwrite/client_init";
import { Models } from "appwrite";
import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

const SessionContext = createContext<Session>({
  session: null,
  isLoading: true,
});
const UpdateSessionContext = createContext<Dispatch<SetStateAction<Session>>>(
  () => null
);

export function useSession() {
  return useContext(SessionContext);
}

export function useUpdateSession() {
  return useContext(UpdateSessionContext);
}

type Session = {
  session: Models.User<Models.Preferences> | null;
  isLoading: boolean;
};

function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session>({
    session: null,
    isLoading: true,
  });

  useEffect(() => {
    account
      .get()
      .then((session) => setSession({ session, isLoading: false }))
      .catch((err) => {
        setSession({ session: null, isLoading: false });
      });
  }, []);

  return (
    <SessionContext.Provider value={session}>
      <UpdateSessionContext.Provider value={setSession}>
        {children}
      </UpdateSessionContext.Provider>
    </SessionContext.Provider>
  );
}

export default SessionProvider;

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

const SessionContext = createContext<Models.User<Models.Preferences> | null>(
  null
);
const UpdateSessionContext = createContext<
  Dispatch<SetStateAction<Models.User<Models.Preferences> | null>>
>(() => null);

export function useSession() {
  return useContext(SessionContext);
}

export function useUpdateSession() {
  return useContext(UpdateSessionContext);
}

function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] =
    useState<Models.User<Models.Preferences> | null>(null);

  useEffect(() => {
    account
      .get()
      .then((res) => setSession(res))
      .catch((err) => console.error(err));
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

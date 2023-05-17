import { Account, Client, Databases, Storage } from "node-appwrite";

export function initAppwriteWithAPI() {
  const client = new Client();
  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)
    .setKey(process.env.APPWRITE_API_KEY as string);

  const account = new Account(client);
  const database = new Databases(client);
  const storage = new Storage(client);

  return { account, database, storage };
}

export function initAppwriteWithJWT(jwt: string) {
  const client = new Client();
  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)
    .setJWT(jwt);

  const account = new Account(client);
  const database = new Databases(client);
  const storage = new Storage(client);

  return { account, database, storage };
}

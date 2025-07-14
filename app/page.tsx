import { cookies } from "next/headers";

export default async function Home() {
  console.log("HOME PAGE");
  const cookie = (await cookies()).get("cookie")?.value;
  console.log(cookie);
  return <h1>{new Date().toString()}</h1>;
}

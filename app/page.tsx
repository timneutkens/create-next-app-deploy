import { cookies } from "next/headers";

export const runtime = "edge";

export default async function Home() {
  const cookie = (await cookies()).get("cookie")?.value;
  console.log(cookie);
  return <h1>{new Date().toString()}</h1>;
}

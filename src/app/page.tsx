import { getCookie } from "@/lib/cookie-util";

export default async function Test() {
  const test = getCookie("test");
  console.log("page:", test);
  return <p>{JSON.stringify(test)}</p>;
}
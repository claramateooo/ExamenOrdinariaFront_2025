import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies, setCookie } from "https://deno.land/std@0.224.0/http/cookie.ts";

export const handler: Handlers={

}
const Home=()=> {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
  
    </div>
  );
}
export default Home;

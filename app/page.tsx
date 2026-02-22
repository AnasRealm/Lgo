import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import Image from "next/image";

export default async function Home() {
  const queryClient = new QueryClient();


  return (

    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
 
      </main>
    </HydrationBoundary>
  );
}

import { PageTransition } from "@/shared/page-transition";

export default function Home() {
  return (
    <div>
      <PageTransition />
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        HELLO
      </div>
      <div className="w-screen h-screen bg-green-500 flex items-center justify-center">
        HELLO
      </div>
    </div>
  );
}

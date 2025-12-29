"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import helloAnimation from "./hello.json";
import { useRouter } from "next/navigation";


export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);

  const router = useRouter();


  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* PINK GLOW */}
      <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-pink-600/30 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div
        ref={cardRef}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* LOTTIE CHARACTER */}
        <div className="w-40 h-40 mb-6 rounded-full overflow-hidden bg-pink-200 flex items-center justify-center">
  <Lottie
    animationData={helloAnimation}
    loop
    className="w-full h-full"
  />
</div>


        <h1 className="text-pink-400 text-4xl font-semibold mb-2">
          Hey Beautiful
        </h1>

        <p className="text-gray-300 text-base mb-6">
          Do you even know how cute you are?
        </p>

        <button
  onClick={() => router.push("/measure")}
  className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold text-sm
             animate-pulse active:scale-95 transition"
>
  Open My Heart 🤍
</button>

      </div>
    </main>
  );
}

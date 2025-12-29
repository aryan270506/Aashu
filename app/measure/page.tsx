"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function MeasurePage() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const router = useRouter();


  useEffect(() => {
  let value = 0;

  const interval = setInterval(() => {
    value += 1;
    setProgress(value);

    if (value >= 120) {
      clearInterval(interval);
      setDone(true);

      // blast delay → go to next page
      setTimeout(() => {
        router.push("/reveal");
      }, 800);
    }
  }, 30);

  return () => clearInterval(interval);
}, [router]);


  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* PINK GLOW */}
      <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-pink-600/30 blur-3xl rounded-full" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-black/60 backdrop-blur-md border border-pink-500/20 p-6 text-center shadow-lg">

        <p className="text-gray-300 text-sm mb-2">
          Measuring your cuteness...
        </p>

        <h1 className="text-pink-400 text-5xl font-bold mb-6">
          {progress}%
        </h1>

        {/* PROGRESS BAR */}
        <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transition-all duration-200"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {!done ? (
          <p className="text-pink-300 text-sm">
            Calculating cuteness...
          </p>
        ) : (
          <p className="text-pink-400 text-sm font-semibold flex items-center justify-center gap-2">
            ⚠️ WARNING: TOO CUTE TO HANDLE
          </p>
        )}
      </div>
    </main>
  );
}

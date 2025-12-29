"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Pacifico } from "next/font/google";
import { useRouter } from "next/navigation";


// ✅ Font MUST be outside the component
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const messages = [
  "You didn’t just enter my life — you became it 🥹❤️✨",
  "My heart learned what peace means because of you 🤍🌊🫶",
  "Every part of me softens when it’s you 🌸💞🌙",
  "If love had a feeling, it would feel like you ♾️💖",
  "I choose you — not once, but forever 💍❤️‍🔥✨",
];



export default function RevealPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();


  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* PINK GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-pink-500/40 blur-2xl rounded-full" />

      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-sm text-center"
      >
        {/* HEART */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center">
          <span className="text-4xl">💖</span>
        </div>

        {/* ✅ SCRIPT FONT APPLIED HERE */}
        <h1
          className={`${pacifico.className} text-white text-3xl mb-1 tracking-wide`}
        >
          Just for you
        </h1>

        <p className="text-gray-400 text-sm mb-6">
          Tap each one to reveal
        </p>

        {/* HEART LIST */}
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <button
              key={i}
              onClick={(e) => {
                (e.currentTarget as HTMLButtonElement).innerText = msg;
              }}
              className="w-full py-3 rounded-full bg-white/10 text-pink-300 backdrop-blur-md text-sm transition active:scale-95"
            >
              🤍
            </button>
          ))}
        </div>

        {/* SEE MORE */}
        <button
  onClick={() => router.push("/note")}
  className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold"
>
  See more →
</button>

      </div>
    </main>
  );
}

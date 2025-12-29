"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import finalHeart from "./final.json";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function FinalPage() {
  const lottieRef = useRef<HTMLDivElement>(null);

  // Vertical rotation (Y-axis)


  return (
    <main
      className={`h-screen w-screen bg-black overflow-hidden flex flex-col items-center justify-center relative ${pacifico.className}`}
    >
      {/* dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff14_1px,transparent_1px)] bg-[size:22px_22px]" />

      {/* outer ring */}
      <div className="relative z-10 w-44 h-44 rounded-full border border-pink-400/40 flex items-center justify-center">
        
        {/* clip circle */}
        <div className="w-52 h-52 rounded-full overflow-hidden flex items-center justify-center">
          
          {/* rotating lottie */}
          <div ref={lottieRef} className="w-full h-full">
            <Lottie
              animationData={finalHeart}
              loop
              autoplay
              className="w-full h-full"
            />
          </div>

        </div>
      </div>

      {/* text */}
      <p className="relative z-10 mt-10 text-white text-2xl text-center">
        You’ll always be special to me
      </p>
    </main>
  );
}

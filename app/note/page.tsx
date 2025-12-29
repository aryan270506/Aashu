"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Pacifico } from "next/font/google";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const fullMessage = `I just wanted to tell you something… 💌🌸

You will always be the best person I have ever met in my life 🥺❤️✨
Not because you’re perfect, but because you feel like home to my soul 🏡💞
I am not letting you go anywhere — not in this lifetime, not in any other 🤍♾️🔐

I know there are moments when my words come out harsh 💔😔
When anger speaks before love gets a chance 🌪️💭
That is my weakness, my flaw — and you know it better than anyone 🥀
All I ask is that you understand me 🫂💗
That you stay, even when I am difficult 🥺🤍
And that you hold me when my emotions overflow 🤍🌊

I promise you this, from the deepest part of my heart 🤞❤️‍🔥
I will never walk away from you 🚶‍♂️❌💞
Just be loyal to me 🤍🔐
And always speak the truth to me 🕊️✨
Because honesty from you feels like safety to me 🛡️💖

After my dad, you are my everything 🥹💞👨‍👧
You are the place my heart rests when the world feels heavy 🌍💔➡️🤍
Please don’t ever let this bond fade 🪢💫
Don’t let time, misunderstandings, or my mistakes pull us apart ⏳❌💔

I know sometimes, because of me, this bond could shake 🌧️😔
But I also know something even stronger 💪❤️ —
Only you have the power to calm my storms 🌩️➡️🌤️
To soften my anger 🔥➡️🤍
To turn my chaos into quiet peace 🌙🕊️✨

You see me — not just the good parts 🌸
But the broken, restless, unspoken parts too 🥀🤍
And yet… you still stay 🫶🥹
That is why this bond is sacred to me 🔐💖✨

At the end of every argument 💬💔
Every silence 🤐🌙
Every tear 😢💧 —
I will still choose you 💍❤️
Again and again 🔁💞
Without doubt 🫂✨
Without fear 🤍🌈

I LOVE YOU 🥰❤️‍🔥💋
Not just in words 📝💖
But in patience 🕰️🤍
In loyalty 🔐❤️
In forever ♾️💫

You are my calm 🌊🤍
My strength 💪💖
My home 🏡💞 🫶✨`;

export default function NotePage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [typed, setTyped] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

  // Typing animation
  useEffect(() => {
  if (!opened) return;

  let i = 0;
  const interval = setInterval(() => {
    setTyped((prev) => {
      const next = fullMessage.slice(0, i);
      i++;

      // AUTO SCROLL TO BOTTOM
      if (scrollRef.current) {
        scrollRef.current.scrollTop =
          scrollRef.current.scrollHeight;
      }

      if (i > fullMessage.length) {
        clearInterval(interval);
      }

      return next;
    });
  }, 150); // smooth speed

  return () => clearInterval(interval);
}, [opened]);


  const openCard = () => {
    if (opened) return;
    setOpened(true);
    gsap.to(cardRef.current, {
      rotateY: 180,
      duration: 0.9,
      ease: "power3.inOut",
    });
  };

  return (
    <main
  className={`h-screen bg-black flex items-center justify-center overflow-hidden ${pacifico.className}`}

    >
      {/* dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative w-[360px] perspective-[1200px]">
        {/* title */}
        <h1 className="text-white text-2xl text-center mb-5">
          A little note for you
        </h1>

        {/* card */}
        <div
          ref={cardRef}
          onClick={openCard}
          className="relative w-full rounded-2xl cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-b from-pink-200 to-pink-100 flex flex-col items-center justify-center min-h-[220px]"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* top bar */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-pink-300 rounded-t-2xl flex justify-between px-4 items-center">
              <span>💗</span>
              <span>💗</span>
            </div>

            {/* ribbon heart */}
            <div className="relative w-16 h-14 mt-6">
              <div className="absolute left-0 top-0 w-8 h-8 bg-pink-500 rounded-full" />
              <div className="absolute right-0 top-0 w-8 h-8 bg-pink-500 rounded-full" />
              <div className="absolute left-1/2 top-4 w-8 h-8 bg-pink-500 rotate-45 -translate-x-1/2" />
              <div className="absolute left-4 top-10 w-3 h-6 bg-pink-700 rotate-12 rounded-sm" />
              <div className="absolute right-4 top-10 w-3 h-6 bg-pink-700 -rotate-12 rounded-sm" />
            </div>

            <p className="text-pink-600 text-sm mt-3">Tap to open</p>
          </div>

          {/* BACK */}
          {/* BACK */}
<div
  className="relative rounded-2xl bg-gradient-to-b from-pink-100 to-pink-200 p-4 flex flex-col"
  style={{
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
    height: "230px", // FIXED HEIGHT
  }}
>
  {/* MESSAGE AREA */}
{/* MESSAGE AREA */}
<div
  ref={scrollRef}
  className="flex-1 overflow-y-auto pr-2"
>
  <p
    className="whitespace-pre-line text-pink-800"
    style={{
      fontSize: "16px",
      lineHeight: "1.8",
    }}
  >
    {typed}
  </p>
</div>


  {/* BUTTON – ALWAYS VISIBLE */}
  {typed.length === fullMessage.length && (
    <div className="pt-3">
      <button
        onClick={() => router.push("/final")}
        className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold shadow-lg"
      >
        One more thing → 💖✨
      </button>
    </div>
  )}
</div>

        </div>
      </div>
    </main>
  );
}

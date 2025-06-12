'use client'

import Image from "next/image";
import "./page.css";
import { useEffect } from "react";

export default function Home() {

  const chords = ["C", "D", "G"];
  var previousChord = 0;
  
  const i = 250;
  const duration = 500;
  useEffect(() => {
    const ol = document.createElement("ol");
    ol.className = "z-15 absolute left-1/2 align-center rounded-xl flex flex-row list-none text-sm/6 text-center";
    ol.style.gap = `${i}px`;

    for (let j = 0; j < 200; j++) {
      const li = document.createElement("li");
      li.className = "animate-move-left z-12 bg-blue-500 font-bold text-white px-3 py-5 rounded text-[40px]";
      var idx = Math.floor(Math.random() * (chords.length - 1))
      if (idx >= previousChord) {
        idx++;
      }
      previousChord = idx;
      const randomChord = chords[idx];
      li.textContent = randomChord;
      li.style.animationDuration = `${duration}s`;
      ol.appendChild(li);
    }

    document.getElementById("parent")?.appendChild(ol);
  }, []); // Runs only once after the component mounts
  

  return (
    <div>
    <div className="bg-white/[.8] z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
    <div id="parent"
      className = "absolute top-0 left-0 w-full h-full flex items-center justify-center">
      {/* <ol className="z-15 absolute left-1/2 align-center rounded-xl flex flex-row list-none text-sm/6 text-center"
          style={{ gap: `${i}px` }}>
          <li className="z-12 bg-blue-500 font-bold text-white px-3 py-5 rounded text-[40px] animate-move-left">
              {randomChord}
          </li>
          <li className="bg-blue-500 font-bold text-white px-3 py-5 rounded text-[40px]">
              {randomChord}
          </li>
      </ol> */}
    </div>
    <div className="bg-red-400 absolute top-0 h-full w-5 left-150"></div>
    <div className="z-30 absolute top-0 left-0 w-full h-full bg-[transparent] border-solid border-stone-400 border-x-400 border-y-300"></div>
    </div>
  );
}

"use client";
import Link from "next/link";
import MuxPlayer from '@mux/mux-player-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-ibm-plex-mono relative">
      {/* Video Section */}
      <section className="h-[74vh] w-full relative">
      <MuxPlayer
        playbackId="4xUkKW2ink59xJhMl01ojOyqPmVSInth6W8ifSkCgsGA" // Replace with your Mux Playback ID
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
        streamType="on-demand" // Use "live" if it’s a live stream
      />
       
        {/* Optional Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {/* Titles Column */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-3 text-center">
          <Link href="#" className="text-2xl text-gray-300 hover:text-white transition">TITLES</Link>
          <Link href="#" className="text-2xl text-gray-300 hover:text-white transition">CLIMATE EXCHANGE</Link>
          <Link href="#" className="text-2xl text-gray-300 hover:text-white transition">BAI UEIT</Link>
          <Link href="#" className="text-2xl text-gray-300 hover:text-white transition">CURATORS GLASSES</Link>
        </div>
      </section>

      {/* Text Content Section */}
      <main className="h-[26vh] w-full py-2 px-2 text-white leading-relaxed text-left">
        <div className="max-w-none">
          <h1 className="text-base text-white mb-2">UHNWC is a Multidisciplinary Studio</h1>
          <p className="text-base mb-2">UHNWCは学際的なスタジオである</p>
          <p className="text-base">
            &quot;And so art is everywhere, since artifice is at the very heart of reality. And so art is dead, not only because its critical transcendence is gone, but because reality itself, entirely impregnated by an aesthetic which is inseparable from its own structure, has been confused with its own image. Reality no longer has the time to take on the appearance of reality. It no longer even surpasses fiction: it captures every dream even before it takes on the appearance of a dream.&quot; <br />
            Jean Baudrillard, The Transparency of Evil, 1990
          </p>
          <p className="mt-2">
            <a href="mailto:uhnwc@protonmail.ch" className="text-base text-gray-400 hover:text-white">
              uhnwc@protonmail.ch
            </a>
          </p>
          <p className="mt-2 text-sm">&copy; 2025 UHNWC. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}

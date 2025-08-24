"use client"

import React from "react";
import { Vortex } from "./vortex";

export function VortexDemo() {
  return (
    <div className="mx-auto w-screen h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Site is Under Development
        </h2>

        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          We are working hard to bring you something amazing. Please check back soon!
        </p>
      </Vortex>
    </div>
  );
}

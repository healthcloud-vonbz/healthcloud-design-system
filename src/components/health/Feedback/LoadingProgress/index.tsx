"use client";

import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

export function LoadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + 20;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]">
        <div className="max-w-xl mx-auto p-4 space-y-2 w-[200px] sm:w-[300px]">
          <p className="font-semibold text-sm sm:text-base text-center w-full text-white">
            Aguarde um instante...
          </p>
          <Progress value={progress} className="h-1 sm:h-[6px]" />
        </div>
      </div>
    </div>
  );
}

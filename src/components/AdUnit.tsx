"use client";

import { useEffect, useRef, useState } from "react";

interface AdUnitProps {
  className?: string;
  slot?: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  responsive?: boolean;
}

export default function AdUnit({
  className = "",
  slot = "auto",
  format = "auto",
  responsive = true,
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);
  const [hasAd, setHasAd] = useState(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const adsbygoogle = (window as any).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
        pushed.current = true;
        setHasAd(true);
      }
    } catch {
      // AdSense not loaded (dev mode or ad blocker)
    }
  }, []);

  if (!hasAd) return null;

  return (
    <div className={`ad-container text-center my-6 ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1474229931660831"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}

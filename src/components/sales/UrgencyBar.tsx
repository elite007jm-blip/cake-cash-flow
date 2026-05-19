import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/P105864295K?checkoutMode=10&bid=1778964712124#038;checkoutMode=10";

function format(s: number) {
  const h = Math.floor(s / 3600).toString().padStart(2, "0");
  const m = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return { h, m, s: sec };
}

export function UrgencyBar() {
  const [left, setLeft] = useState(60 * 17 + 42);
  useEffect(() => {
    const i = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  const t = format(left);
  return (
    <div className="sticky top-0 z-50 gradient-pink text-primary-foreground shadow-lg">
      <a href={CHECKOUT_URL} className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold">
        <Flame className="h-4 w-4 animate-pulse" />
        <span>OFERTA TERMINA EN:</span>
        <span className="flex gap-1 font-mono">
          <span className="rounded bg-black/30 px-2 py-0.5">{t.h}</span>:
          <span className="rounded bg-black/30 px-2 py-0.5">{t.m}</span>:
          <span className="rounded bg-black/30 px-2 py-0.5">{t.s}</span>
        </span>
        <span className="hidden sm:inline">— Reclama tu acceso por $4,99</span>
      </a>
    </div>
  );
}

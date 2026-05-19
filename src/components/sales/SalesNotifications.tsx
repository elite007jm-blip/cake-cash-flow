import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SALES = [
  { name: "María G.", city: "Bogotá", time: "hace 2 min" },
  { name: "Sofía R.", city: "Ciudad de México", time: "hace 4 min" },
  { name: "Camila P.", city: "Lima", time: "hace 6 min" },
  { name: "Valentina M.", city: "Buenos Aires", time: "hace 8 min" },
  { name: "Lucía T.", city: "Santiago", time: "hace 11 min" },
  { name: "Andrea L.", city: "Madrid", time: "hace 14 min" },
  { name: "Daniela S.", city: "Quito", time: "hace 17 min" },
];

export function SalesNotifications() {
  const [idx, setIdx] = useState(-1);
  useEffect(() => {
    let i = 0;
    const tick = () => {
      setIdx(i % SALES.length);
      i++;
      setTimeout(() => setIdx(-1), 5000);
    };
    const start = setTimeout(tick, 3500);
    const interval = setInterval(tick, 10000);
    return () => { clearTimeout(start); clearInterval(interval); };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[300px]">
      <AnimatePresence>
        {idx >= 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 shadow-2xl"
          >
            <div className="rounded-full bg-success/15 p-2">
              <CheckCircle2 className="h-5 w-5 text-success" />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">{SALES[idx].name} de {SALES[idx].city}</p>
              <p className="text-xs text-muted-foreground">acaba de unirse · {SALES[idx].time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

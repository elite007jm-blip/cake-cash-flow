import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Gift } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/P105864295K?checkoutMode=10&bid=1778964712124#038;checkoutMode=10";

export function ExitPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown) {
        setOpen(true);
        setShown(true);
      }
    };
    const timer = setTimeout(() => {
      if (!shown) { setOpen(true); setShown(true); }
    }, 45000);
    document.addEventListener("mouseleave", onLeave);
    return () => { document.removeEventListener("mouseleave", onLeave); clearTimeout(timer); };
  }, [shown]);

  // Back-redirect
  useEffect(() => {
    history.pushState(null, "", location.href);
    const onPop = () => { window.location.href = CHECKOUT_URL; };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-primary/40 bg-card p-8 shadow-[0_20px_80px_-20px] shadow-primary/40"
          >
            <button onClick={() => setOpen(false)} className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full gradient-pink p-4">
                <Gift className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h3 className="mb-2 text-center text-2xl font-bold">¡Espera! No te vayas 🎁</h3>
            <p className="mb-1 text-center text-muted-foreground">Llévate hoy el curso completo + todos los bonos por:</p>
            <p className="my-4 text-center">
              <span className="text-sm text-muted-foreground line-through">$49,99</span>
              <span className="ml-3 text-4xl font-bold text-gradient-pink">$4,99</span>
            </p>
            <a
              href={CHECKOUT_URL}
              className="block w-full rounded-xl gradient-pink py-4 text-center text-base font-bold text-primary-foreground shadow-lg transition hover:scale-[1.02] animate-pulse-glow"
            >
              SÍ, QUIERO MI DESCUENTO
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">Oferta única, no se repetirá</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

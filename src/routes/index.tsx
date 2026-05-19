import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Star, ShieldCheck, Clock, Award, Heart, Sparkles, ChefHat, DollarSign, Users, Quote } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UrgencyBar } from "@/components/sales/UrgencyBar";
import { SalesNotifications } from "@/components/sales/SalesNotifications";
import { ExitPopup } from "@/components/sales/ExitPopup";
import { Counter } from "@/components/sales/Counter";
import heroCake from "@/assets/hero-cake.jpg";
import karenImg from "@/assets/karen.jpg";
import resultsImg from "@/assets/results.jpg";

const CHECKOUT_URL = "https://pay.hotmart.com/P105864295K?checkoutMode=10&bid=1778964712124#038;checkoutMode=10";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ButtercreamPro — Conviértete en pastelera profesional desde casa" },
      { name: "description", content: "Aprende repostería profesional: buttercream resistente al calor, bizcochos perfectos y postres que se venden. De $49,99 a $4,99 hoy." },
      { property: "og:title", content: "ButtercreamPro — Gana dinero con la repostería" },
      { property: "og:description", content: "+100 clases, bonos exclusivos y acompañamiento 24/7. Solo $4,99." },
    ],
  }),
  component: SalesPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

function CTA({ children, className = "", large = false }: { children: React.ReactNode; className?: string; large?: boolean }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl gradient-pink font-bold text-primary-foreground shadow-xl shadow-primary/30 transition hover:scale-[1.03] hover:shadow-primary/50 animate-pulse-glow ${large ? "px-8 py-5 text-base sm:text-lg" : "px-6 py-3.5 text-sm sm:text-base"} ${className}`}
    >
      {children}
      <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />
    </a>
  );
}

function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UrgencyBar />

      {/* Nav */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="rounded-lg gradient-pink p-1.5"><ChefHat className="h-5 w-5 text-primary-foreground" /></div>
            <span className="font-display text-lg font-bold">Buttercream<span className="text-primary">Pro</span></span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--primary)_20%,transparent),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <motion.div {...fadeUp}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" /> Acceso inmediato · 7 días GRATIS
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Conviértete en <span className="text-gradient-pink">pastelera profesional</span> y gana dinero desde casa
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Aprende a crear <strong className="text-foreground">buttercream resistente al calor</strong>, bizcochos perfectos y postres irresistibles paso a paso… incluso si empiezas desde cero.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm sm:text-base">
              {["7 días GRATIS de clases en vivo", "+100 clases grabadas para siempre", "Acompañamiento 24/7 con la comunidad"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="rounded-full bg-success/15 p-1"><Check className="h-4 w-4 text-success" /></span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div>
                <span className="text-sm text-muted-foreground line-through">$49,99 USD</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold text-primary">HOY</span>
                  <span className="text-4xl font-bold text-gradient-pink sm:text-5xl">$4,99</span>
                  <span className="text-sm text-muted-foreground">USD</span>
                </div>
              </div>
              <CTA large>¡QUIERO EMPEZAR AHORA!</CTA>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-success" /> Pago seguro</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 text-gold" /> 4.9/5 (3.214 reseñas)</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <img src={heroCake} alt="Pastel decorado con buttercream rosa" width={1024} height={1280} className="mx-auto w-full max-w-md rounded-3xl border border-border shadow-2xl" />
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
              className="absolute -left-2 top-8 rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur sm:-left-6"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-success/15 p-2"><DollarSign className="h-4 w-4 text-success" /></div>
                <div className="text-xs">
                  <p className="font-bold">+$850 esta semana</p>
                  <p className="text-muted-foreground">— Sofía, estudiante</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}
              className="absolute -right-2 bottom-12 rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur sm:-right-6"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div className="text-xs">
                  <p className="font-bold">+10.000 alumnas</p>
                  <p className="text-muted-foreground">en toda Latinoamérica</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats counter */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            { n: 10000, s: "+", l: "Alumnas activas" },
            { n: 100, s: "+", l: "Clases grabadas" },
            { n: 4, s: ".9★", l: "Valoración" },
            { n: 24, s: "/7", l: "Soporte" },
          ].map((x) => (
            <motion.div key={x.l} {...fadeUp} className="text-center">
              <p className="font-display text-3xl font-bold text-gradient-pink sm:text-4xl">
                <Counter to={x.n} suffix={x.s} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{x.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Resultados reales</p>
          <h2 className="text-3xl font-bold sm:text-5xl">¿Qué vas a lograr?</h2>
          <p className="mt-4 text-muted-foreground">Todo lo que necesitas para transformar tu pasión en ingresos consistentes.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Sparkles, t: "Buttercream resistente", d: "Crea cremas que aguantan cualquier clima sin derretirse." },
            { i: ChefHat, t: "Bizcochos profesionales", d: "Húmedos, esponjosos y firmes — listos para decorar." },
            { i: Heart, t: "Rellenos irresistibles", d: "Sabores que enamoran y hacen volver a tus clientes." },
            { i: Users, t: "Más clientes", d: "Estrategias para vender por redes y ganar pedidos." },
            { i: DollarSign, t: "Gana desde casa", d: "Construye tu negocio sin invertir en local." },
            { i: Award, t: "Resultados garantizados", d: "Sigue el paso a paso y verás cambios desde la 1ª clase." },
          ].map((x, i) => (
            <motion.div
              key={x.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex rounded-xl gradient-pink p-3 shadow-lg shadow-primary/20">
                <x.i className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center"><CTA large>QUIERO EMPEZAR</CTA></div>
      </section>

      {/* PRODUCTO */}
      <section className="relative overflow-hidden bg-card/40 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <motion.img {...fadeUp} src={resultsImg} alt="Postres variados" width={1280} height={800} loading="lazy" className="rounded-3xl border border-border shadow-2xl" />
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">El producto</p>
            <h2 className="text-3xl font-bold sm:text-4xl">El único recetario que necesitas para resultados <span className="text-gradient-pink">profesionales sin complicaciones</span>.</h2>
            <p className="mt-5 text-muted-foreground">
              Olvídate de recetas confusas, ingredientes raros y horas perdidas. Con ButtercreamPro tendrás un sistema probado para crear postres que <strong className="text-foreground">realmente se venden</strong>.
            </p>
            <ul className="mt-6 space-y-3">
              {["Sistema paso a paso de cero a profesional", "Recetas medidas en gramos exactos", "Trucos de pastelería que no se enseñan en escuelas", "Acceso a comunidad privada de alumnas"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" /> {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* BONOS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Bonos exclusivos</p>
          <h2 className="text-3xl font-bold sm:text-5xl">+ <span className="text-gradient-pink">4 Bonos GRATIS</span> hoy</h2>
          <p className="mt-4 text-muted-foreground">Valorados en más de $120 USD — incluidos sin costo extra.</p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            { e: "🔥", t: "Recetas Virales Pro", v: "$39" },
            { e: "🍪", t: "NY Cookies Pro", v: "$29" },
            { e: "🍰", t: "Mini Cheesecakes", v: "$29" },
            { e: "📊", t: "Plantilla de Costos", v: "$24" },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-gradient-to-br from-card to-card/50 p-5 shadow-lg transition hover:scale-[1.02] hover:border-gold/60"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl gradient-gold text-2xl shadow-md">{b.e}</div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-gold">Bono GRATIS</p>
                <h3 className="text-lg font-bold">{b.t}</h3>
                <p className="text-xs text-muted-foreground">Valor: <span className="line-through">{b.v}</span> · HOY: <span className="font-bold text-success">$0</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* URGENCIA / OFERTA */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 gradient-pink opacity-90" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.25),transparent_50%)]" />
        <div className="mx-auto max-w-3xl px-4 text-center text-primary-foreground">
          <motion.div {...fadeUp}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1.5 text-xs font-semibold backdrop-blur">
              <Clock className="h-3.5 w-3.5" /> ACCESO POR TIEMPO LIMITADO
            </div>
            <h2 className="text-3xl font-bold sm:text-5xl">⚠️ Acceso de por vida + bonos solo por tiempo limitado</h2>

            <div className="mx-auto mt-8 max-w-md rounded-3xl border-2 border-white/20 bg-black/30 p-6 backdrop-blur sm:p-8">
              <p className="text-sm uppercase tracking-wider opacity-80">Valor real</p>
              <p className="text-2xl font-bold line-through opacity-70">$49,99</p>
              <p className="mt-3 text-sm uppercase tracking-wider">HOY solo</p>
              <p className="font-display text-6xl font-bold sm:text-7xl">$4,99</p>
              <p className="mt-1 text-xs opacity-80">pago único · acceso de por vida</p>

              <div className="my-6 flex justify-center gap-2 font-mono">
                <TimerBlock label="HRS" />
                <TimerBlock label="MIN" />
                <TimerBlock label="SEG" />
              </div>

              <a href={CHECKOUT_URL} className="block w-full rounded-xl bg-white py-4 text-base font-bold text-primary shadow-2xl transition hover:scale-[1.02] sm:text-lg">
                COMPRAR AHORA →
              </a>
              <p className="mt-3 text-xs opacity-80">🔒 Pago 100% seguro · Garantía 7 días</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Testimonios</p>
          <h2 className="text-3xl font-bold sm:text-5xl">Lo que dicen nuestras <span className="text-gradient-pink">alumnas</span></h2>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Carolina M.", c: "Medellín", t: "En 3 semanas ya tenía pedidos cada fin de semana. El buttercream nunca se me derritió, ¡por fin!" },
            { n: "Gabriela R.", c: "CDMX", t: "Pensé que era complicado. Karen explica todo súper claro. Llevo 2 meses y ya pagué el curso 20 veces." },
            { n: "Isabel L.", c: "Lima", t: "La comunidad y el soporte 24/7 hacen la diferencia. Me sentí acompañada en cada receta." },
          ].map((x, i) => (
            <motion.div
              key={x.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15" />
              <div className="mb-3 flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <p className="text-sm text-foreground/90">"{x.t}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-pink font-bold text-primary-foreground">{x.n[0]}</div>
                <div>
                  <p className="text-sm font-bold">{x.n}</p>
                  <p className="text-xs text-muted-foreground">{x.c}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AUTORIDAD */}
      <section className="bg-card/40 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1fr_1.2fr]">
          <motion.div {...fadeUp} className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <img src={karenImg} alt="Karen Flores" width={800} height={1000} loading="lazy" className="rounded-3xl border border-border shadow-2xl" />
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Tu mentora</p>
            <h2 className="text-3xl font-bold sm:text-5xl">Karen Flores</h2>
            <p className="mt-2 text-muted-foreground">Fundadora de ButtercreamPro</p>
            <ul className="mt-6 space-y-3 text-base">
              {["+10.000 estudiantes formadas", "Pastelera profesional certificada", "Fundadora de ButtercreamPro"].map((t) => (
                <li key={t} className="flex items-center gap-3"><Check className="h-5 w-5 text-success" /> {t}</li>
              ))}
            </ul>
            <p className="mt-6 text-lg italic text-foreground/80">"Aprende directamente de una experta — el atajo que yo no tuve."</p>
          </motion.div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_color-mix(in_oklab,var(--primary)_25%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-bold sm:text-6xl">
              No necesitas experiencia.<br />
              No necesitas equipos caros.<br />
              <span className="text-gradient-pink">Solo necesitas empezar.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">👉 Esta puede ser tu oportunidad</p>
            <div className="mt-10"><CTA large>COMPRAR AHORA</CTA></div>
            <p className="mt-6 text-xs text-muted-foreground">Garantía incondicional de 7 días · Acceso inmediato</p>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ButtercreamPro · Todos los derechos reservados
      </footer>

      <SalesNotifications />
      <ExitPopup />
    </div>
  );
}

function TimerBlock({ label }: { label: string }) {
  return (
    <div className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur">
      <p className="text-2xl font-bold sm:text-3xl"><LiveDigit label={label} /></p>
      <p className="text-[10px] opacity-80">{label}</p>
    </div>
  );
}

function LiveDigit({ label }: { label: string }) {
  // simple shared timer using window event would be over-engineering; use local
  const [left, setLeft] = useTimer();
  void setLeft;
  if (label === "HRS") return <>{String(Math.floor(left / 3600)).padStart(2, "0")}</>;
  if (label === "MIN") return <>{String(Math.floor((left % 3600) / 60)).padStart(2, "0")}</>;
  return <>{String(left % 60).padStart(2, "0")}</>;
}

import { useEffect, useState } from "react";
function useTimer(): [number, (n: number) => void] {
  const [left, setLeft] = useState(60 * 17 + 42);
  useEffect(() => {
    const i = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  return [left, setLeft];
}

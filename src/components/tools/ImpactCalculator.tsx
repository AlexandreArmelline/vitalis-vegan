"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------
   1 CALCULADORA DE IMPACTO
   1.1 Constantes de referência
   1.2 Componente de slider
   1.3 Resultados
   1.4 Componente principal
------------------------------------------------------------------ */

/* 1.1 Constantes de referência */
const REFERENCE = {
  // kg CO2e por refeição (porção de 150 g de proteína animal vs vegetal)
  co2PerBeefMeal: 6.9,
  co2PerChickenMeal: 1.8,
  co2PerPlantMeal: 0.4,
  // litros de água por refeição
  waterPerBeefMeal: 2310,
  waterPerChickenMeal: 645,
  waterPerPlantMeal: 120,
  // animais terrestres por refeição com carne (média ponderada de aves/bovinos)
  animalsPerMeatMeal: 0.28,
  treesPerTonCo2: 45,
};

/* 1.2 Componente de slider */
function Slider({
  label,
  value,
  onChange,
  min,
  max,
  suffix,
  hint,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  suffix: string;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-bone">{label}</label>
        <span className="font-mono text-sm font-bold text-acid">
          {value}
          <span className="ml-1 text-[0.72rem] tracking-[0.1em] text-fog">{suffix}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2.5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-line)] accent-acid
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#06140a]
          [&::-webkit-slider-thumb]:bg-acid [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(184,255,47,0.8)]"
        aria-label={label}
      />
      {hint && <p className="mt-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog/60">{hint}</p>}
    </div>
  );
}

/* 1.3 Resultados */
function ResultCard({
  value,
  unit,
  label,
  accent,
}: {
  value: string;
  unit: string;
  label: string;
  accent: "acid" | "volt" | "plasma";
}) {
  const color = accent === "volt" ? "text-[#7ae9ff]" : accent === "plasma" ? "text-plasma" : "text-acid";
  const ring =
    accent === "volt"
      ? "border-[rgba(34,230,255,0.28)] bg-[rgba(34,230,255,0.05)]"
      : accent === "plasma"
        ? "border-[rgba(255,45,149,0.28)] bg-[rgba(255,45,149,0.05)]"
        : "border-[rgba(184,255,47,0.28)] bg-[rgba(184,255,47,0.05)]";
  return (
    <div className={`rounded-md border p-4 ${ring}`}>
      <p className={`font-display text-[1.6rem] font-bold leading-none ${color}`}>
        {value}
        <span className="ml-1 text-[0.72rem] font-medium tracking-[0.06em] text-fog">{unit}</span>
      </p>
      <p className="mt-2 text-[0.75rem] leading-snug text-bone/75">{label}</p>
    </div>
  );
}

/* 1.4 Componente principal */
export function ImpactCalculator({ compact = false }: { compact?: boolean }) {
  const [meatMeals, setMeatMeals] = useState(7);
  const [dairyDays, setDairyDays] = useState(5);
  const [swapRate, setSwapRate] = useState(50);

  const result = useMemo(() => {
    const swappedPerWeek = (meatMeals * swapRate) / 100;
    const swappedDays = (dairyDays * swapRate) / 100;

    const co2Saved =
      swappedPerWeek * 52 * (REFERENCE.co2PerBeefMeal - REFERENCE.co2PerPlantMeal) +
      swappedDays * 52 * 0.9;
    const waterSaved =
      swappedPerWeek * 52 * (REFERENCE.waterPerBeefMeal - REFERENCE.waterPerPlantMeal) +
      swappedDays * 52 * 400;
    const animalsSaved = swappedPerWeek * 52 * REFERENCE.animalsPerMeatMeal;

    return {
      co2: Math.round(co2Saved),
      water: Math.round(waterSaved),
      animals: Math.round(animalsSaved),
      trees: Math.round((co2Saved / 1000) * REFERENCE.treesPerTonCo2),
    };
  }, [meatMeals, dairyDays, swapRate]);

  const format = (n: number) => n.toLocaleString("pt-BR");

  return (
    <div className={`card u-scanlines ${compact ? "p-5" : "p-6 md:p-8"}`}>
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-lg font-bold">
          {compact ? "Simule sua troca" : "Sua projeção anual"}
        </h3>
        <span className="chip !text-[0.64rem]">dados abertos</span>
      </div>

      <div className="mt-6 grid gap-6">
        <Slider
          label="Refeições com carne por semana"
          value={meatMeals}
          onChange={setMeatMeals}
          min={0}
          max={21}
          suffix="refeições"
        />
        <Slider
          label="Dias por semana com laticínios/ovos"
          value={dairyDays}
          onChange={setDairyDays}
          min={0}
          max={7}
          suffix="dias"
        />
        <Slider
          label="Quanto você quer substituir"
          value={swapRate}
          onChange={setSwapRate}
          min={10}
          max={100}
          suffix="%"
          hint={`Isso equivale a ${((meatMeals * swapRate) / 100).toFixed(1)} refeições trocadas por semana`}
        />
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <ResultCard value={format(result.animals)} unit="animais" label="poupados por ano" accent="plasma" />
        <ResultCard value={format(result.water)} unit="litros" label="de água economizados" accent="volt" />
        <ResultCard value={format(result.co2)} unit="kg CO₂e" label="de emissões evitadas" accent="acid" />
        <ResultCard value={format(result.trees)} unit="árvores" label="equivalente em absorção anual" accent="acid" />
      </div>

      <p className="mt-4 font-mono text-[0.64rem] uppercase leading-relaxed tracking-[0.12em] text-fog/50">
        Referências: Water Footprint Network (Mekonnen &amp; Hoekstra), FAO Livestock&apos;s Long
        Shadow. Valores médios — sua realidade pode variar.
      </p>

      {compact && (
        <Link href="/impacto" className="btn btn-ghost mt-5 w-full !text-[0.72rem]">
          Ver relatório detalhado →
        </Link>
      )}
    </div>
  );
}

/* Índice
   1 CALCULADORA DE IMPACTO
     1.1 Constantes de referência
     1.2 Componente de slider
     1.3 Resultados
     1.4 Componente principal
*/

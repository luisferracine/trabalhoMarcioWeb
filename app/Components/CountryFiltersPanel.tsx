"use client";

import { useMemo, useState } from "react";
import Card, { Country } from "./Card";

interface CountryFiltersPanelProps {
  countries: Country[];
}

export default function CountryFiltersPanel({
  countries,
}: CountryFiltersPanelProps) {
  const [activeRegion, setActiveRegion] = useState("Todos");

  const regions = useMemo(() => {
    const set = new Set<string>();

    countries.forEach((country) => {
      if (country.region && country.region.trim() !== "") {
        set.add(country.region);
      }
    });

    return ["Todos", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [countries]);

  const filteredCountries = useMemo(() => {
    if (activeRegion === "Todos") {
      return countries;
    }

    return countries.filter((country) => country.region === activeRegion);
  }, [activeRegion, countries]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-orange-200/70 bg-white/80 p-6 shadow-[0_16px_60px_-20px_rgba(194,65,12,0.35)] backdrop-blur sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
          Atlas de Países
        </p>
        <h1 className="max-w-3xl text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
          Explore bandeiras e nomes oficiais com um visual mais vivo.
        </h1>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          {filteredCountries.length} país(es) na categoria {activeRegion}.
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {regions.map((region) => {
            const isActive = region === activeRegion;

            return (
              <button
                key={region}
                type="button"
                onClick={() => setActiveRegion(region)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  isActive
                    ? "bg-slate-900 text-white shadow"
                    : "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-100"
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>
      </div>

      <Card lista={filteredCountries} />
    </>
  );
}

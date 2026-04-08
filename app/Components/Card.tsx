import Link from "next/link";

export interface Country {
  common: string;
  official: string;
  png: string;
  alt: string;
  region?: string;
  capital?: string;
  population?: number;
  code?: string;
}

interface CardProps {
  lista: Country[];
}

export default function Card({ lista }: CardProps) {
  if (lista.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-300 bg-white/90 p-8 text-center text-slate-700 shadow-sm">
        Nenhum país disponível no momento.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {lista.map((pais) => (
        <article
          key={pais.common}
          className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_14px_35px_-18px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(15,23,42,0.5)]"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-500 opacity-85" />

          <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
            <img
              src={pais.png}
              alt={pais.alt}
              loading="lazy"
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <h2 className="line-clamp-1 text-xl font-extrabold text-slate-900">
            {pais.common}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {pais.official}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-orange-100 px-2.5 py-1 font-semibold text-orange-700">
              {pais.code ?? "--"}
            </span>
            <span className="rounded-full bg-cyan-100 px-2.5 py-1 font-semibold text-cyan-700">
              {pais.region ?? "Sem região"}
            </span>
          </div>

          <div className="mt-3 text-xs text-slate-600">
            <p>Capital: {pais.capital ?? "Não informada"}</p>
            <p>
              População: {" "}
              {typeof pais.population === "number"
                ? pais.population.toLocaleString("pt-BR")
                : "Não informada"}
            </p>
          </div>

          <div className="mt-4">
            {pais.code ? (
              <Link
                href={`/pais/${pais.code.toLowerCase()}`}
                className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
              >
                Ver detalhes do país
              </Link>
            ) : (
              <span className="inline-flex items-center rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                Código indisponível
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

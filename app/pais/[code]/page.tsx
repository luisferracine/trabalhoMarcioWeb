import Link from "next/link";
import { notFound } from "next/navigation";
import { PegarPaisPorCodigo } from "../../lib/api/api";

export default async function PaisPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const pais = await PegarPaisPorCodigo(code);

  if (!pais) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-8">
      <section className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_18px_45px_-22px_rgba(15,23,42,0.4)] sm:p-8">
        <Link
          href="/"
          className="inline-flex rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Voltar para países
        </Link>

        <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={pais.png}
              alt={pais.alt}
              className="h-full min-h-36 w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-black text-slate-900">{pais.common}</h1>
            <p className="mt-1 text-slate-600">{pais.official}</p>

            <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <p>
                <strong>Código:</strong> {pais.code ?? "--"}
              </p>
              <p>
                <strong>Região:</strong> {pais.region ?? "Não informada"}
              </p>
              <p>
                <strong>Sub-região:</strong> {pais.subregion ?? "Não informada"}
              </p>
              <p>
                <strong>Capital:</strong> {pais.capital ?? "Não informada"}
              </p>
              <p>
                <strong>População:</strong>{" "}
                {typeof pais.population === "number"
                  ? pais.population.toLocaleString("pt-BR")
                  : "Não informada"}
              </p>
              <p>
                <strong>Área:</strong>{" "}
                {typeof pais.area === "number"
                  ? `${pais.area.toLocaleString("pt-BR")} km²`
                  : "Não informada"}
              </p>
              <p>
                <strong>TLD:</strong> {pais.tld && pais.tld.length > 0 ? pais.tld.join(", ") : "Não informado"}
              </p>
              <p>
                <strong>Fuso:</strong>{" "}
                {pais.timezones && pais.timezones.length > 0
                  ? pais.timezones.join(", ")
                  : "Não informado"}
              </p>
              <p>
                <strong>Continentes:</strong>{" "}
                {pais.continents && pais.continents.length > 0
                  ? pais.continents.join(", ")
                  : "Não informado"}
              </p>
              <p>
                <strong>FIFA:</strong> {pais.fifa ?? "Não informado"}
              </p>
              <p>
                <strong>Lado do volante:</strong> {pais.carSide ?? "Não informado"}
              </p>
              <p>
                <strong>Início da semana:</strong> {pais.startOfWeek ?? "Não informado"}
              </p>
              <p>
                <strong>Independente:</strong>{" "}
                {typeof pais.independent === "boolean"
                  ? pais.independent
                    ? "Sim"
                    : "Não"
                  : "Não informado"}
              </p>
              <p>
                <strong>Membro da ONU:</strong>{" "}
                {typeof pais.unMember === "boolean"
                  ? pais.unMember
                    ? "Sim"
                    : "Não"
                  : "Não informado"}
              </p>
            </div>

            <div className="mt-4 text-sm text-slate-700">
              <p>
                <strong>Idiomas:</strong>{" "}
                {pais.languages && pais.languages.length > 0
                  ? pais.languages.join(", ")
                  : "Não informado"}
              </p>
              <p className="mt-1">
                <strong>Moedas:</strong>{" "}
                {pais.currencies && pais.currencies.length > 0
                  ? pais.currencies.join(", ")
                  : "Não informado"}
              </p>
            </div>

            {pais.mapUrl ? (
              <a
                href={pais.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600"
              >
                Ver no Google Maps
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}

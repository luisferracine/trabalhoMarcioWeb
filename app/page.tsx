import Card from "./Components/Card";
import { PegarPais } from "./lib/api/api";

export default async function Home() {
  const data = await PegarPais();

  return (
    <main className="relative overflow-hidden px-4 py-10 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_26rem_at_15%_12%,rgba(255,163,81,0.25),transparent_70%),radial-gradient(30rem_20rem_at_85%_22%,rgba(0,186,173,0.22),transparent_68%),linear-gradient(135deg,#f8fafc_0%,#fff7ed_48%,#f1f5f9_100%)]" />

      <section className="mx-auto w-full max-w-7xl animate-rise">
        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-orange-200/70 bg-white/80 p-6 shadow-[0_16px_60px_-20px_rgba(194,65,12,0.35)] backdrop-blur sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
            Atlas de Países
          </p>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
            Explore bandeiras e nomes oficiais com um visual mais vivo.
          </h1>
          <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
            {data.length} países carregados da API Rest Countries em cartões
            responsivos.
          </p>
        </div>

        <Card lista={data} />
      </section>
    </main>
  );
}

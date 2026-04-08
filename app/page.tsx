import CountryFiltersPanel from "./Components/CountryFiltersPanel";
import { PegarPais } from "./lib/api/api";

export default async function Home() {
  const data = await PegarPais();

  return (
    <main className="relative overflow-hidden px-4 py-10 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_26rem_at_15%_12%,rgba(255,163,81,0.25),transparent_70%),radial-gradient(30rem_20rem_at_85%_22%,rgba(0,186,173,0.22),transparent_68%),linear-gradient(135deg,#f8fafc_0%,#fff7ed_48%,#f1f5f9_100%)]" />

      <section className="mx-auto w-full max-w-7xl animate-rise">
        <CountryFiltersPanel countries={data} />
      </section>
    </main>
  );
}

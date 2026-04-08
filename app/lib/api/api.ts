import { Country } from "../../Components/Card";

interface BuscarPaisResult {
  countries: Country[];
  raw: unknown[];
}

export interface CountryDetails extends Country {
  subregion?: string;
  area?: number;
  timezones?: string[];
  continents?: string[];
  tld?: string[];
  mapUrl?: string;
  fifa?: string;
  carSide?: string;
  startOfWeek?: string;
  languages?: string[];
  currencies?: string[];
  independent?: boolean;
  unMember?: boolean;
}

function normalizarPais(pais: any): Country {
  return {
    common: pais?.name?.common ?? "Sem nome",
    official: pais?.name?.official ?? "Sem nome oficial",
    png: pais?.flags?.png ?? "",
    alt: pais?.flags?.alt ?? `Bandeira de ${pais?.name?.common ?? "país"}`,
    region: pais?.region ?? "Região não informada",
    capital: Array.isArray(pais?.capital)
      ? pais.capital.join(", ")
      : "Capital não informada",
    population:
      typeof pais?.population === "number" ? pais.population : undefined,
    code: pais?.cca2 ?? "--",
  };
}

export async function PegarPais() {
  try {
    const url =
      "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,cca2";

    const response = await fetch(url);
    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.map(normalizarPais);
  } catch {
    return [];
  }
}

export async function PegarPaisPeloNome(nome: string): Promise<BuscarPaisResult> {
  try {
    const url = `https://restcountries.com/v3.1/name/${nome}`;
    const response = await fetch(url);
    if (!response.ok) {
      return { countries: [], raw: [] };
    }

    const raw = await response.json();
    const rawList = Array.isArray(raw) ? raw : [];
    return {
      raw: rawList,
      countries: rawList.map(normalizarPais),
    };
  } catch {
    return { countries: [], raw: [] };
  }
}

export async function PegarPaisPorCodigo(
  code: string
): Promise<CountryDetails | null> {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return null;
    }

    const raw = await response.json();
    const pais = Array.isArray(raw) ? raw[0] : raw;

    if (!pais) {
      return null;
    }

    return {
      ...normalizarPais(pais),
      subregion: pais?.subregion,
      area: typeof pais?.area === "number" ? pais.area : undefined,
      timezones: Array.isArray(pais?.timezones) ? pais.timezones : [],
      continents: Array.isArray(pais?.continents) ? pais.continents : [],
      tld: Array.isArray(pais?.tld) ? pais.tld : [],
      mapUrl: pais?.maps?.googleMaps,
      fifa: pais?.fifa,
      carSide: pais?.car?.side,
      startOfWeek: pais?.startOfWeek,
      languages: pais?.languages ? Object.values(pais.languages) : [],
      currencies: pais?.currencies
        ? Object.values(pais.currencies).map((currency: any) =>
            currency?.name ? String(currency.name) : ""
          )
        : [],
      independent:
        typeof pais?.independent === "boolean" ? pais.independent : undefined,
      unMember: typeof pais?.unMember === "boolean" ? pais.unMember : undefined,
    };
  } catch {
    return null;
  }
}

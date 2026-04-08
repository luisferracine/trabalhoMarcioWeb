export async function PegarPais() {
  try {
    const url = `https://restcountries.com/v3.1/all?fields=name,flags`;

    const response = await fetch(url);
    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return data.map((pais: any) => ({
      common: pais?.name?.common ?? "Sem nome",
      official: pais?.name?.official ?? "Sem nome oficial",
      png: pais?.flags?.png ?? "",
      alt: pais?.flags?.alt ?? `Bandeira de ${pais?.name?.common ?? "país"}`,
    }));
  } catch (error) {
    return [];
  }
}

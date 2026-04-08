import Card from "./Components/Card";
import { PegarPais } from "./lib/api/api";

export default async function Home() {
  const data = await PegarPais();

  return (
    <div>
      <h1>TESTE</h1>
      <Card lista={data} />
    </div>
  );
}

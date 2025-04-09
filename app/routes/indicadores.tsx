import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Indicadores - Astrea Clone" }];
};

export default function Indicadores() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Indicadores</h1>
      <p>Conteúdo de Indicadores (BI) aqui.</p>
    </div>
  );
}

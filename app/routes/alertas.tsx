import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Alertas - Astrea Clone" }];
};

export default function Alertas() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Alertas</h1>
      <p>Conteúdo de Alertas aqui.</p>
    </div>
  );
}

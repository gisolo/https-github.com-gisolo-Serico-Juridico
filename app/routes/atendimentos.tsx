import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Atendimentos - Astrea Clone" }];
};

export default function Atendimentos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Atendimentos</h1>
      <p>Conteúdo de Atendimentos aqui.</p>
    </div>
  );
}

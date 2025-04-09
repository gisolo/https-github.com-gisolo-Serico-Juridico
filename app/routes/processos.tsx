import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Processos e Casos - Astrea Clone" }];
};

export default function Processos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Processos e Casos</h1>
      <p>Conteúdo de Processos e Casos aqui.</p>
    </div>
  );
}

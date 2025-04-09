import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Financeiro - Astrea Clone" }];
};

export default function Financeiro() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Financeiro</h1>
      <p>Conteúdo do Financeiro aqui.</p>
    </div>
  );
}

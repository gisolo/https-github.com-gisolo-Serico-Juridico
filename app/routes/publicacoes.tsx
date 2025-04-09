import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Publicações - Astrea Clone" }];
};

export default function Publicacoes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Publicações</h1>
      <p>Conteúdo de Publicações aqui.</p>
    </div>
  );
}

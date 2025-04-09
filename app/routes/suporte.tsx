import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Suporte - Astrea Clone" }];
};

export default function Suporte() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Suporte</h1>
      <p>Conteúdo de Suporte aqui.</p>
    </div>
  );
}

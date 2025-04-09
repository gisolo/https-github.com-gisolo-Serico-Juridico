import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Contatos - Astrea Clone" }];
};

export default function Contatos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contatos</h1>
      <p>Conteúdo de Contatos aqui.</p>
    </div>
  );
}

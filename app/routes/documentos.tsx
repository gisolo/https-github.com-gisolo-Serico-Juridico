import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Documentos - Astrea Clone" }];
};

export default function Documentos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Documentos</h1>
      <p>Conteúdo de Documentos aqui.</p>
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Agenda - Astrea Clone" }];
};

export default function Agenda() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Agenda</h1>
      <p>Conteúdo da Agenda aqui.</p>
    </div>
  );
}

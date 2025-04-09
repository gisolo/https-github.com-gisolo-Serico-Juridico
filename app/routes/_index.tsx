import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Área de Trabalho - Astrea Clone" },
    { name: "description", content: "Software Jurídico" },
  ];
};

// This is the component for the "/" route (Área de trabalho)
export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Área de Trabalho</h1>
      <p>Bem-vindo ao seu painel de controle.</p>
      {/* Add dashboard widgets and content here */}
    </div>
  );
}

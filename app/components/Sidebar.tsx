import { Link, NavLink } from "@remix-run/react";

const menuItems = [
  { name: "Área de trabalho", path: "/", icon: "🏠" }, // Placeholder icon
  { name: "Agenda", path: "/agenda", icon: "📅" },
  { name: "Contatos", path: "/contatos", icon: "👥" },
  { name: "Atendimentos", path: "/atendimentos", icon: "📞" },
  { name: "Processos e casos", path: "/processos", icon: "⚖️" },
  { name: "Publicações", path: "/publicacoes", icon: "📰" },
  { name: "Financeiro", path: "/financeiro", icon: "💰" },
  { name: "Documentos", path: "/documentos", icon: "📄" },
  { name: "Indicadores", path: "/indicadores", icon: "📊" },
  { name: "Alertas", path: "/alertas", icon: "🔔" },
  { name: "Suporte", path: "/suporte", icon: "❓" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col fixed top-0 left-0">
      <div className="p-4 border-b border-gray-700">
        <Link to="/" className="text-2xl font-bold">
          Astrea Clone
        </Link>
      </div>
      <nav className="flex-grow p-2">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="mb-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded hover:bg-gray-700 transition-colors ${
                    isActive ? "bg-gray-700 font-semibold" : ""
                  }`
                }
                end // Use 'end' for the home path to avoid matching sub-routes
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700 text-sm">
        {/* Footer or User Info can go here */}
        User Info
      </div>
    </aside>
  );
}

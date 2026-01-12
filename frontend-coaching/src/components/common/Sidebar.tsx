import { useState } from "react";
import {
  LayoutDashboard,
  Activity,
  BarChart3,
  ChevronLeft,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const navigation = [
  { name: "General", path:'', icon: LayoutDashboard, current: true },
  { name: "Hábitos", path:'habits', icon: Activity, current: false },
  { name: "Estadísticas", path:'stats', icon: BarChart3, current: false },
  { name: "Configuración", path:'', icon: Settings, current: false },
];
export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-14 px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded-sm" />
            <span className="font-semibold text-sidebar-foreground">
              Dashboard
            </span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors"
        >
          <ChevronLeft
            className={cn(
              "w-4 h-4 text-sidebar-foreground transition-transform",
              collapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
        <div>
          {!collapsed && (
            <h3 className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Main
            </h3>
          )}
          <ul className="space-y-1">
            {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    item.current
                      ? "bg-sidebar-accent text-sidebar-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  )}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {!collapsed && <span className="text-sm">{item.name}</span>}
                </Link>
            ))}
          </ul>
        </div>
      </nav>
      {/* User */}
      <div className="p-3 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-medium">
            U
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Usuario
              </p>
              <p className="text-xs text-muted-foreground truncate">
                usuario@email.com
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

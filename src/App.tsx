import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  FileText,
  Settings,
  Bell,
  LogOut,
  ChevronRight,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dashboard } from "@/components/Dashboard";
import { Scholarships } from "@/components/Scholarships";
import { Applicants } from "@/components/Applicants";
import { Applications } from "@/components/Applications";
import { Settings as SettingsComponent } from "@/components/Settings";

const sidebarItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "scholarships", icon: GraduationCap, label: "Scholarships" },
  { id: "applicants", icon: Users, label: "Applicants" },
  { id: "applications", icon: FileText, label: "Applications" },
  { id: "settings", icon: Settings, label: "Settings" },
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "scholarships":
        return <Scholarships />;
      case "applicants":
        return <Applicants />;
      case "applications":
        return <Applications />;
      case "settings":
        return <SettingsComponent />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-card border-r border-border transition-all duration-300",
          collapsed ? "w-[80px]" : "w-[250px]"
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center space-x-2">
            {/* <GraduationCap className="h-8 w-8 text-primary" /> */}
            {!collapsed && (
              <span className="font-bold text-lg">Nkumba Uni</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform",
                collapsed ? "rotate-180" : ""
              )}
            />
          </Button>
        </div>
        <nav className="p-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant={activeView === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start mb-1",
                collapsed ? "px-2" : "px-4"
              )}
              onClick={() => setActiveView(item.id)}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search scholarships..." className="pl-9" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">{renderContent()}</div>
      </main>
    </div>
  );
}

export default App;

import { ChevronDown, Calendar, Bell, MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-14 px-6 border-b border-border bg-card">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-foreground font-primary">Overview</h1>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <span className="text-muted-foreground">Edge Network</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">Compute</span>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden sm:flex gap-2 bg-transparent">
          <span>Production</span>
          <ChevronDown className="w-4 h-4" />
        </Button>

        <Button variant="outline" size="sm" className="hidden sm:flex gap-2 bg-transparent">
          <Calendar className="w-4 h-4" />
          <span>Last 12 hours</span>
          <ChevronDown className="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
        </Button>

        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}

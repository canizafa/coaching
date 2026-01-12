import { Header, Sidebar } from "./components"
import { Outlet } from "react-router"


export const Layout = () => {
  return (
    <>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <Outlet />
        </div>
      </div>    
    </>
  )
}

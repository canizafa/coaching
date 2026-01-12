import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { LoginPage, DashboardPage, HabitsPage, StatsPage } from "./pages";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <LoginPage />
  },
  {
    path:'dashboard',
    element: <Layout />,
    children: [
      {index: true, Component: DashboardPage},
      {path:'habits', Component: HabitsPage},
      {path:'stats', Component: StatsPage} 
    ]
  },
])
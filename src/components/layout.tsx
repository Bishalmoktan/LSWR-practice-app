import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <main className="flex flex-col space-y-8 min-h-screen bg-[#F9F9F9]">
    <Navbar />
    <div className="flex-grow">
    <Outlet />
    </div>
    <Footer />
    </main>
  )
}
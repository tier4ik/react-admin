import { useContext, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("dashboard");
    }
  }, [navigate, location]);

  const themeClass = `${
    theme === "dark" ? "bg-slate-900" : "bg-gray-50"
  } h-screen`;
  return (
    <div className={themeClass}>
      <div
        className="grid xl:container mx-auto gap-x-6
      grid-cols-[auto_1fr] grid-rows-[60px_1fr]"
      >
        <Topbar />
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;

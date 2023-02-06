import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const SidebarUser = () => {
  const { theme } = useContext(ThemeContext);

  const usernameClasses = `
    ${theme === "dark" ? "text-slate-200" : "text-gray-800"} 
    text-2xl font-bold
  `;

  return (
    <div className="flex flex-col items-center my-6">
      <img
        className="h-20 w-20 rounded-full mb-3"
        src="/assets/user.png"
        alt="avatar"
      />
      <p className={usernameClasses}>Ed Roh</p>
      <p className="text-teal-600 text-md">VP Fancy Admin</p>
    </div>
  );
};

export default SidebarUser;

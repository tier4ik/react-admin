import { useState } from "react";

import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import SidebarUser from "./Sidebar__User";
import SidebarNavigation from "./Sidebar__Navigation";
import { ThemeContext } from "../../context/ThemeContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { theme } = useContext(ThemeContext);

  const handleOpenState: React.MouseEventHandler = (evt) => {
    setIsOpen((prevState) => !prevState);
  };

  const sidebarContainerClasses = `
  ${isOpen ? "w-[260px]" : "w-[100px]"}
  ${theme === "dark" ? "bg-slate-800" : "bg-gray-200"}
   col-start-1 col-span-1 row-start-1 row-span-2 h-screen p-6`;

  const sidebarHeaderClasses = `
    ${isOpen ? "justify-between" : "justify-center mb-6"}
    ${theme === "dark" ? "text-slate-300" : "text-gray-800"}
    text-2xl flex items-center`;

  const inViewAnimation = `${
    isOpen ? "animate-[inView_0.5s_ease-in-out_forwards]" : ""
  }`;

  return (
    <div className={sidebarContainerClasses}>
      <div className={sidebarHeaderClasses}>
        {Boolean(isOpen) && <h2 className={inViewAnimation}>ADMINIS</h2>}
        <BiMenu className="cursor-pointer" onClick={handleOpenState} />
      </div>
      <div className={inViewAnimation}>
        {Boolean(isOpen) && <SidebarUser />}
        <SidebarNavigation isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Sidebar;

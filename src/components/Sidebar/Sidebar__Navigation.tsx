import { useContext } from "react";
import { BsHouseDoor, BsCardList, BsFillBarChartFill } from "react-icons/bs";
import {
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlinePieChart,
  AiOutlineLineChart,
} from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const SidebarNavigation = ({ isOpen }: { isOpen: boolean }) => {
  const { theme } = useContext(ThemeContext);

  const menuClasses = `
    ${isOpen ? "pl-2 text-sm" : "text-xl"}
    ${theme === "dark" ? "text-slate-200" : "text-gray-800"}
  `;
  const liClasses = `${isOpen ? "" : "flex justify-center"}`;
  const linkClasses = ({ isActive }: { isActive: boolean }) => {
    return `${isActive ? "text-indigo-500" : ""}
    flex items-center p-2 hover:text-indigo-500`;
  };
  const iconClasses = `${isOpen ? "mr-5" : ""}`;
  const navSubheadingClasses = "text-slate-400 py-4";

  return (
    <nav>
      <ul className={menuClasses}>
        <li className={liClasses}>
          <NavLink to="/dashboard" className={linkClasses}>
            <BsHouseDoor className={iconClasses} />
            {Boolean(isOpen) && <span>Dashboard</span>}
          </NavLink>
        </li>
        <li className={navSubheadingClasses.concat(" ", liClasses)}>Data</li>
        <li className={liClasses}>
          <NavLink to="/team" className={linkClasses}>
            <AiOutlineTeam className={iconClasses} />
            {Boolean(isOpen) && <span>Manage Team</span>}
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink to="contacts" className={linkClasses}>
            <MdContacts className={iconClasses} />
            {Boolean(isOpen) && <span>Contacts Information</span>}
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink to="invoices" className={linkClasses}>
            <BsCardList className={iconClasses} />
            {Boolean(isOpen) && <span>Invoices Balances</span>}
          </NavLink>
        </li>
        <li className={navSubheadingClasses.concat(" ", liClasses)}>Pages</li>
        <li className={liClasses}>
          <NavLink to="form" className={linkClasses}>
            <AiOutlineUser className={iconClasses} />
            {Boolean(isOpen) && <span>Profile Form</span>}
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink to="calendar" className={linkClasses}>
            <AiOutlineCalendar className={iconClasses} />
            {Boolean(isOpen) && <span>Calendar</span>}
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink to="faq" className={linkClasses}>
            <FaQuestionCircle className={iconClasses} />
            {Boolean(isOpen) && <span>FAQ Page</span>}
          </NavLink>
        </li>
        <li className={navSubheadingClasses}>Charts</li>
        <li className={liClasses}>
          <NavLink to="bar" className={linkClasses}>
            <BsFillBarChartFill className={iconClasses} />
            {Boolean(isOpen) && <span>Bar Chart</span>}
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink to="pie" className={linkClasses}>
            <AiOutlinePieChart className={iconClasses} />
            {Boolean(isOpen) && <span>Pie Chart</span>}
          </NavLink>
        </li>
        <li className={liClasses}>
          <NavLink to="line" className={linkClasses}>
            <AiOutlineLineChart className={iconClasses} />
            {Boolean(isOpen) && <span>Line Chart</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNavigation;

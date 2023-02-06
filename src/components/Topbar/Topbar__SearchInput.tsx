import { useContext } from "react";
import { MdSearch } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";

const TopbarSearchInput = () => {
  const { theme } = useContext(ThemeContext);

  const searchClasses = `
  ${
    theme === "dark"
      ? "bg-slate-700 text-slate-200"
      : "bg-gray-200 text-gray-800"
  }
  py-1 pl-4 pr-8 rounded-md h-10 focus:outline-none focus:outline-slate-500
  `;

  return (
    <label htmlFor="search" className="relative">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className={searchClasses}
      />
      <button className="absolute right-0 top-0 bottom-0 my-auto text-xl text-slate-300 px-2 outline-none outline-offset-0 focus-visible:outline-slate-500 rounded-md">
        <MdSearch />
      </button>
    </label>
  );
};

export default TopbarSearchInput;

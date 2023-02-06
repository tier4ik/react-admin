import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

interface PageHeaderTypes {
  header: string;
  subheader: string;
}

const PageHeader = ({ header, subheader }: PageHeaderTypes) => {
  const { theme } = useContext(ThemeContext);

  const headerClasses = `
    ${theme === "dark" ? "text-slate-200" : "text-gray-800"} 
    text-2xl font-bold
  `;

  const subheaderClasses = "text-teal-600 text-md";

  return (
    <div>
      <h2 className={headerClasses}>{header}</h2>
      <span className={subheaderClasses}>{subheader}</span>
    </div>
  );
};

export default PageHeader;

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ProgressCircle from "../ProgressCircle";

interface StatBoxPropsType {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  progress: string;
  increase: string;
}

const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxPropsType) => {
  const { theme } = useContext(ThemeContext);

  const boxClasses = `
    ${
      theme === "dark"
        ? "bg-slate-800 text-slate-200"
        : "bg-gray-200 text-gray-800"
    }
    w-full h-full flex flex-col justify-center gap-2 p-4 rounded-md
  `;

  return (
    <div className={boxClasses}>
      <div className="flex justify-between items-center">
        <div>
          {icon}
          <h4>{title}</h4>
        </div>
        <div>
          <ProgressCircle progress={progress} size="50" />
        </div>
      </div>
      <div className="flex justify-between text-teal-500">
        <h5>{subtitle}</h5>
        <h5>{increase}</h5>
      </div>
    </div>
  );
};

export default StatBox;

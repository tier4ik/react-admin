import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface ProgressCirclePropsType {
  progress?: string;
  size?: string;
}

const ProgressCircle = ({
  progress = "0.75",
  size = "40",
}: ProgressCirclePropsType) => {
  const { theme } = useContext(ThemeContext);

  const angle = parseFloat(progress) * 360;

  const circleClasses = `rounded-full`;

  const gradient = `radial-gradient(${
    theme === "dark" ? "#1e293b" : "#e2e8f0"
  } 55%, transparent 56%),
  conic-gradient(transparent 0deg ${angle}deg, #4338ca ${angle}deg 360deg),
  #14b8a6`;

  const gradientStyle = {
    background: gradient,
    width: `${size}px`,
    height: `${size}px`,
  };

  return <div className={circleClasses} style={gradientStyle}></div>;
};

export default ProgressCircle;

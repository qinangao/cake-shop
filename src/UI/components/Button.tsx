import { Link } from "react-router-dom";
type ButtonProps = {
  to?: string;
  children: React.ReactNode;
  fontSize?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverScale?: string;
  isHover?: boolean;
  onClick?: () => void;
  className?: string; // Add className property
};

function Button({
  children,
  to,
  className = "",
  fontSize = "18px",
  width = "auto",
  height = "35px",
  bgColor = "white",
  textColor = "black",
  hoverBgColor = "black",
  hoverTextColor = "white",
  isHover = true,
  hoverScale = "105",
  onClick,
}: ButtonProps) {
  const baseStyle = {
    fontSize,
    width,
    height,
    backgroundColor: bgColor,
    color: textColor,
  };

  const scaleClass = isHover && hoverScale ? `hover:scale-${hoverScale}` : "";

  const commonClasses = `border-2 border-black px-3 rounded-xl text-center cursor-pointer transform transition-transform ${scaleClass} ${className}`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (isHover) {
      const el = e.target as HTMLElement;
      el.style.backgroundColor = hoverBgColor;
      el.style.color = hoverTextColor;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (isHover) {
      const el = e.target as HTMLElement;
      el.style.backgroundColor = bgColor;
      el.style.color = textColor;
    }
  };

  if (to) {
    return (
      <Link
        to={to}
        className={commonClasses}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={commonClasses}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

export default Button;

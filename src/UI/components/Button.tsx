import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

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
  className?: string;
  disabled?: boolean;
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
  disabled = false,
}: ButtonProps) {
  const navigate = useNavigate();
  const baseStyle: React.CSSProperties = {
    fontSize,
    width,
    height,
    backgroundColor: bgColor,
    color: textColor,

    cursor: disabled ? "not-allowed" : "pointer",
  };

  const scaleClass =
    isHover && hoverScale && !disabled ? `hover:scale-${hoverScale}` : "";

  const commonClasses = `border-2 border-black px-3 rounded-xl flex items-center justify-center cursor-pointer transform transition-transform ${scaleClass} ${className}`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (isHover && !disabled) {
      const el = e.target as HTMLElement;
      el.style.backgroundColor = hoverBgColor;
      el.style.color = hoverTextColor;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (isHover && !disabled) {
      const el = e.target as HTMLElement;
      el.style.backgroundColor = bgColor;
      el.style.color = textColor;
    }
  };

  const handleClick = useCallback(() => {
    if (disabled) return;
    if (onClick) onClick();
    else if (to) navigate(to);
  }, [onClick, disabled, to, navigate]);

  return (
    <button
      onClick={handleClick}
      className={commonClasses}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

type ButtonProps = {
  children: React.ReactNode;
  fontSize?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  isHover?: boolean;
  onClick?: () => void;
  className?: string; // Add className property
};

function Button({
  children,
  className = "", // ✅ Accept custom classNames
  fontSize = "18px",
  width = "auto",
  height = "35px",
  bgColor = "white",
  textColor = "black",
  hoverBgColor = "black",
  hoverTextColor = "white",
  isHover = true,
  onClick,
}: ButtonProps) {
  const baseStyle = {
    fontSize,
    width,
    height,
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <button
      onClick={onClick}
      className={`border-2 border-black px-3  rounded-xl cursor-pointer transform transition-transform ${
        isHover ? "hover:scale-110" : ""
      } ${className}`} // ✅ Apply visibility and other styles from props
      style={baseStyle}
      onMouseEnter={(e) => {
        if (isHover) {
          (e.target as HTMLButtonElement).style.backgroundColor = hoverBgColor;
          (e.target as HTMLButtonElement).style.color = hoverTextColor;
        }
      }}
      onMouseLeave={(e) => {
        if (isHover) {
          (e.target as HTMLButtonElement).style.backgroundColor = bgColor;
          (e.target as HTMLButtonElement).style.color = textColor;
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;

import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import React from "react";

interface CustomButtonProps extends Omit<AntButtonProps, "variant" | "size"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<CustomButtonProps> = ({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white border-blue-600";
      case "secondary":
        return "bg-gray-600 hover:bg-gray-700 text-white border-gray-600";
      case "outline":
        return "bg-transparent hover:bg-blue-50 text-blue-600 border-blue-600";
      case "ghost":
        return "bg-transparent hover:bg-gray-100 text-gray-700 border-transparent";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white border-blue-600";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-3 py-1.5 text-sm";
      case "medium":
        return "px-4 py-2 text-base";
      case "large":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };

  return (
    <AntButton
      className={`${getVariantClasses()} ${getSizeClasses()} ${className} transition-colors duration-200`}
      {...props}
    >
      {children}
    </AntButton>
  );
};

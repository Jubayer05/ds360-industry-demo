import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded 
        border border-gray-200 dark:border-gray-700
        p-6
        ${hover ? "hover:shadow-lg transition-shadow duration-200" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

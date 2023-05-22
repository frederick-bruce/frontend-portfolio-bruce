import React from "react";
import { DiNpm, DiMongodb } from "react-icons/di";
import { SiJest, SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const TechStack = () => {
  const icons = [
    { icon: <SiJest size={48} className="text-secondary" /> },
    { icon: <DiMongodb size={48} className="text-secondary" /> },
    { icon: <TbBrandNextjs size={48} className="text-secondary" /> },
    { icon: <DiNpm size={48} className="text-secondary" /> },
    { icon: <SiRedux size={48} className="text-secondary" /> },
    { icon: <SiTailwindcss size={48} className="text-secondary" /> },
  ];

  return (
    <div className="flex justify-evenly mx-4">
      {icons.map((item, index) => (
        <div key={index}>{item.icon}</div>
      ))}
    </div>
  );
};

export default TechStack;

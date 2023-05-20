import React from "react";
import { DiNpm, DiMongodb } from "react-icons/di";
import { SiJest, SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import styles from "@/components/TechStack/TechStack.module.css";

const TechStack = () => {
  const icons = [
    { icon: <SiJest size={32} className="text-secondary" /> },
    { icon: <DiMongodb size={32} className="text-secondary" /> },
    { icon: <TbBrandNextjs size={32} className="text-secondary" /> },
    { icon: <DiNpm size={32} className="text-secondary" /> },
    { icon: <SiRedux size={32} className="text-secondary" /> },
    { icon: <SiTailwindcss size={32} className="text-secondary" /> },
  ];

  return (
    <div className={styles.iconContainer}>
      {icons.map((item, index) => (
        <div key={index} className={styles.TechStack}>
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default TechStack;

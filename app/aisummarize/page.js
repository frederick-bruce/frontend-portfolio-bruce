import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import styles from "./AiSummarize.module.css"; // Import the CSS file or define the styles inline
import "../../styles/globals.css";
import AISum from "../../public/assets/aisum.png";

const AiSummarize = () => {
  return (
    <div>
      <div className={`${styles.heroImage} relative mt-5`}>
        <div className={styles.overlay} />
        <Image className={styles.image} src={AISum} alt="/" />
        <div className={styles.overlayContent}>
          <h2 className={styles.title}>AI Summarize</h2>
          <h3 className={styles.subtitle}>React JS / Tailwind / ChatGPT</h3>
        </div>
      </div>

      <div className={`${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.desc_title}>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
          </p>
          <a
            href="https://github.com/frederick-bruce/ai-summarizer"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.button}>Code</button>
          </a>
          <a
            href="https://glittery-faloodeh-4d6110.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.button}>Demo</button>
          </a>
          <a href="/projects">
            <button className={styles.button}>Back</button>
          </a>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <p className={styles.sidebarTitle}>Technologies</p>
            <div className={styles.techList}>
              <p className={styles.techItem}>
                <RiRadioButtonFill className={styles.techIcon} /> NextJS
              </p>
              <p className={styles.techItem}>
                <RiRadioButtonFill className={styles.techIcon} /> Tailwind
              </p>
              <p className={styles.techItem}>
                <RiRadioButtonFill className={styles.techIcon} /> Javascript
              </p>
              <p className={styles.techItem}>
                <RiRadioButtonFill className={styles.techIcon} /> ChatGPT
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSummarize;

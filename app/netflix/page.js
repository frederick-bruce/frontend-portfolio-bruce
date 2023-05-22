import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Filmpire from "../../public/assets/filmpire.jpg";
import styles from "./Netflix.module.css";
import "../../styles/globals.css";
const Netflix = () => {
  return (
    <div>
      <div className={`${styles.heroImage} relative mt-5`}>
        <div className={styles.overlay} />
        <Image className={styles.image} src={Filmpire} alt="/" />
        <div className={styles.overlayContent}>
          <h2 className={styles.title}>Filmpire</h2>
          <h3 className={styles.subtitle}>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className={`${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.desc_title}>Overview</h2>
          <p>
            I built this application in React JS and is hosted on Firebase
            hosting. This app features user authentication with firebase as well
            as the firestore cloud storage database. This application is pulling
            movie data from an the IMDB movie API and displaying different
            categories. It features horizontal sliding and a featured selection.
            The useContext hook is also being implemented for app-wide state
            management.
          </p>
          <a
            href="https://github.com/frederick-bruce/Firebase_netflix"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.button}>Code</button>
          </a>
          <a
            href="https://netflix-portfolio-d35be.web.app/"
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
                <RiRadioButtonFill className={styles.techIcon} /> React JS
              </p>
              <p className={styles.techItem}>
                <RiRadioButtonFill className={styles.techIcon} /> Tailwind
              </p>
              <p className={styles.techItem}>
                <RiRadioButtonFill className={styles.techIcon} /> Javascript
              </p>
              <p className={styles.techItem}>
                <RiRadioButtonFill className={styles.techIcon} /> Firebase
              </p>
              <p className={styles.techItem}>
                <RiRadioButtonFill className={styles.techIcon} /> IMDB API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netflix;

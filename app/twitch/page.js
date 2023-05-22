import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import twitch from "../../public/assets/twitch.jpg";
import styles from "./Twitch.module.css";
import "../../styles/globals.css";
const Twitch = () => {
  return (
    <div>
      <div className={`${styles.heroImage} relative mt-5`}>
        <div className={styles.overlay} />
        <Image className={styles.image} src={twitch} alt="/" />
        <div className={styles.overlayContent}>
          <h2 className={styles.title}>Twitch</h2>
          <h3 className={styles.subtitle}>Next JS / Tailwind / Github Auth / Google Auth</h3>
        </div>
      </div>

      <div className={`${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.desc_title}>Overview</h2>
          <p>
          This application was built using NEXT.JS and is styled with Tailwind CSS. The application is hosted statically using Vercel. This is a mobile responsive recreation of Twitch.tv and features Next/Auth.js for authentication. Users may choose to be authenticated with either a Github account or a Google account. A few features to note with this project are lazy loading images using the Image component, built in routing, and Next/Auth Context.
          </p>
          <a
            href="https://github.com/frederick-bruce/twitch-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.button}>Code</button>
          </a>
          <a
            href="https://twitch-nextjs-tailwind.vercel.app/"
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

export default Twitch;

import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import property from "../../public/assets/property.jpg";
import styles from "./property.module.css";
import "../../styles/globals.css";
const Property = () => {
  return (
    <div>
      <div className={`${styles.heroImage} relative mt-5`}>
        <div className={styles.overlay} />
        <Image className={styles.image} src={property} alt="/" />
        <div className={styles.overlayContent}>
          <h2 className={styles.title}>Property Finder</h2>
          <h3 className={styles.subtitle}>React JS / Tailwind / Firebase</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;

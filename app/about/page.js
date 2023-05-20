/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import "@/styles/globals.css";

const AboutPage = () => {
  return (
    <section className="wrapper">
      <div className="container px-5">
        <h2 className=" about-title text-xl md:text-3xl lg:text-4xl ">
          Unleashing Creativity, One Pixel at a Time:
          <br /> Exploring the Multifaceted World of a Passionate Front End
          Developer
        </h2>
        <div className="text-xl leading-relaxed">
          <p>
            Hey there! I'm Freddy, a devoted family person, an avid sports
            enthusiast, a gaming aficionado, and a stargazing fanatic!
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl about-title">
            Sports Spectator Extraordinaire: Celebrating the Thrills of Victory
            and the Agony of Defeat
          </h3>
          <p>
            When it comes to sports, you'll find me glued to the TV, cheering on
            my favorite teams and getting immersed in the thrilling world of
            competition. Whether it's basketball, football, or any other sport,
            I can't resist the excitement that fills the air.
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl about-title">
            Family First: Creating Unforgettable Moments and Cherished Bonds
          </h3>
          <p>
            But beyond the sports arena, my heart truly belongs to my family.
            Spending quality time with my loved ones brings me immense joy and
            fulfillment. Whether it's a cozy movie night, a fun-filled day
            outdoors, or simply sharing laughter over a delicious meal, family
            time is priceless to me.
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl about-title">
            A Gamer's Odyssey: Conquering Virtual Realms and Connecting
            Communities
          </h3>
          <p>
            When I'm not immersed in the sports world or enjoying family
            moments, you'll likely find me diving into the virtual realms of
            video games. It's my way of unleashing my inner adventurer, solving
            puzzles, and connecting with a community of fellow gamers. From
            action-packed adventures to mind-bending quests, the gaming universe
            offers endless excitement and escape.
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl about-title">
            Stargazing: Exploring the Cosmos and Finding Inspiration
          </h3>
          <p>
            And when the night sky twinkles with countless stars, I find myself
            captivated by their beauty and mystery. Stargazing has become a
            passion of mine, as I love to explore the wonders of the cosmos,
            marvel at distant galaxies, and contemplate our place in the
            vastness of the universe.
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl about-title">
            Journeying through Sports, Family, Gaming, and the Celestial
            Symphony
          </h3>
          <p>
            So, that's a little glimpse into my world! Whether it's the thrill
            of sports, the warmth of family bonds, the excitement of virtual
            realms, or the enchantment of the stars, I find inspiration and joy
            in these passions. Let's embark on this journey together and create
            something amazing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

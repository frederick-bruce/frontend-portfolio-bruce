import Image from "next/image";
import AboutImg from "../../public/profile.jpg";
import "@/styles/globals.css";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center pt-2">
        <div className="rounded-full overflow-hidden">
          <Image src={AboutImg} alt="Profile Image" width={150} height={150} />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">
          Unleashing Creativity, One Pixel at a Time: Exploring the Multifaceted
          World of a Passionate Front End Developer
        </h2>
        <p className="text-lg">
          Hey there! I&#39;m Freddy, a devoted family person, an avid sports
          enthusiast, a gaming aficionado, and a stargazing fanatic!
        </p>
        <h2 className="text-2xl font-bold mt-4">
          Unforgettable Moments, Unparalleled Fandom: Celebrating the Thrills of
          Victory and the Agony of Defeat
        </h2>
        <p className="text-lg">
          When it comes to sports, you&#39;ll find me glued to the TV, cheering
          on my favorite teams and getting immersed in the thrilling world of
          competition. Whether it&#39;s basketball, football, or any other
          sport, I can&#39;t resist the excitement that fills the air.
        </p>
        <h2 className="text-2xl font-bold mt-4">
          Family First: Creating Unforgettable Moments and Cherished Bonds
        </h2>
        <p className="text-lg">
          But beyond the love I have for sports, my heart truly belongs to my
          family. Spending quality time with my loved ones brings me immense joy
          and fulfillment. Whether it&#39;s a cozy movie night, a fun-filled day
          outdoors, or simply sharing laughter over a delicious meal, family
          time is priceless to me.
        </p>
        <h2 className="text-2xl font-bold mt-4">
          A Gamer&#39;s Odyssey: Conquering Virtual Realms and Connecting
          Communities
        </h2>
        <p className="text-lg">
          When I&#39;m not immersed in the sports world or enjoying family
          moments, you&#39;ll likely find me diving into the virtual realms of
          video games. It&#39;s my way of unleashing my inner adventurer,
          solving puzzles, and connecting with a community of fellow gamers.
          From action-packed adventures to mind-bending quests, the gaming
          universe offers endless excitement, lifelong bonds with friends, and a
          virtual escape.
        </p>
        <h2 className="text-2xl font-bold mt-4">
          Stargazing: Exploring the Cosmos and Finding Inspiration
        </h2>
        <p className="text-lg">
          And when the night sky twinkles with countless stars, I find myself
          captivated by their beauty and mystery. Stargazing has become a
          passion of mine, as I love to explore the wonders of the cosmos,
          marvel at distant galaxies, and contemplate our place in the vastness
          of the universe.
        </p>
        <h2 className="text-2xl font-bold mt-4">
          Journeying through Sports, Family, Gaming, and the Celestial Symphony
        </h2>
        <p className="text-lg">
          So, that&#39;s a little glimpse into my world! Whether it&#39;s the
          thrill of sports, the warmth of family bonds, the excitement of
          virtual realms, or the enchantment of the stars, I find inspiration
          and joy in these passions. Let&#39;s embark on this journey together
          and create something amazing!
        </p>
      </div>
    </div>
  );
};

export default About;

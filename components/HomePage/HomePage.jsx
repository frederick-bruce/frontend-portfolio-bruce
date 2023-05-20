// import Image from "next/image";
// import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";
// import "@/styles/globals.css";
// import ProfileImage from "@/public/profile.jpg";
// import TechStack from "@/components/TechStack/TechStack";

// const HomePage = () => {
//   return (
//     <section className="bg-background">
//       <div className="container mx-auto h-screen flex flex-col lg:flex-row justify-center items-center">
//         <div className="lg:w-full lg:text-center">
//           <h1 className="text-5xl font-bold mb-4">Front End React Developer</h1>
//           <h2 className="text-xl mb-8">
//             Hello, I`m Frederick Bruce. A Dynamic Front-end React Developer
//             based in Portland, Maine.
//           </h2>

//           <div className="container">
//             <div>
//               <SocialMediaLinks  />
//               <TechStack />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="lg:ml-auto">
//             <Image
//               className="object-cover object-center rounded-lg p-2"
//               alt="hero"
//               src={ProfileImage}
//               width={300}
//               height={300}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomePage;

"use client";
import Image from "next/image";
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";
import "@/styles/globals.css";
import ProfileImage from "@/public/profile.jpg";
import TechStack from "@/components/TechStack/TechStack";

const HomePage = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto h-screen flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-full lg:text-center">
          <h1 className="text-5xl font-bold mb-4">Front End React Developer</h1>
          <h2 className="text-xl mb-8">
            Hello, I&apos;m Frederick Bruce. A Dynamic Front-end React Developer
            based in Portland, Maine.
          </h2>{" "}
          <div className="container">
            <SocialMediaLinks />
            <TechStack />
          </div>
        </div>
        <div className="lg:ml-auto">
          <Image
            className="object-cover object-center rounded-lg p-2"
            alt="hero"
            src={ProfileImage}
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;

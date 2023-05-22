import { AiFillStar } from "react-icons/ai";

import TechStack from "@/components/TechStack/TechStack";

const HomePage = () => {
  return (
    <div className="w-full text-center">
      <div className="max-w-[1240px] w-full mx-auto h-[79vh] flex items-center">
        <div>
          <figcaption className="uppercase caption tracking-widest text-primary">
            Designing the future, one&nbsp;{" "}
            <span className="star-icon">
              <AiFillStar color="#51C4D3" size={32} />
            </span>{" "}
            &nbsp;at a time.
          </figcaption>
          <h1 className="py-4 text-primary text-7xl">
            Hi, I&#39;m <span className="text-secondary"> Frederick</span>
          </h1>
          <h1 className="py-2 text-primary text-5xl">
            {" "}
            A Dynamic Front-end React Developer based in <br /> Portland, Maine.
          </h1>

          <p className="py-4 text-primary sm:max-w-[70%] m-auto text-2xl">
            I’m focused on building responsive front-end web applications and
            integrating back-end technologies.
          </p>
          <div className="py-4">
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

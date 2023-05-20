import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";

const SocialMediaLinks = () => {
  const socialMediaLinks = [
    {
      platform: "LinkedIn",
      icon: RiLinkedinFill,
      link: "https://www.linkedin.com/",
    },
    {
      platform: "GitHub",
      icon: RiGithubFill,
      link: "https://github.com/",
    },
    {
      platform: "Email",
      icon: RiMailFill,
      link: "mailto:contact@frederickbruce.me"
    },
  ];

  return (
    <div className="flex mt-8 justify-evenly">
      {socialMediaLinks.map((item) => (
        <a
          key={item.platform}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hover:scale-125">
            {item.icon({ size: 32 })}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;

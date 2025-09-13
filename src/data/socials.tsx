import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub
} from 'react-icons/io5';
import CodeforcesIcon from '../assets/CordeforcesIcon';

export const SOCIALS = [
  {
    href: "https://github.com/JMLTUnderCode",
    icon: <IoLogoGithub />,
    title: "GitHub Profile"
  },
  {
    href: "https://codeforces.com/profile/JMLTUnderCode",
    icon: <CodeforcesIcon width={24} />,
    title: "Codeforces Profile"
  },
  {
    href: "https://www.linkedin.com/in/jmltundercode",
    icon: <IoLogoLinkedin />,
    title: "LinkedIn Profile"
  },
  {
    href: "https://www.facebook.com/juniormiguel.lara",
    icon: <IoLogoFacebook />,
    title: "Facebook Profile"
  },
  {
    href: "https://www.instagram.com/juniormlts",
    icon: <IoLogoInstagram />,
    title: "Instagram Profile"
  }
];
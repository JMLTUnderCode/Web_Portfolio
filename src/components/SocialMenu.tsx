import { SOCIALS } from '../data/socials';

export function SocialMenu() {
  return (
    <ul className="social-list">
      {SOCIALS.map((social) => (
        <li className="social-item" key={social.title}>
          <a
            href={social.href}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title={social.title}
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
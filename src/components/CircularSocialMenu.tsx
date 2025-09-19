import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import { SOCIALS } from '../data/socials';

export function SocialMenu() {
  return (
    <CircleMenu
      className="circle-menu"
      startAngle={-90}
      rotationAngle={360}
      itemSize={1.2}
      radius={4}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
    >
      {SOCIALS.map((social) => (
        <CircleMenuItem
          key={social.title}
          className="circle-menu-item"
          tooltip={social.title}
          tooltipPlacement={TooltipPlacement.Right}
        >
          <a
            href={social.href}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title={social.title}
          >
            {social.icon}
          </a>
        </CircleMenuItem>  
      ))}
    </CircleMenu>
  );
};
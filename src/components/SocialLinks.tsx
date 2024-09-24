import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlinePinterest,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IconType } from "react-icons";
import { cn } from "@/libs/utils";

const socialIcons: { [key: string]: IconType } = {
  Facebook: AiOutlineFacebook,
  Twitter: AiOutlineTwitter,
  Pinterest: AiOutlinePinterest,
  Instagram: AiOutlineInstagram,
};

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export default function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <>
      {links.map(({ label, href, icon }) => {
        const Icon = socialIcons[icon] || AiOutlineFacebook;
        return (
          <li key={label} className="underline-hover white-underline">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className={cn(className)} />
            </a>
          </li>
        );
      })}
    </>
  );
}

import { Facebook, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    color: "text-blue-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    color: "text-pink-500",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    color: "text-sky-500",
  },
];

const SocialFooterSection = () => {
  return (
    <div className="flex lg:hidden gap-2">
      {socials.map((item) => {
        const Icon =
          item.name === "Facebook"
            ? Facebook
            : item.name === "Instagram"
            ? Instagram
            : Twitter;

        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className=" flex  items-center justify-end rounded-r-lg border border-border bg-background/90 px-3 py-2 text-sm font-medium text-foreground shadow-md"
          >
            <div className="flex items-center gap-2">

              <Icon className={`h-4 w-4 ${item.color}`} />
 
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialFooterSection;

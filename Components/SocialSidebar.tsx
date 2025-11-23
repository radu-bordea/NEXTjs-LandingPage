"use client";

import { motion } from "framer-motion";
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

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-[65%] z-40 -translate-y-1/2 hidden lg:flex flex-col gap-2">
      {socials.map((item) => {
        const Icon =
          item.name === "Facebook"
            ? Facebook
            : item.name === "Instagram"
            ? Instagram
            : Twitter;

        return (
          <motion.a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            initial={{ x: 80 }}
            whileHover={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="flex w-[130px] items-center justify-start rounded-l-lg border border-border bg-background/90 px-3 py-2 text-sm font-medium text-foreground shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">&larr;</span>
              <Icon className={`h-4 w-4 ${item.color}`} />
              <span>{item.name}</span>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialSidebar;

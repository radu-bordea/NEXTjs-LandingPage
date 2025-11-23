"use client";

import { motion, type Variants } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiDotnet,
} from "react-icons/si";
import { PiFileCSharpBold } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { GiCrownedSkull } from "react-icons/gi";

const tech = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: ".NET Core", icon: <SiDotnet /> },
  { name: "ASP.NET & EF Core", icon: <PiFileCSharpBold /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Neon / PostgreSQL", icon: <SiPostgresql /> },
  { name: "Clerk", icon: <FaUserShield /> },
  { name: "Next-Auth", icon: <MdOutlineLogin /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Zustand", icon: <GiCrownedSkull /> },
  { name: "Vercel", icon: <SiVercel /> },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="flex min-h-screen items-center py-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-muted-foreground">
        <div className="space-y-4">
          {/* Title + line (same style as other sections) */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground pb-2">
              Technologies
            </h1>
            <hr className="border-border" />
          </div>

          {/* Intro text */}
          <p className="">
            We work with a modern and proven technology stack that lets us build
            fast, secure and scalable web applications — from frontend
            experiences to backend APIs and infrastructure.
          </p>

          {/* Tech grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-4"
          >
            {tech.map((t) => (
              <motion.div
                key={t.name}
                variants={item}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card/60 shadow-sm hover:shadow-md transition"
                role="figure"
                aria-label={t.name}
                title={t.name}
              >
                <div className="text-3xl text-foreground">
                  {t.icon}
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {t.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

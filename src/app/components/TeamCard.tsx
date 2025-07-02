'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  avatarUrl?: string;
  githubUrl?: string; 
}

export default function TeamCard({ name, role, description, avatarUrl, githubUrl }: TeamCardProps) {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      tabIndex={githubUrl ? 0 : -1}
      aria-label={githubUrl ? `View ${name}'s GitHub` : undefined}
    >
      <motion.div
        className="border-dashed border-4 border-violet-400 rounded-lg text-center p-6 hover:shadow-lg transition-shadow"
        initial={{ opacity: 0, rotateY: 90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
        )}
        <h4 className="text-lg font-semibold text-violet-400">{name}</h4>
        <p className="text-sm text-blue-200 italic">{role}</p>
        <p className="text-sm text-blue-100 mt-2">{description}</p>
      </motion.div>
    </a>
  );
}

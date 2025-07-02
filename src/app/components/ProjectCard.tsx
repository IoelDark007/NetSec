'use client';

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
}

export default function ProjectCard({ title, description, imageUrl, tags }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-violet-300 shadow-md rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        {tags && (
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-violet-600 text-white px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

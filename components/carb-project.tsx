"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type CarbProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: any;
  url: string;
};

export default function CarbProject({
  title,
  description,
  tags,
  imageUrl,
  url,
}: CarbProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-6 sm:mb-8 last:mb-0"
    >
      <section className="bg-white dark:bg-gray-800 max-w-[50rem] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative project-card">
        {/* Animated Glowing Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
        <div className="absolute inset-[1px] rounded-xl bg-white dark:bg-gray-800"></div>
        
        {/* Content Container */}
        <div className="relative z-10">
          <div className="p-4 sm:p-6 lg:p-8">
            {url === "#" ? (
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {title}
              </h3>
            ) : (
              <a href={url} target="_blank" className="block">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {title}
                </h3>
              </a>
            )}
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {tags.map((tag, index) => (
                <span
                  className="bg-gradient-to-r from-blue-500 to-green-500 px-2 py-1 text-xs sm:text-sm font-medium text-white rounded-full"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {url === "#" ? (
            <div className="relative h-48 sm:h-64 w-full overflow-hidden">
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ) : (
            <a href={url} target="_blank" className="block">
              <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt="Project I worked on"
                  quality={95}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          )}
        </div>
      </section>
    </motion.div>
  );
}

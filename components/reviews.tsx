"use client"
import React from "react";
import { reviews } from "@/lib/data";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";


export default function Reviews() {
    //const { ref } = useSectionInView("Reviews", 0.5); ref={ref}
  
    return (
      <section  id="reviews" className="relative bg-cover bg-center py-20 scroll-mt-28 mb-28">
        <div className="relative container mx-auto text-center">
          <div className="mb-12">
            <SectionHeading>Our clients love us</SectionHeading>
            <h3 className="text-xl text-white">Look at what they say about us</h3>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
                <blockquote className="mb-6 text-gray-700">
                  &quot;{review.text}&quot;
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src={review.image}
                    alt={review.name}
                    quality={90}
                    width={128} // 8 times the display size
                    height={128}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">{review.name}</h5>
                    <span className="text-sm text-gray-500">{review.job}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

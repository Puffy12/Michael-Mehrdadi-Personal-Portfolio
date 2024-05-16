import React, { useState } from "react";
import { reviews } from "@/lib/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

interface Person {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

const Review: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { name, job, image, text } = reviews[index] as Person;

  const checkNumber = (number: number): number => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => checkNumber(index + 1));
  };

  const prevPerson = () => {
    setIndex((index) => checkNumber(index - 1));
  };

  const minIndex = 0;
  const maxIndex = reviews.length - 1;

  const getRandomPerson = () => {
    const getRandomIntInclusive = (min: number, max: number): number => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let randomIndex = getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  return (
    <article className="bg-white p-6 rounded-lg shadow-lg text-center transition-all hover:shadow-2xl">
      <div className="relative w-36 h-36 rounded-full mx-auto mb-6">
        <Image src={image} alt={name} className="w-full h-full object-cover rounded-full" />
        <span className="absolute top-0 left-0 w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full transform translate-y-1/4">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="text-lg font-semibold mb-1">{name}</h4>
      <p className="text-sm text-blue-500 uppercase mb-2">{job}</p>
      <p className="text-gray-500 mb-4">{text}</p>
      <div className="flex justify-center space-x-4">
        <button className="text-blue-300 text-2xl hover:text-blue-500 transition-colors" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="text-blue-300 text-2xl hover:text-blue-500 transition-colors" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="mt-4 bg-blue-100 text-blue-500 py-1 px-3 rounded transition-colors hover:bg-blue-500 hover:text-white" onClick={getRandomPerson}>
        Get Random Review
      </button>
    </article>
  );
};

export default Review;
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion, Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaArrowCircleDown } from "react-icons/fa";

const arrowVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop", // Ensure this is a specific string literal, not just 'string'
    },
  },
};

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80" style={{ textAlign: "center" }}>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:michaelmehrdadi123@gmail.com">
          michaelmehrdadi123@gmail.com
        </a>{" "} <br></br>
        or through this form.
      </p>

      
      <motion.div
        variants={arrowVariants}
        animate="animate"
        style={{ cursor: "pointer", display: "flex", justifyContent: "center"}}
      >
        <div className="mt-6 flex justify-center mb-6 text-white w-14 h-14 text-3xl cursor-pointer z-10 ">
          <FaArrowCircleDown />
        </div>
      </motion.div>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

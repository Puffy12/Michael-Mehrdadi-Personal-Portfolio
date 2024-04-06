import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {

  return (
    
    <>
    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>

    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
    </>
  );
}
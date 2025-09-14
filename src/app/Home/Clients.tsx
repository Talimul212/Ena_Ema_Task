/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import ReviewCard from "../Components/Cards/ReviewCard";
import Carousal from "../Components/Carousal/Carousal";
import ReviewerIcon1 from "../assets/Review_Icon/Ellipse 1.png";
import ReviewerIcon2 from "../assets/Review_Icon/Ellipse 2.png";
import ReviewerIcon3 from "../assets/Review_Icon/Ellipse 3.png";
import ReviewerIcon4 from "../assets/Review_Icon/Ellipse 4.png";
export default function Clients(params: unknown) {
  const reviews = [
    {
      name: "Sarah Johnson",
      title: "SaaS Founder",
      quote:
        "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
      image: ReviewerIcon1,
    },
    {
      name: "Mike Chen",
      title: "Fitness Coach",
      quote:
        "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
      image: ReviewerIcon2,
    },
    {
      name: "Amanda Rodriguez",
      title: "E-Commerce Owner",
      quote:
        "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
      image: ReviewerIcon3,
    },
    // {
    //   name: "David Lee",
    //   title: "SaaS Founder",
    //   quote:
    //     "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    //   image: ReviewerIcon4,
    // },
  ];

  return (
    <div className="bg-[#192420] py-20">
      <div className="md:ms-20 ms-8">
        <div className="md:text-[50px] text-[36px] font-[manrope] leading-[4rem]  tracking-tighter text-white font-bold text-start">
          What Our Clients Are Saying
          <span className="text-[#1FFFA5]"> About Us</span>
        </div>
        <div className="font-sans mt-2 mb-12  font-extralight text-[#F5F5F5] text-lg text-start">
          Real feedback from real businesses who&rsquo;ve seen real results.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 sm:px-20">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}

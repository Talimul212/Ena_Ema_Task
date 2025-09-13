"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Carousel from "../Components/Carousel"; // your custom card
import Button from "../Components/Button";
import WePlanImage from "../assets/Carousel/MacBook Pro 16_ - 2.png";
import FlowpilotImage from "../assets/Carousel/MacBook Pro 16_ - 1.png";
import GrowthSummitImage from "../assets/Carousel/MacBook Pro 16_ - 3.png";
import Autoplay from "embla-carousel-autoplay";
import "../css/emble.css";
import { EmblaCarouselType } from "embla-carousel";
const options: EmblaOptionsType = {
  align: "center",
  loop: true,
  slidesToScroll: 1,
};

export default function CaseStudies() {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);
  const studies = [
    {
      image: WePlanImage,
      title: "We Plan, You Shine",
      metrics: [
        "37% uplift in conversion for the average 6-week test",
        "Clean and modern design with clear CTA",
      ],
    },
    {
      image: FlowpilotImage,
      title: "Flowpilot",
      metrics: [
        "31% uplift in conversion for the average 6-week test",
        "Clean and modern design with clear CTA",
      ],
    },
    {
      image: GrowthSummitImage,
      title: "GrowthSummit",
      metrics: [
        "37% uplift in conversion for the average 6-week test",
        "Clean and modern design with clear CTA",
      ],
    },
  ];

  return (
    <div className="bg-[#0A0F0D] mt-20">
      <div className="mb-10 text-center pt-20">
        <p className="text-[40px] font-[monrope] font-medium text-[#F5F5F5] leading-tight">
          Case Studies
        </p>
        <p className="text-[12px] text-[#F5F5F5] mt-3 font-[200]">
          See the designs that delivered results
        </p>
      </div>

      {/* Embla Carousel */}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {studies.map((study, index) => (
              <div className="embla__slide px-4" key={index}>
                <Carousel
                  image={study.image}
                  title={study.title}
                  metrics={study.metrics}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 pb-24">
        <Button
          color={""}
          title={"I want similar results"}
          width={"w-full px-5"}
        />
      </div>
    </div>
  );
}

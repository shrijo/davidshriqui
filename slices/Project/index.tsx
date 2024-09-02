"use client";

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowLeftCircle, ArrowRightCircle } from "@geist-ui/icons";

import "./styles.css";

const Project = ({ slice }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section>
      <h2 className="narrow project-title">{slice.primary.project_title}</h2>

      {slice.primary.project_slide.length > 1 ? (
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slice.primary.project_slide.map((item: any, index: any) => (
              <div key={index} className="embla__slide">
                {item.project_slide_image?.url ? (
                  <PrismicNextImage
                    className="embla__slide__image"
                    field={item.project_slide_image}
                  />
                ) : item.project_slide_video?.html ? (
                  <div
                    className="embla__slide__video"
                    dangerouslySetInnerHTML={{
                      __html: item.project_slide_video.html,
                    }}
                  />
                ) : (
                  <p>No media available</p>
                )}
                {item.project_slide_text && (
                  <PrismicRichText field={item.project_slide_text} />
                )}
              </div>
            ))}
          </div>
          <button className="embla__prev" onClick={scrollPrev}>
            <ArrowLeftCircle size={36} />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <ArrowRightCircle size={36} />
          </button>
        </div>
      ) : (
        slice.primary.project_slide.map((item: any, index: any) => (
          <div key={index}>
            {item.project_slide_image?.url ? (
              <PrismicNextImage
                className="single-slide__image"
                field={item.project_slide_image}
              />
            ) : item.project_slide_video?.html ? (
              <div
                className="single-slide__video"
                dangerouslySetInnerHTML={{
                  __html: item.project_slide_video.html,
                }}
              />
            ) : (
              <p className="narrow">No media available</p>
            )}
            {item.project_slide_text && (
              <div className="narrow">
                <PrismicRichText field={item.project_slide_text} />
              </div>
            )}
          </div>
        ))
      )}
      <div className="narrow project-text">
        <PrismicRichText field={slice.primary.project_text} />
      </div>
    </section>
  );
};

export default Project;

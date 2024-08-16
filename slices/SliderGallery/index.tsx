"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import "./styles.css";
import { Content } from "";

/**
 * Props for `SliderGallery`.
 */

export type SliderGalleryProps =
  SliceComponentProps<Content.SliderGallerySlice>;

/**
 * Component for "SliderGallery" Slices.
 */
const SliderGallery = ({ slice }: SliderGalleryProps): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slice.primary.slide.map((item: any, index: any) => (
            <div key={index} className="embla__slide">
              {item.slide_image?.url ? (
                <img
                  src={item.slide_image.url}
                  alt={item.slide_image.alt || "Slide image"}
                  className="embla__slide__image"
                />
              ) : item.slide_video?.html ? (
                <div
                  className="embla__slide__video"
                  dangerouslySetInnerHTML={{
                    __html: item.slide_video.html,
                  }}
                />
              ) : (
                <p>No media available</p>
              )}
              {item.slide_title && <PrismicRichText field={item.slide_title} />}
            </div>
          ))}
        </div>
        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </section>
  );
};

export default SliderGallery;

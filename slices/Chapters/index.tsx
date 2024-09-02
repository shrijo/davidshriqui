"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Chapters`.
 */
export type ChaptersProps = SliceComponentProps<Content.ChaptersSlice>;

/**
 * Component for "Chapters" Slices.
 */
const Chapters = ({ slice }: ChaptersProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>
        {slice.primary.chapter_content.map((item: any, index: any) => {
          <div key={index}>
            <h3>{item.chapter_title}</h3>
            <PrismicRichText field={item.chapter_text} />
          </div>;
        })}
      </>
    </section>
  );
};

export default Chapters;

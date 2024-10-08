import React, { useRef, useEffect } from "react";
import { TwoColumnTextBlock } from "@/layouts/types";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TwoColumnTextBlock({
  props,
}: {
  props: TwoColumnTextBlock;
}) {
  return (
    <div className="bg-offwhite">
      <div className="page-container grid divide-y divide-lighterGrey px-4">
        {props.twoColumnText.map((item) => (
          <TextBlock key={item.id} heading={item.heading} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export function TextBlock({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 0.8],
    [0.2, 1, 1, 0.2],
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="grid grid-cols-12 py-2 md:py-5"
    >
      <p className="col-span-12 py-2 text-xl md:col-span-6 md:py-4">
        {heading}
      </p>
      <p className="col-span-12 pb-4 text-xl md:col-span-6 md:py-4">{text}</p>
    </motion.div>
  );
}

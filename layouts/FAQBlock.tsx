import React, { useState } from "react";
import { FAQBlock } from "@/layouts/types";
import { X } from "lucide-react";

export default function FAQBlock({ props }: { props: FAQBlock }) {
  return (
    <div className="bg-offwhite">
      <div className="page-container grid">
        {props?.faq?.map((item) => (
          <FAQ
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

export function FAQ({
  question,
  answer,
}: {
  id: string;
  question: string;
  answer: string;
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border-b border-lightGrey last:border-b-0">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full justify-between py-5 md:py-8"
      >
        <span className="text-left text-lg md:text-xl">{question}</span>
        <X
          className={`stroke-primary stroke-1 transition-all duration-300 hover:cursor-pointer ${accordionOpen ? "rotate-0" : "rotate-45"}`}
          size={30}
        />
      </button>
      <div
        className={`grid overflow-hidden text-lg transition-all duration-300 ease-in-out ${accordionOpen ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="w-full overflow-hidden text-base text-grey md:w-3/4 md:text-xl">
          {answer}
        </div>
      </div>
    </div>
  );
}

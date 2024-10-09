import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBlock() {
  return (
    <section className="bg-offwhite">
      <div className="hero-container grid grid-cols-12 pt-5 md:pt-10 xl:pt-20">
        <Image
          className="col-span-10 pb-6 pr-10 md:col-span-6 md:w-full xl:col-span-7 xl:pr-20"
          src={"https://laurenzguevara.s3.eu-west-2.amazonaws.com/assets/LAURENZ.png"}
          width={907}
          height={182}
          alt="Alt"
          priority={true}
        />
        <div className="col-span-6 hidden w-full md:block xl:col-span-5">
          <div className="flex justify-between text-lg">
            {/* TODO: Add correct links */}
            <Link
              href="#"
            >
              experience
            </Link>
            <Link
              href="https://github.com/Laurenz-Guevara"
            >github</Link>

            <Link
              href="https://www.linkedin.com/in/laurenzguevara"
            >
              linkedin

            </Link>
            <Link
              href="mailto:laurenz.guevara@gmail.com"
            >
              contact
            </Link>
          </div>
        </div>
        <div className="col-span-7 hidden md:col-span-6 md:block md:pb-10 xl:col-span-5 xl:col-start-3 xl:pb-20 xl:pr-20 xl:pt-2">
          <h1 className="col-span-10 text-right text-xl xl:text-2xl">
            <p>Front-end Developer with Startup, Agency, and in-house experience across multiple tech stacks in all types of industries.</p>
          </h1>
        </div>
        <Image
          className="col-span-10 col-start-3 ml-auto pl-10 md:col-span-6 md:col-start-7 md:row-start-3 md:mt-auto md:w-full md:pb-10 xl:col-span-7 xl:col-start-6 xl:pl-20"
          src={"https://laurenzguevara.s3.eu-west-2.amazonaws.com/assets/GUEVARA.png"}
          alt="Test"
          width={878}
          height={183}
          priority={true}
        />
        <div className="col-span-12 py-6 md:hidden">
          <div className="grid grid-cols-12">
            <h1 className="col-span-10">
              Front-end Developer with Startup, Agency, and in-house experience across multiple tech stacks in all types of industries.
            </h1>
          </div>
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden md:row-start-3">
          <div className="h-full md:overflow-hidden">
            <p className="mr-auto whitespace-nowrap pb-2 text-lightGrey [writing-mode:vertical-lr] md:pb-4 md:text-xl">
              See More
            </p>
            <div className="ml-2.5 mr-auto h-full w-0.5 bg-lightGrey"></div>
          </div>
        </div>
        <div className="col-span-11 col-start-2 row-start-5 mt-20 space-y-4 pb-10 md:col-span-4 md:row-start-3 md:space-y-10">
          <div
            className="flex flex-col text-right md:text-left"
          >
            <div className="md:text-xl">
              <h2 className="text-lightGrey md:pb-2">SKILLSET</h2>
              <p className="text font-medium">Front-end Developer</p>
            </div>
          </div>
          <div
            className="flex flex-col text-right md:text-left"
          >
            <div className="md:text-xl">
              <h2 className="text-lightGrey md:pb-2">LOCATION</h2>
              <p className="text font-medium">United Kingdom</p>
            </div>
          </div>
          <div
            className="flex flex-col text-right md:text-left"
          >
            <div className="md:text-xl">
              <h2 className="text-lightGrey md:pb-2">CONTACT</h2>
              <Link
                className="text font-medium"
                href="mailto:laurenz.guevara@gmail.com"
              >
                laurenz.guevara@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

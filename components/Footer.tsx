"use client";

import React from "react";
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-secondary">
      <div className="page-container pb-20 pt-5 md:flex md:py-14 md:pb-32 lg:grid lg:grid-cols-12">
        <div className="md:pr-8 lg:col-span-7 xl:col-span-8">
          <div
            className="pb-5 text-right text-xl text-offwhite md:text-left lg:text-2xl xl:text-3xl [&>a]:text-offwhite [&>a]:underline"
          >
            <p>
              Oh you're still here?
            </p>
            <p>Why not get in touch and find your fit</p>
            <Link href="mailto:laurenz.guevara@gmail.com" >laurenz.guevara@gmail.com</Link>
          </div>
        </div>
        <div className="md:flex lg:col-span-5 xl:col-span-4">
          <div className="flex flex-wrap md:w-1/2">
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <Link
                href="#Experience"
                className="text font-medium"
              >
                Experience
              </Link>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <Link
                className="text font-medium"
                href="https://github.com/Laurenz-Guevara"
                target="_blank"
              >Github</Link>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <Link
                className="text font-medium"
                href="https://www.linkedin.com/in/laurenzguevara"
                target="_blank"
              >
                Linkedin

              </Link>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <Link
                className="text font-medium"
                href="mailto:laurenz.guevara@gmail.com"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap md:w-1/2">
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <p
                className="text font-medium text-offwhite"
              >
                Projects
              </p>

            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <Link
                className="text font-medium"
                href="https://github.com/Laurenz-Guevara/ventus-verba"
                target="_blank"
              >
                Ventus Verba
              </Link>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <Link
                className="text font-medium"
                href="https://github.com/Laurenz-Guevara/cliff-crafts"
                target="_blank"
              >
                Cliff Crafts
              </Link>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <Link
                className="text font-medium"
                href="https://github.com/Laurenz-Guevara/repetise-dev"
                target="_blank"
              >
                Repetise
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container hidden bg-secondary py-5 md:block">
        <div className="flex justify-between">
          <p className="text-2xl text-offwhite">Laurenz Guevara</p>
          <p className="text-offwhite">Status: Looking For Work</p>
        </div>
      </div>
    </div>
  );
}

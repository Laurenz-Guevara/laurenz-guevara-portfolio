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
              <a href="#" className="text font-medium">
                experience
              </a>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <a href="#" className="text font-medium">github</a>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <a href="#" className="text font-medium">linkedin</a>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <a href="#" className="text font-medium">contact</a>
            </div>
          </div>
          <div className="flex flex-wrap md:w-1/2">
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <a href="#" className="text font-medium">
                text
              </a>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <a href="#" className="text font-medium">text</a>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <a href="#" className="text font-medium">text</a>
            </div>
            <div
              className="my-1 w-full text-right md:text-left [&>a]:text-offwhite"
            >
              <a href="#" className="text font-medium">text</a>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container hidden bg-secondary py-5 md:block">
        <div className="flex justify-between">
          <p className="text-2xl text-offwhite">Laurenz Guevara</p>
          {/* <p className="text-offwhite">Laurenz Guevara</p> */}
        </div>
      </div>
    </div>
  );
}

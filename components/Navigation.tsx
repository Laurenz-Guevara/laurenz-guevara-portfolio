"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    if (
      window.scrollY >=
      document.documentElement.scrollHeight - window.innerHeight
    ) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="md:hidden">
      {toggleMenu === false ? (
        <div
          className={`page-container fixed bottom-0 z-50 flex w-full justify-between bg-secondary py-4 text-offwhite ${isBottom ? "border-t border-offwhite md:border-t-0" : ""}`}
        >
          <Link
            href="#"
            className="text-xl text-offwhite"
          >
            laurenz guevara
          </Link>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-xl text-offwhite"
          >
            menu
          </button>
        </div>
      ) : (
        <div className="fixed top-0 z-50 flex h-screen w-full items-end justify-between space-y-2 bg-secondary px-4 py-4">
          <div className="space-y-2">
            {toggleMenu && (
              <>
                <div className="text-3xl">
                  <Link
                    className="text-offwhite"
                    href="#"
                  >experience</Link>
                </div>
                <div className="text-3xl">
                  <Link
                    className="text-offwhite"
                    href="https://github.com/Laurenz-Guevara"
                  >github</Link>
                </div>
                <div className="text-3xl">
                  <Link
                    className="text-offwhite"
                    href="https://www.linkedin.com/in/laurenzguevara"
                  >linkedin</Link>
                </div><div className="text-3xl">
                  <Link
                    className="text-offwhite"
                    href="mailto:laurenz.guevara@gmail.com"
                  >contact</Link>
                </div>

              </>
            )}
          </div>
          <div>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="flex-start flex"
            >
              <X className="stroke-offwhite" size={48} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

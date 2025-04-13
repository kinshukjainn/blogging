"use client";

import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Amazon Web Services",
        "DevOps",
        "Scalable Infrastructure",
        "Random Stuff of my Choice",
        "IoT (Internet Of Things)",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <main>
      <section className="container px-4 py-12 mx-auto lg:h-[36rem] lg:flex lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold leading-snug text-gray-800 dark:text-gray-200 md:text-5xl">
            Hey Everyone!{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Welcome to my Blog
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            This is a space for developers and programmers to explore topics like{" "}
            <span
              ref={el}
              className="font-bold tracking-wide bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent"
            />
            .
            <br />
            All blogs are free to access and read. I have shared my early
            experiences with cloud and software development—hopefully, they help
            you kick start your own journey!
          </p>

          <div className="mt-6">
            <Link href="/blog">
              <Button className="px-6 py-2 text-base font-semibold rounded-xl transition-transform hover:scale-105">
                Explore Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

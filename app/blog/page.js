import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      
      {/* Main heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-3 text-center bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-text-glow">
        Here are my Blogs
      </h2>

      {/* Tagline */}
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Dive into tech, cloud, programming, and some quirky experiments I’ve documented from my journey 🌐✨
      </p>
      
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
          >
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {blog.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                {blog.description}
              </p>

              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>By <span className="font-medium">{blog.author}</span></span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <Link
                href={`/blogpost/${blog.slug}`}
                className={`${buttonVariants({ variant: "outline" })} mt-2 inline-block`}
              >
                Read Blog →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

'use client';

import React from 'react';
import { FaCloud, FaAws } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-indigo-900 via-purple-800 to-black dark:from-black dark:via-gray-900 dark:to-black">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-900 shadow-xl rounded-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-purple-600 mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center transition duration-300 hover:scale-105">
              Hello! I am Kinshuk Jain, a passionate developer with a love for cloud computing and DevOps. Explore my world!
            </p>

            {/* Cloud & AWS Section */}
            <div className="flex space-x-6 mb-8">
              <div className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-transform duration-300 transform hover:scale-110 text-center">
                <FaCloud size={30} className="mx-auto" />
                <p className="mt-2 text-sm">Cloud Computing</p>
              </div>
              <div className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110 text-center">
                <FaAws size={30} className="mx-auto" />
                <p className="mt-2 text-sm">AWS Expert</p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="mt-6 space-y-4 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong className="text-black dark:text-white">Name:</strong> Kinshuk Jain
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong className="text-black dark:text-white">Website:</strong>{' '}
                <a
                  href="https://cloudkinshuk.in"
                  className="text-blue-500 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cloudkinshuk
                </a>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong className="text-black dark:text-white">GitHub:</strong>{' '}
                <a
                  href="https://github.com/kinshuk-j"
                  className="text-blue-500 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong className="text-black dark:text-white">LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/kinshuk-jain"
                  className="text-blue-500 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

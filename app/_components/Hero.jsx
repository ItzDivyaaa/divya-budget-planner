"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard'); // Navigates to the dashboard page
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage Your Expense. 
            <strong className="font-extrabold text-primary sm:block"> Control Your Money </strong>
          </h1>
    
          <p className="mt-4 sm:text-xl/relaxed">
            Start creating your budget and save a ton of your money.
          </p>
    
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
    
            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-500 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
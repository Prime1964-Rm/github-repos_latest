import React from "react";
import Image from "next/image";
import localFont from "next/font/local";


export default function Home() {
  return (
    <div
      className={`min-h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)]`}
    >
       <div className="border-rotate p-8">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative z-10">
            <h1 className="text-3xl font-bold">Welcome to Git Repos</h1>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2">
              Explore our popular GitHub repositories.{" "}
              </li>
              <li> View Various details such as title,description,languages and forks of repos. </li>
            </ol>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                data-testid="explore"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/repos"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Explore
              </a>
            </div>
          </main>
        </div>
    </div>
  );
}

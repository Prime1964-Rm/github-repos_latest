import Image from "next/image";
import localFont from "next/font/local";
import React from "react";
import useFetch from "@/hooks/useFetch";
import RepoCard from "@/components/RepoCard";
export default function Repos() {
  const { data, loading, error } = useFetch(
    "https://api.github.com/orgs/godaddy/repos"
  );
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="w-full absolute flex items-center justify-start shadow-sm shadow-white top-0">
        {" "}
        <Image
          className="dark:invert"
          src="/github-mark.png"
          alt="Next.js logo"
          width={100}
          height={38}
          priority
        />
        <span data-testid="repos">Rishabh Mishra</span>
      </header>

      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start w-full">
        <code className="my-4 text-center text-xs sm:text-sm">
          Note: Click "View more" to check repo
        </code>
        <div className="repo-list grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
          {data.map((repo: any) => (
            <RepoCard key={repo?.id} {...repo} />
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        All Rights Reserved
      </footer>
    </div>
  );
}

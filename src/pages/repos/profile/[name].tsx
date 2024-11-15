import LanguageBadge from "@/components/LanguageBadge";
import {
  RepoDetailsContext,
  useRepoDetailsContext,
} from "@/contexts/githubUserContext";
import React from "react";

const Profile = ({ repo1 }: any) => {
  const { selectedData: repo }: any = useRepoDetailsContext(RepoDetailsContext);
  return (
    <div className="min-h-screen min-w-screen bg-black flex items-center justify-center">
      <div className="border-rotate">
        <div className=" rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-2">
            <a
              href={repo?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {repo?.name}
            </a>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {repo.description || "No description available."}
          </p>

          <div className="text-sm mb-4">
            <LanguageBadge language={repo?.language} />
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-semibold">Forks:</span> {repo.forks_count}
            </div>
            <div>
              <span className="font-semibold">Open Issues:</span>{" "}
              {repo.open_issues_count}
            </div>
            <div>
              <span className="font-semibold">Watchers:</span>{" "}
              {repo.watchers_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

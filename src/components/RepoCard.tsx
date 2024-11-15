import React from "react";
import Link from "next/link";
import Badge from "./Badge";
import LanguageBadge from "./LanguageBadge";
import { truncateDescription } from "@/utils";
import {
  RepoDetailsContext,
  useRepoDetailsContext,
} from "@/contexts/githubUserContext";

export default function RepoCard(props: any) {
  const { name, private: isPrivate, language }: any = props;
  const { selectedData, setSelectedData }: any = useRepoDetailsContext(
    RepoDetailsContext
  );

  return (
    <div className="border-2 p-4 rounded-xl border-[#3d444d] cursor-pointer text-white">
      <span className="title flex items-center gap-x-3 text-[#4493f8]">
        {name} <Badge>{isPrivate ? "Private" : "Public"}</Badge>
      </span>
      <span className="description">
        {props?.description && truncateDescription(props?.description, 20)}
        {props?.description && (
          <Link
            href={`/repos/profile/${name}`}
            onClick={() => setSelectedData(props)}
            className="text-[#4493f8] mt-2 ml-2 inline"
          >
            View More
          </Link>
        )}
      </span>
      <LanguageBadge language={language} />
    </div>
  );
}

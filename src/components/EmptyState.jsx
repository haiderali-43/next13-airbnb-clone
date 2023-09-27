"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "./Heading";
import Button from "./Button";

const EmptyState = ({
  title = "No Exact matches",
  subtitle = "Try Changing and reomving some of your filters",
  showRest,
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 items-center justify-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showRest && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;

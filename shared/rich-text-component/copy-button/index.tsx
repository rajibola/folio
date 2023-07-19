"use client";

import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";

export const CopyButton = ({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) => {
  const [copy, setCopy] = useState(false);
  return (
    <>
      {copy ? (
        <button className="py-1 inline-flex items-center gap-1">
          <ClipboardDocumentCheckIcon className=" h-4 w-auto" />
          <p className="text-xs">Copied!</p>
        </button>
      ) : (
        <button
          className="py-1 inline-flex items-center gap-1"
          onClick={() => {
            navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 2000);
          }}
        >
          <ClipboardDocumentIcon className="h-4 w-auto" />
          <p className="text-xs">Copy</p>
        </button>
      )}
    </>
  );
};

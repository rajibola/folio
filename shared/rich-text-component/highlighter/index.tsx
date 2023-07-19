"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  nightOwl,
  tomorrowNightBlue,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Highlighter = ({
  children,
  language,
  isInline,
}: {
  children: any;
  language: string;
  isInline: boolean;
}) => {
  if (isInline) return <code className="md-post-code">{children}</code>;
  return (
    <SyntaxHighlighter
      wrapLongLines={true}
      language={language}
      style={tomorrowNightBlue}
      PreTag="div"
      customStyle={{
        padding: "25px",
      }}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

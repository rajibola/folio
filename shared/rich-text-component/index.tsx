import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Highlighter } from "./highlighter";
import { PortableText } from "@portabletext/react";
import { CopyButton } from "./copy-button";

type PortableTextProps = React.ComponentProps<typeof PortableText>;
type RichTextComponentsType = PortableTextProps["components"];

export const RichTextComponents: RichTextComponentsType = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlForImage(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
    code: ({ value, isInline, index }) => {
      if (!value) return null;
      return (
        <div className="min-w-[25rem] bg-slate-300  overflow-hidden text-base">
          <div className="flex justify-between px-4 h-11 text-slate-900 items-center font-semibold">
            <p className="font-overpassMono">
              {value.filename || value.language}
            </p>
            <CopyButton index={index}>{value.code}</CopyButton>
          </div>
          <Highlighter language={value.language} isInline={isInline}>
            {value.code}
          </Highlighter>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl my-0 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl my-0 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl my-0 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl my-0 font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#8F00FF] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoreration-[#8F00FF] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

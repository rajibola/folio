import { RichTextComponents } from "@/shared/rich-text-component";
import { PortableText } from "@portabletext/react";
import { Roboto, Dosis } from "next/font/google";

const roboto = Roboto({ weight: ["100", "300", "500"], subsets: ["cyrillic"] });
const dosis = Dosis({ weight: ["400"], subsets: ["latin"] });

export const Article = async ({ body }: { body: Block[] }) => {
  return (
    <div
      style={dosis.style}
      className="w-full max-w-[55ch] mx-auto leading-relaxed text-black font-source self-center text-fs-1"
    >
      <PortableText value={body} components={RichTextComponents} />
    </div>
  );
};

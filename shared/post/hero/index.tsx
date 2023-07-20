import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { groq } from "next-sanity";
import Image from "next/image";

export const Hero = async ({
  title,
  date,
  thumbnail,
  author,
  categories,
}: {
  title: string;
  date: string;
  thumbnail: Image;
  author: string;
  categories: Category[];
}) => {
  return (
    <div className="bg-white mx-auto mb-10">
      <div className="relative">
        <div className="absolute w-full h-full bg-gradient-to-t from-slate-900" />
        <div className="bg-black/30 absolute w-full h-full flex items-end pb-10 font-graphik">
          <div className="w-[calc(100%-3rem)] max-w-[70ch] mx-auto">
            <div className="flex gap-2">
              {categories.map((item, i) => (
                <div
                  key={i}
                  className="px-2 py-[4px] bg-white/20 backdrop-blur-md rounded-lg text-white uppercase text-[10px] font-semibold tracking-wide"
                >
                  {item.title}
                </div>
              ))}
            </div>
            <h1 className="text-white text-6xl font-bold leading-tight mb-5">
              {title}
            </h1>
            <div className="flex gap-3 items-center">
              <p className="text-white text-20">by {author}</p>
              <div className="w-[1px] h-4 bg-white" />
              <p className="text-white text-base">
                <CalendarIcon className="h-4 w-auto inline-block mr-2 mb-[1px] text-white" />
                {new Date(date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <div className="w-[1px] h-4 bg-white" />
              <p className="text-white text-base">
                <ClockIcon className="h-4 w-auto inline-block mr-2 mb-[1px] text-white" />
                <span>3 min read</span>
              </p>
            </div>
          </div>
        </div>

        <Image
          width={800}
          height={800}
          alt=""
          src={urlForImage(thumbnail as any).url()}
          className="w-[100%] h-[75vh] bg-cover object-cover"
        />
      </div>
    </div>
  );
};

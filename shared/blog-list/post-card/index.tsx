import { urlForImage } from "@/sanity/lib/image";
import { ClientSideRoute } from "@/shared/client-side-route";
import Image from "next/image";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";

interface Props {
  author: Author;
  imageUrl: Image;
  title: string;
  link: string;
}

export const PostCard = ({ author, imageUrl, title, link }: Props) => {
  return (
    <ClientSideRoute route={`/blog/${link}`}>
      <div>
        <div className="w-[413px] h-[262px] overflow-hidden object-cover">
          <Image
            className="w-full filter brightness-75 hover:brightness-100 transition duration-300"
            src={urlForImage(imageUrl as any).url()}
            alt={title}
            width={413}
            height={262}
          />
        </div>

        <div className="font-light mt-8 mb-4 text-lg uppercase w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={urlForImage(author.image as any).url()}
            alt={author.name}
            width={18}
            height={18}
          />
          <h6 className=" font-light text-slate-100">{author.name}</h6>
          <div className=" w-[1px] h-3 bg-slate-500" />
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-slate-50" />
            <h6 className=" font-light text-slate-100">02 december 2022</h6>
          </div>
          <div className=" w-[1px] h-3 bg-slate-500" />
        </div>
      </div>
    </ClientSideRoute>
  );
};

import { urlForImage } from "@/sanity/lib/image";
import { ClientSideRoute } from "@/shared/client-side-route";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { Hind, Oswald, Montserrat } from "next/font/google";
import Image from "next/image";
const oswald = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["latin"],
});
const dosis = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["latin"],
});

interface Props {
  author: Author;
  imageUrl: Image;
  title: string;
  link: string;
  categories: Category[];
}

export const PostCardCopy = ({
  author,
  imageUrl,
  title,
  link,
  categories,
}: Props) => {
  return (
    <ClientSideRoute route={`/blog/${link}`}>
      <div
        style={oswald.style}
        className="rounded-2xl overflow-hidden bg-white/5 relative group h-[400px] w-[400px]"
      >
        <div className="w-full absolute h-full bg-black">
          <div className="w-full h-[130%] relative transition-all duration-500 transform group-hover:h-full">
            <Image
              className="w-full h-full object-cover"
              src={urlForImage(imageUrl as any).url()}
              alt={title}
              width={413}
              height={262}
            />
          </div>
        </div>

        <div className="absolute w-full h-full bg-black/80 p-7 flex flex-col justify-between transition-all duration-500 transform group-hover:bg-black/60">
          <div style={dosis.style} className="flex justify-between">
            <div className="flex gap-2">
              {categories.map((item, i) => (
                <div
                  key={i}
                  className="px-2 py-[4px] bg-white/20 backdrop-blur-md rounded-lg text-white uppercase text-[10px] font-bold tracking-wide"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="mb-2 text-2xl font-bold">{title}</h1>
            <div className="flex gap-4 mt-5 items-center">
              <Image
                className="rounded-full w-12 h-12"
                src={urlForImage(author.image as any).url()}
                alt={author.name}
                width={30}
                height={30}
              />
              <div>
                <p className="font-semibold opacity-80 text-sm mb-1">
                  {author.name}
                </p>
                <h6 className="font-light text-white/70 text-xs">
                  02 december 2022
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientSideRoute>
  );
};

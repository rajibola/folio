import { urlForImage } from "@/sanity/lib/image";
import { ClientSideRoute } from "@/shared/client-side-route";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";
import { Roboto, Dosis } from "next/font/google";

const roboto = Roboto({ weight: ["100", "300", "500"], subsets: ["cyrillic"] });
const dosis = Dosis({ weight: ["400"], subsets: ["latin"] });

interface Props {
  author: Author;
  imageUrl: Image;
  title: string;
  link: string;
  categories: Category[];
}

export const PostCard = ({
  author,
  imageUrl,
  title,
  link,
  categories,
}: Props) => {
  return (
    <ClientSideRoute route={`/blog/${link}`}>
      <div
        style={roboto.style}
        className="rounded-2xl overflow-hidden bg-white/5 relative group h-[520px] w-[400px]"
      >
        <div className="w-full h-[350px] relative transition-all duration-300 transform group-hover:h-[400px] z-10">
          <div className="absolute w-14 h-14 grid place-items-center right-7 -bottom-[28px] rounded-full transition-all duration-300 transform scale-100 group-hover:scale-75">
            <Image
              className="rounded-full w-12 h-12"
              src={urlForImage(author.image as any).url()}
              alt={author.name}
              width={30}
              height={30}
            />
          </div>
          <Image
            className="w-full h-full object-cover"
            src={urlForImage(imageUrl as any).url()}
            alt={title}
            width={413}
            height={262}
          />

          <div className="top-7 left-7 absolute flex gap-2">
            {categories.map((item, i) => (
              <div
                key={i}
                className="px-2 py-[4px] bg-white/20 backdrop-blur-md rounded-lg text-white uppercase text-[10px] font-semibold tracking-wide"
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="flex items-center absolute bottom-7 left-7">
            <div className="w-9 h-[1px] bg-slate-500/40 mx-2 mt-1" />
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-slate-50" />
              <h6 className=" font-light text-slate-100 text-sm">
                02 december 2022
              </h6>
            </div>
          </div>
        </div>

        <div className="w-[90%] my-8 px-8 absolute bottom-0">
          <div
            style={dosis.style}
            className="font-lg mb-4 text-lg leading-[1.6] text-white/40 transition-all duration-300 transform group-hover:opacity-0"
          >
            {author.name}
          </div>
          <div className="font-lg mb-4 text-lg uppercase leading-[1.6]">
            A component library for building Animere
          </div>

          {/* <p className="font-light text-[12px] mt-3">
            Progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas.
          </p> */}
        </div>
      </div>
    </ClientSideRoute>
  );
};

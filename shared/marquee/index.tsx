import { PROJECTS_IMAGES } from "@/utils/PROJECTS";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeImages = ({
  direction,
}: {
  direction?: "left" | "right" | "up" | "down";
}) => {
  return (
    <Marquee className="" autoFill direction={direction}>
      {PROJECTS_IMAGES.map((item) => (
        <div className="w-[220px] margin-x-4" key={item.alt}>
          <Image
            src={item.image}
            alt={item.alt}
            className="w-full h-32 object-cover"
            width={800}
            height={128}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeImages;

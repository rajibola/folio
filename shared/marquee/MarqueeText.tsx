import Marquee from "react-fast-marquee";

const MarqueeText = ({
  direction,
  data,
}: {
  direction?: "left" | "right" | "up" | "down";
  data: string[];
}) => {
  return (
    <Marquee
      className="border-y-4 flex items-center darkGradient py-4"
      autoFill
      direction={direction}
    >
      {data.map((item) => (
        <div className="mx-4" key={item}>
          <div
            key={item}
            className="w-full object-cover text-4xl flex justify-center uppercase"
          >
            {item}
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeText;

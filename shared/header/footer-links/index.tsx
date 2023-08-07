import { Magnetic } from "@/shared/magnetic";

export const FooterLinks = () => {
  return (
    <div className="flex w-full justify-between text-[12px] gap-10">
      <Magnetic>
        <a href="https://github.com/rajibola" className="cursor-pointer">
          Github
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://linkedin.com/in/ridwan-ajibola-a10616191"
          className="cursor-pointer"
        >
          LinkedIn
        </a>
      </Magnetic>
      <Magnetic>
        <a href="mailto:rajibola1997@gmail.com" className="cursor-pointer">
          Email
        </a>
      </Magnetic>
    </div>
  );
};

import { ScrollArea } from "@/components/ui/scroll-area";
import ThemeCard from "./ThemeCard";
import { useEffect } from "react";
import { Heading, Link } from "@/Typography";

interface Props {
  className?: string;
}

const ThemeDisplay = ({ className }: Props) => {
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const ratio = window.scrollY / (window.outerWidth * 1.5);

          // Themes Top
          let target1 = document.getElementById("themes-top")!;
          target1 = target1.children[1] as HTMLElement;
          const maxScrollLeft1 = target1.scrollWidth - target1.clientWidth;
          target1.scrollLeft = ratio * maxScrollLeft1;

          // Themes Bottom
          let target2 = document.getElementById("themes-bottom")!;
          target2 = target2.children[1] as HTMLElement;
          const maxScrollLeft2 = target2.scrollWidth - target2.clientWidth;
          target2.scrollLeft = (1 - ratio) * maxScrollLeft2;
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100)
    });
    observer.observe(document.getElementById("theme-display")!);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="theme-display" className={className}>
      <Heading className="w-3/4 text-center">
        Discover that
        <br />
        <div className="inline bg-clip-text text-transparent bg-gradient-to-r from-primary from-10% to-accent to-80%">
          Magic{" "}
        </div>{" "}
        blend.
      </Heading>
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
        }}
        className="flex flex-col w-full 3xl:gap-20 2xl:gap-8 xl:gap-4"
      >
        <ScrollArea
          id="themes-top"
          style={{ opacity: "0" }}
          className="relative z-20 rounded-md h-28 whitespace-nowrap animate"
        >
          <div className="z-20 flex p-4 space-x-8 w-max">
            <ThemeCard theme={"08081C-BFBAB5-3A999C-3457CB-CD7860"} name="Icicle" />
            <ThemeCard
              theme={"09041B-CECBD7-E24B85-2C65D8-52983E"}
              name="Starburst"
            />
            <ThemeCard theme={"120703-D2CBD2-993848-CC995C"} name="Sienna" />
            <ThemeCard
              theme={"0D0902-C9D4C4-5ECAD4-28D258-9EBB11"}
              name="Midnight"
            />
            <ThemeCard theme={"170311-C2B3BA-AF3323-E10543-1EBEA0"} name="Scorch" />
            <ThemeCard
              theme={"000F0C-B2B0BA-DE35A3-96B42D-5ED4CE-8020DF"}
              name="Bumblebee"
            />
            <ThemeCard
              theme={"130202-C48686-D47F46-57288F-098D68"}
              name="Halloween"
            />
          </div>
        </ScrollArea>
        <ScrollArea
          id="themes-bottom"
          style={{ opacity: "0" }}
          className="h-32 rounded-md whitespace-nowrap animate"
        >
          <div className="z-20 flex p-4 space-x-8 w-max">
            <ThemeCard
              theme={"05191A-BCC0B4-FC782C-AAB71F-FB32A4"}
              name="Honeydew"
            />
            <ThemeCard theme={"0D0902-C9D4C4-AA3ABB-E05294-CED459"} name="Blossom" />
            <ThemeCard
              theme={"1E0C06-BFC5C5-D3805A-D4AF40-3BA7BF"}
              name="Begaritt"
            />
            <ThemeCard theme={"080222-AABBAE-E14323-4667C8-A3D175"} name="Primary" />
            <ThemeCard
              theme={"160916-C2CBCC-E1CF2D-F89130-50DC7F"}
              name="Sweet Tea"
            />
            <ThemeCard theme={"08081C-BFBAB5-3A999C-3457CB-CD7860"} name="Icicle" />
          </div>
        </ScrollArea>
      </div>
      <Link href="#">Discover Themes {">"}</Link>
    </section>
  );
};

export default ThemeDisplay;

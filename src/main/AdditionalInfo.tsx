import { PaintBucket } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { Download } from "lucide-react";
import { useEffect } from "react";

interface Props {
  className?: string;
}

const AdditionalInfo = ({ className }: Props) => {
  useEffect(() => {
    const choose = document.getElementById("outer-choose")!;
    const adjust = document.getElementById("adjust")!;
    const exportEl = document.getElementById("export")!;

    choose.classList.add("float-passive");
    adjust.style.animationDelay = "0.5s";
    adjust.classList.add("float-passive");
    exportEl.style.animationDelay = "1s";
    exportEl.classList.add("float-passive");

    const handleHover = () => {
      console.log("hovering");

      const child = document.getElementById("choose")!;
      choose.style.animationIterationCount = "1";
      child.classList.add("float-up");
    };

    choose.addEventListener("mousedown", handleHover);
    adjust.addEventListener("hover", handleHover);
    exportEl.addEventListener("hover", handleHover);

    return () => {
      choose.removeEventListener("hover", handleHover);
      adjust.removeEventListener("hover", handleHover);
      exportEl.removeEventListener("hover", handleHover);
    };
  }, []);

  return (
    <section className={className}>
      <div className="relative flex flex-col text-center">
        <h1 className="z-10 text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-primary from-10% to-accent to-80%">
            Stunning themes
          </span>
          , <br />
          waiting for{" "}
          <div className="relative z-10 inline">
            your{" "}
            <div className="absolute -top-16 -left-32 size-[300%] bg-[radial-gradient(closest-corner_at_40%_50%,_hsla(from_hsl(var(--tertiary))_h_s_calc(l_*_0.75)_/_0.3)_0%,_rgba(36,_36,_36,_0)_50%)] rotate-12 -z-10" />
          </div>
          touch.
        </h1>
        <div id="additional-info" className="z-10 flex gap-6 mt-16">
          <div id="outer-choose">
            <figure
              id="choose"
              style={{
                boxShadow:
                  "0px 0px 10px 5px hsl(from hsl(var(--primary)) h s calc(l / 3))"
              }}
              className="overflow-hidden w-72 h-96 bg-gradient-to-b from-background to-[hsl(from_hsl(var(--background))_h_calc(s_*_0.75)_calc(l_*_.6))] rounded-2xl grid grid-rows-[6fr_4fr]"
            >
              <div className="flex flex-col items-center gap-2 my-auto">
                <PaintBucket
                  size={48}
                  className="stroke-[hsl(from_hsl(var(--secondary))_h_s_calc(l_*_0.7))]"
                />
                <figcaption className="text-2xl">Choose Your Colors</figcaption>
              </div>
              <div className="w-full px-5 bg-card">
                <p className="relative z-50 mt-4 text-primary-foreground">
                  Use the perfect amount of colors for your needs. You may select
                  between 3-6 colors.
                </p>
                <div className="protrusion-div" />
              </div>
            </figure>
          </div>
          {/*  */}
          <figure
            id="adjust"
            style={{
              boxShadow:
                "0px 0px 10px 5px hsl(from hsl(var(--primary)) h s calc(l / 3))"
            }}
            className="overflow-hidden w-72 h-96 bg-gradient-to-b from-background to-[hsl(from_hsl(var(--background))_h_calc(s_*_0.75)_calc(l_*_.6))] rounded-2xl grid grid-rows-[6fr_4fr]"
          >
            <div className="flex flex-col items-center gap-2 my-auto">
              <ArrowLeftRight
                size={48}
                className="stroke-[hsl(from_hsl(var(--secondary))_h_s_calc(l_*_0.7))]"
              />
              <figcaption className="text-2xl">Adjust Manually</figcaption>
            </div>
            <div className="w-full px-5 bg-card">
              <p className="relative z-50 mt-4 text-primary-foreground">
                Hover between two colors and click to swap their positions. Click on
                a color to adjust it.
              </p>
              <div className="protrusion-div" />
            </div>
          </figure>
          {/*  */}
          <figure
            id="export"
            style={{
              boxShadow:
                "0px 0px 10px 5px hsl(from hsl(var(--primary)) h s calc(l / 3))"
            }}
            className="overflow-hidden w-72 h-96 bg-gradient-to-b from-background to-[hsl(from_hsl(var(--background))_h_calc(s_*_0.75)_calc(l_*_.6))] rounded-2xl grid grid-rows-[6fr_4fr]"
          >
            <div className="flex flex-col items-center gap-2 my-auto">
              <Download
                size={48}
                className="stroke-[hsl(from_hsl(var(--secondary))_h_s_calc(l_*_0.7))]"
              />
              <figcaption className="text-2xl">Export When Finished</figcaption>
            </div>
            <div className="w-full px-5 bg-card">
              <p className="relative z-50 mt-4 text-primary-foreground">
                Once you're satisfied with your creation, export it in a variety of
                different formats.
              </p>
              <div className="protrusion-div" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;

import { creations } from "@/libs/data";
import { cn } from "@/libs/utils";

export default function Creations() {
  return (
    <article className="mt-12 max-w-[72.375rem] px-6 pb-12 sm:mx-auto sm:mt-[8.25rem]">
      <div className="sm:flex sm:items-center">
        <h2 className="text-center text-[2rem] uppercase sm:text-left sm:text-[3rem]">
          Our Creations
        </h2>
        <button className="ml-auto hidden h-10 border-[0.125rem] border-black px-[2.3125rem] py-0 uppercase tracking-[0.3em] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:block">
          See all
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-y-6 sm:mt-[4.25rem] sm:grid sm:grid-cols-4 sm:gap-[1.850rem]">
        {creations.map((creation) => (
          <section
            className={cn(
              "relative h-[7.5rem] w-full px-6 py-6 sm:col-span-1 sm:h-[450px]",
              "bg-cover bg-center bg-no-repeat",
              "bg-[image:var(--bg-image-mobile)]",
              "sm:bg-[image:var(--bg-image-desktop)]",
            )}
            key={creation.heading}
            style={
              {
                "--bg-image-mobile": `url(${creation.mobileImage})`,
                "--bg-image-desktop": `url(${creation.desktopImage})`,
              } as React.CSSProperties
            }
          >
            <h2 className="absolute bottom-5 left-5 text-2xl leading-[1] text-white sm:bottom-8 sm:left-10 sm:text-[32px]">
              {creation.heading === "From up above VR" ||
                creation.heading === "Make it fisheye" ? (
                <>
                  <span className="block">
                    {creation.heading.split(" ").slice(0, 2).join(" ")}
                  </span>
                  <span className="block">
                    {creation.heading.split(" ").slice(2).join(" ")}
                  </span>
                </>
              ) : (
                <>
                  <span className="block">
                    {creation.heading.split(" ").slice(0, 1).join(" ")}
                  </span>
                  <span className="block">
                    {creation.heading.split(" ").slice(1).join(" ")}
                  </span>
                </>
              )}
            </h2>
          </section>
        ))}
        <button className="mx-auto mt-[0.5625rem] border-[0.125rem] border-black px-[2.3125rem] py-2 uppercase tracking-[0.3em] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:hidden">
          See all
        </button>
      </div>
    </article>
  );
}

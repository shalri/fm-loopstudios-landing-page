import { banner, hero } from "@/libs/data";

export default function Hero() {
  return (
    <>
      <section className="-mt-[4.2667rem] h-[41rem] w-full bg-[url(/images/mobile/image-hero.jpg)] bg-contain bg-no-repeat pt-10">
        <h1 className="hidden border-4 border-white text-white">
          {banner.copy}
        </h1>
      </section>
      <section className="">
        <div className="h-[20rem] w-full bg-[url(/images/mobile/image-interactive.jpg)] bg-contain bg-no-repeat" />
        <div className="">
          <h2 className="text-4xl uppercase">{hero.heading}</h2>
          <p className="">{hero.copy}</p>
        </div>
      </section>
    </>
  );
}

import { banner, hero } from "@/libs/data";

export default function Hero() {
  return (
    <>
      <section className="h-[41rem] w-full bg-[url(/images/mobile/image-hero.jpg)] bg-contain bg-no-repeat">
        <h1 className="border-4 border-white text-white">{banner.copy}</h1>
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

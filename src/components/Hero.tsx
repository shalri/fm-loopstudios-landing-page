import { banner, hero } from "@/libs/data";

export default function Hero() {
  return (
    <>
      {/* TODO: uncomment code below... using padding for now for easy alignment */}
      <section className="-mt-[4.2667rem] h-[41rem] w-full content-center bg-[url(/images/mobile/image-hero.jpg)] bg-contain bg-center bg-no-repeat">
        <h1 className="mx-6 border-[0.1rem] border-white px-6 pb-[1.12rem] pt-[1.51rem] text-[2.5rem] leading-[0.95] text-white">
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

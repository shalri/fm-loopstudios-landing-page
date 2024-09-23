import { banner, hero } from "@/libs/data";

export default function Hero() {
  return (
    <article className="pb-10">
      <section className="-mt-[4.2667rem] h-[41rem] w-full content-center bg-[url(/images/mobile/image-hero.jpg)] bg-cover bg-center bg-no-repeat">
        <h1 className="small-banner mx-6 border-[0.1rem] border-white px-6 pb-[1.12rem] pt-[1.51rem] text-[2.5rem] leading-[0.95] text-white">
          {banner.copy}
        </h1>
      </section>
      <section className="mt-[5.875rem] px-6">
        <div className="h-[14rem] w-full bg-[url(/images/mobile/image-interactive.jpg)] bg-cover bg-no-repeat" />
        <div className="mt-[3.125rem] text-center">
          <h2 className="text-[2rem] uppercase leading-[0.95] text-black">
            {hero.heading}{" "}
          </h2>
          <p className="mx-auto mt-[1.125rem] max-w-[17.5rem] leading-[1.66] text-ls-very-dark-gray">
            {hero.copy}
          </p>
        </div>
      </section>
    </article>
  );
}

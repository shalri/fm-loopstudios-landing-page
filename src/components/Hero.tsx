import { banner, hero } from "@/libs/data";

export default function Hero() {
  return (
    <article className="pb-10">
      <section className="-mt-[4.2667rem] h-[41rem] w-full content-center bg-[url(/images/mobile/image-hero.jpg)] bg-cover bg-center bg-no-repeat sm:-mt-[6rem] sm:h-[40.6rem] sm:bg-[url(/images/desktop/image-hero.jpg)]">
        <div className="mx-auto max-w-[72.375rem]">
          <h1 className="small-banner border-[0.1rem] border-white px-6 pb-[1.12rem] pt-[1.51rem] text-[2.5rem] leading-[0.95] text-white sm:mx-6 sm:mt-[5rem] sm:max-w-[40.75rem] sm:border-[0.175rem] sm:px-[2.35rem] sm:pb-[1.625rem] sm:pt-10 sm:text-[4.5rem] sm:leading-[0.97]">
            {banner.copy}
          </h1>
        </div>
      </section>
      <section className="mt-[5.875rem] max-w-[72.375rem] px-6 sm:relative sm:mx-auto sm:mt-[10rem]">
        <div className="h-[14rem] w-full bg-[url(/images/mobile/image-interactive.jpg)] bg-cover bg-no-repeat sm:h-[31.3rem] sm:max-w-[65.8%] sm:bg-[url(/images/desktop/image-interactive.jpg)]" />
        <div className="mt-[3.125rem] bg-white text-center sm:absolute sm:-bottom-6 sm:right-0 sm:mt-0 sm:w-[48.8%] sm:pl-[96px] sm:pt-[94px] sm:text-left">
          <h2 className="text-[2rem] uppercase leading-[0.98] text-black sm:mt-1 sm:text-[48px]">
            {hero.heading}{" "}
          </h2>
          <p className="mx-auto mt-[1.125rem] max-w-[17.5rem] leading-[1.66] text-ls-very-dark-gray sm:mx-0 sm:max-w-full sm:pb-6 sm:pr-5 sm:pt-2 sm:tracking-[0.010em]">
            {hero.copy}
          </p>
        </div>
      </section>
    </article>
  );
}

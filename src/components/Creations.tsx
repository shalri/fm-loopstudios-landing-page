import { creations } from "@/libs/data";

export default function Creations() {
  return (
    <article>
      <h2 className="text-4xl uppercase">Our Creations</h2>
      <div className="">
        {/* TODO: use vercel pattern from last project to handle condtional images */}
        {creations.map((creation) => (
          <section
            className="bg-cover bg-center"
            key={creation.heading}
            style={{ backgroundImage: `url(${creation.mobileImage})` }}
          >
            <h2 className="text-2xl text-white">{creation.heading}</h2>
          </section>
        ))}
      </div>
    </article>
  );
}

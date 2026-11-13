import Image from 'next/image';

export default function Founder({ founder }) {
  if (!founder) return null;
  return (
    <section className="section founder" id="founder">
      <div className="container">
        <h2 className="h-xl">FOUNDER</h2>
        <div className="founder-grid">
          <figure className="founder-photo">
            <Image src={founder.image} alt={founder.name} fill sizes="(max-width:768px) 100vw, 36vw" className="cover" />
            <figcaption><b>{founder.name}</b> - {founder.position}</figcaption>
          </figure>
          <div className="founder-text">
            <h3 className="h-md">{founder.title}</h3>
            <p>{founder.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

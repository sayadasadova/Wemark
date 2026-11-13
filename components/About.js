import AboutSlider from './AboutSlider';
import { titleLines, paragraphs } from '@/lib/api';

export default function About({ title, description, images = [] }) {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-head">
          <h2 className="h-xl">{titleLines(title).map((l, i) => <span key={i}>{l}</span>)}</h2>
          <a className="ulink" href="#program">Go to xSchool</a>
        </div>
        <div className="about-text">
          {paragraphs(description).map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
      <AboutSlider images={images.map((x) => x.image)} />
    </section>
  );
}

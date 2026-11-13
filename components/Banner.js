import Image from 'next/image';
import Header from './Header';
import { titleLines } from '@/lib/api';

export default function Banner({ title, image }) {
  return (
    <section className="banner">
      <Image src={image} alt="" fill priority sizes="100vw" className="cover" />
      <Header />
      <h1 className="banner-title">
        {titleLines(title).map((l, i) => (
          <span key={i} style={{ '--i': i }}>{l}</span>
        ))}
      </h1>
    </section>
  );
}

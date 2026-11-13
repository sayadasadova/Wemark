import { cleanHtml, titleLines } from '@/lib/api';

export default function Program({ program }) {
  if (!program) return null;
  return (
    <section className="section program" id="program">
      <div className="container">
        <h2 className="h-xl">{titleLines(program.title).join(' ')}</h2>
        {/* HTML comes from our own CMS API */}
        <div className="rich" dangerouslySetInnerHTML={{ __html: cleanHtml(program.description) }} />
      </div>
    </section>
  );
}

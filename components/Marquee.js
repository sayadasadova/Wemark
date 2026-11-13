// Pure CSS marquee: two rows moving in opposite directions, pauses on hover.
function Row({ items, reverse }) {
  const group = [...items, ...items]; // enough width for wide screens
  return (
    <div className={`marquee-row ${reverse ? 'rev' : ''}`}>
      <div className="marquee-track">
        {[0, 1].map((g) => (
          <div className="marquee-group" key={g} aria-hidden={g === 1}>
            {group.map((t, i) => (
              <span className="marquee-item" key={i}>
                {t.toUpperCase()}<i>*</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee({ lines = [] }) {
  if (!lines.length) return null;
  const shifted = [...lines.slice(1), lines[0]];
  return (
    <section className="marquee" aria-label={lines.join(', ')}>
      <Row items={lines} />
      <Row items={shifted} reverse />
    </section>
  );
}

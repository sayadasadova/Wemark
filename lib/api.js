const API_URL = 'https://admin.wemark.pro/api/tasks-xschool/';

// Server-side fetch (called only from Server Components), revalidated every 60s.
export async function getXSchoolData() {
  const res = await fetch(API_URL, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// "Welcome  to \r\nnew-gen" -> ["WELCOME TO", "NEW-GEN"]. Keeps "xSchool" -> "xSCHOOL" like the design.
export function titleLines(str = '') {
  return str
    .split(/\r?\n/)
    .map((l) => l.trim().replace(/\s+/g, ' '))
    .filter(Boolean)
    .map((l) =>
      l
        .split(' ')
        .map((w) => (/^x[a-z]/i.test(w) ? 'x' + w.slice(1).toUpperCase() : w.toUpperCase()))
        .join(' ')
    );
}

export const paragraphs = (str = '') => str.split(/\r?\n\s*\r?\n/).map((p) => p.trim()).filter(Boolean);

// Removes empty spacer markup that the CMS editor produces.
export const cleanHtml = (html = '') =>
  html
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, '')
    .replace(/<ul>\s*<\/ul>/gi, '')
    .replace(/<br\s*\/?>\s*(&nbsp;)?\s*<\/li>/gi, '</li>');

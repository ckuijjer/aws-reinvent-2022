import page1 from './data/page1.json';
import page2 from './data/page2.json';
import page3 from './data/page3.json';
import page4 from './data/page4.json';

const all = [...page1, ...page2, ...page3, ...page4];

const links = all.map(({ href, title }) => {
  const url = new URL(href);
  url.searchParams.delete('index');
  url.searchParams.delete('list');

  return `[${title}](${url.href})`;
});
const uniq = [...new Set(links)];

const result = uniq.join('\n\n');

console.log(result);

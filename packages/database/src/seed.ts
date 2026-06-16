import { db } from './index';
import { pages } from './schema/pages';

await db.insert(pages).values({
  title: 'Home Page',
  content: {
    content: [],
  },
});

console.log('Page inserted');

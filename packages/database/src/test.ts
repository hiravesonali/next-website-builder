import { sql } from 'drizzle-orm';
import { db } from './index';

const result = await db.execute(sql`SELECT NOW()`);

console.log(result);

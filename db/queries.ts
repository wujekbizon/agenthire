import "server-only"

import { count, eq } from 'drizzle-orm';
import { db } from './index';
import { pageViews } from './schema';

export async function logPageView(path: string = '/') {
  await db.insert(pageViews).values({ path });
}

export async function getPageViewCount(path?: string): Promise<number> {
  const result = path
    ? await db.select({ total: count() }).from(pageViews).where(eq(pageViews.path, path))
    : await db.select({ total: count() }).from(pageViews);
  return result[0]?.total ?? 0;
}

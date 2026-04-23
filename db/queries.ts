import 'server-only';

import { sql, eq, sum } from 'drizzle-orm';
import { db } from './index';
import { pageViews } from './schema';

export async function logPageView(path: string = '/') {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  await db
    .insert(pageViews)
    .values({ path, date: today, count: 1 })
    .onConflictDoUpdate({
      target: [pageViews.path, pageViews.date],
      set: { count: sql`${pageViews.count} + 1` },
    });
}

export async function getPageViewCount(path?: string): Promise<number> {
  const result = path
    ? await db
        .select({ total: sum(pageViews.count) })
        .from(pageViews)
        .where(eq(pageViews.path, path))
    : await db.select({ total: sum(pageViews.count) }).from(pageViews);

  return Number(result[0]?.total ?? 0);
}

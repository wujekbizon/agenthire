import { pgTable, serial, varchar, text, timestamp, date, integer, primaryKey } from 'drizzle-orm/pg-core';

export const pageViews = pgTable('agenthire_page_views', {
  path: varchar('path', { length: 256 }).notNull(),
  date: date('date').notNull(),
  count: integer('count').notNull().default(0),
}, (t) => [
  primaryKey({ columns: [t.path, t.date] }),
]);

export const waitlist = pgTable('agenthire_waitlist', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type WaitlistEntry = typeof waitlist.$inferSelect;
export type NewWaitlistEntry = typeof waitlist.$inferInsert;

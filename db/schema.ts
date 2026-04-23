import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const pageViews = pgTable('agenthire_page_views', {
  id: serial('id').primaryKey(),
  path: varchar('path', { length: 256 }).notNull().default('/'),
  visitedAt: timestamp('visited_at').defaultNow().notNull(),
});

export const waitlist = pgTable('agenthire_waitlist', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type WaitlistEntry = typeof waitlist.$inferSelect;
export type NewWaitlistEntry = typeof waitlist.$inferInsert;

import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput =pgTable("ai_output", {
    id: serial("id").primaryKey(),
    formData:varchar("formData").notNull(),
    aiResponce:text("aiResponce"),
    templateSlug:varchar("templateSlug").notNull(),
    createdBy:varchar("createdBy").notNull(),
    createdAt:varchar("createdAt"),
  });
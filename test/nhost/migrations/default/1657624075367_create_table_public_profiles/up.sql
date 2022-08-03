CREATE TABLE "public"."profiles" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "stripe_customer_id" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON UPDATE restrict ON DELETE cascade, UNIQUE ("stripe_customer_id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

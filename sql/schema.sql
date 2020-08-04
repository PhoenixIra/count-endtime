BEGIN TRANSACTION;
DROP TABLE IF EXISTS "guild";
CREATE TABLE IF NOT EXISTS "guild" (
	"id"	INTEGER NOT NULL,
	"locale"	TEXT,
	"defFormat"	TEXT,
	"timezone"	TEXT,
	PRIMARY KEY("id")
);
DROP TABLE IF EXISTS "countdowns";
CREATE TABLE IF NOT EXISTS "countdowns" (
	"guild_id"	INTEGER NOT NULL,
	"moment_id"	TEXT NOT NULL,
	"message_id"	INTEGER NOT NULL,
	"format"	TEXT,
	"locale"	TEXT,
	"timezone"	TEXT,
	PRIMARY KEY("message_id"),
	FOREIGN KEY("guild_id") REFERENCES "guild"("id")
);
DROP TABLE IF EXISTS "moments";
CREATE TABLE IF NOT EXISTS "moments" (
	"guild_id"	INTEGER NOT NULL,
	"moment_id"	TEXT NOT NULL,
	"moment_epoch"	INTEGER NOT NULL,
	PRIMARY KEY("guild_id"),
	FOREIGN KEY("guild_id") REFERENCES "guild"("id")
);
COMMIT;

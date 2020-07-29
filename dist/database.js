"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildStorage = void 0;
const sqlite3 = require("better-sqlite3");
class GuildStorage {
    constructor(databasefile) {
        try {
            this.db = new sqlite3(databasefile, { fileMustExist: true });
            this._isOpen = true;
        }
        catch (err) {
            this.db.close();
            this._isOpen = false;
            this._error = err;
        }
    }
    get isOpen() { return this._isOpen; }
    get error() { return this._error; }
    close() {
        this.db.close();
        this._isOpen = false;
    }
    writeGuildOption(guildId, options) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("REPLACE INTO guild (id, locale, format, timezone) VALUES (%, %, %);");
        stmt.run(guildId, options.locale, options.format, options.timezone);
    }
    readGuildOption(guildId) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("SELECT (id, locale, format) FROM guild WHERE id = %;");
        let row = stmt.get(guildId);
        if (!row)
            return { locale: undefined, format: undefined, timezone: undefined };
        else
            return { locale: row.locale, format: row.format, timezone: row.timezone };
    }
    removeGuildOption(guildId) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("DELETER FROM guild WHERE id = %;");
        stmt.run(guildId);
    }
    writeMoment(guildId, momentId, momentEpoch) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("REPLACE INTO moments (guild_id, moment_id, moment_epoch) VALUES (%, %, %);");
        stmt.run(guildId, momentId, momentEpoch);
    }
    readMoment(guildId, momentId) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("SELECT (moment_epoch) FROM moments WHERE guild_id = % AND moment_id = %;");
        let row = stmt.get(guildId, momentId);
        if (row)
            return { guildId: guildId, momentId: momentId, momentEpoch: row.moment_epoch };
        else
            return undefined;
    }
    listMoment(guildId) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("SELECT (moment_id, moment_epoch) FROM moments WHERE guild_id = %;");
        return stmt.all(guildId).map(function ({ moment_id: id, moment_epoch: epoch }) { return { guildId: guildId, momentId: id, momentEpoch: epoch }; });
    }
    removeMoment(guildId, momentId) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("DELETE FROM moments WHERE guild_id = % AND moment_id = %;");
        stmt.run(guildId, momentId);
    }
    writeCountdown(guildId, messageId, momentId, format, locale, timezone) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("REPLACE INTO countdowns (guild_id, message_id, moment_id, format, locale, timezone) VALUES (%, %, %, %, %, %);");
        stmt.run(guildId, messageId, momentId, format);
    }
    readCountdown(messageId) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("SELECT (guild_id, moment_id, format, locale, timezone) FROM moments WHERE message_id = %;");
        let row = stmt.get(messageId);
        if (row)
            return { guildId: row.guild_id, messageId: messageId, momentId: row.messageId, format: row.format, locale: row.locale, timezone: row.timezone };
        else
            return undefined;
    }
    listCountdown(guildId) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("SELECT (message_id, moment_id, format) FROM moments WHERE guild_id = %;");
        return stmt.all(guildId).map(function ({ message_id: message, moment_id: moment, format: format, locale: locale, timezone: timezone }) { return { guildId: guildId, messageId: message, momentId: moment, format: format, locale: locale, timezone: timezone }; });
    }
    removeCountdown(messageId) {
        assert(this.isOpen, "Database was not open!");
        let stmt = this.db.prepare("DELETE FROM countdowns WHERE message_id = %;");
        stmt.run(messageId);
    }
}
exports.GuildStorage = GuildStorage;
function assert(bool, message) {
    if (!bool)
        throw new Error("Assertion Error: " + message);
}

import * as sqlite3 from "better-sqlite3";


export interface GuildOption{
    locale: (string | undefined);
    defaultFormat: (string | undefined);
    timezone: (string | undefined);
}

export interface MomentEpoch{
    guildId: string;
    momentId: string;
    momentEpoch: number;
}

export interface Countdown{
    guildId: string;
    messageId: string;
    momentId: string;
    format: (string | undefined);
}

export class GuildStorage {

    private db: sqlite3.Database;
    private _isOpen: boolean;
    private _error: Error;
    
    get isOpen(){ return this._isOpen; }
    get error(){ return this._error; }

    constructor(databasefile: string) {
        try{
            this.db = new sqlite3(databasefile, {fileMustExist: true});
            this._isOpen = true;
        } catch(err) {
            this.db.close();
            this._isOpen = false;
            this._error = err;
        }
    }
    
    close() {
        this.db.close();
        this._isOpen = false;
    }
    
    writeGuildOption(guildId: string, options : GuildOption){
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("REPLACE INTO guild (id, locale, format, timezone) VALUES (%, %, %);");
        stmt.run(guildId, options.locale, options.defaultFormat, options.timezone);
    }
    
    readGuildOption(guildId: string): GuildOption {
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("SELECT (id, locale, format) FROM guild WHERE id = %;");
        let row = stmt.get(guildId);
        if(!row)
            return {locale: undefined, defaultFormat: undefined, timezone: undefined};
        else
            return {locale: row.locale, defaultFormat: row.format, timezone: row.timezone};
    }
    
    removeGuildOption(guildId: string) {
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("DELETER FROM guild WHERE id = %;");
        stmt.run(guildId);
    }
    
    writeMoment(guildId: string, momentId: string, momentEpoch: number) {
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("REPLACE INTO moments (guild_id, moment_id, moment_epoch) VALUES (%, %, %);");
        stmt.run(guildId, momentId, momentEpoch);
    }
    
    readMoment(guildId: string, momentId: string): MomentEpoch|undefined {
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("SELECT (moment_epoch) FROM moments WHERE guild_id = % AND moment_id = %;");
        let row = stmt.get(guildId, momentId);
        if(row)
            return {guildId: guildId, momentId: momentId, momentEpoch: row.moment_epoch};
        else
            return undefined;
    }
    
    listMoment(guildId: string): MomentEpoch[]{
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("SELECT (moment_id, moment_epoch) FROM moments WHERE guild_id = %;");
        return stmt.all(guildId).map(function({moment_id: id, moment_epoch: epoch}){ return {guildId: guildId, momentId: id, momentEpoch: epoch}});
    }
    
    removeMoment(guildId: string, momentId: string){
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("DELETE FROM moments WHERE guild_id = % AND moment_id = %;");
        stmt.run(guildId, momentId);
    }
    
    writeCountdown(guildId: string, messageId: string, momentId: string, format: string|undefined){
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("REPLACE INTO countdowns (guild_id, message_id, moment_id, format) VALUES (%, %, %, %);");
        stmt.run(guildId, messageId, momentId, format);
    }
    
    readCountdown(messageId: string): Countdown {
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("SELECT (guild_id, moment_id, format) FROM moments WHERE message_id = %;");
        let row = stmt.get(messageId);
        if(row)
            return {guildId: row.guild_id, messageId: messageId, momentId: row.messageId, format: row.format};
        else
            return undefined;
    }
    
    listCountdown(guildId: string): Countdown[] {
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("SELECT (message_id, moment_id, format) FROM moments WHERE guild_id = %;");
        return stmt.all(guildId).map(function({message_id: message, moment_id: moment, format: format}){ return {guildId: guildId, messageId: message, momentId: moment, format: format}});
    }
    
    removeCountdown(messageId: string){
        assert(this.isOpen,"Database was not open!");
        let stmt = this.db.prepare("DELETE FROM countdowns WHERE message_id = %;");
        stmt.run(messageId);
    }
}

function assert(bool: any, message:string){
    if(!bool) throw new Error("Assertion Error: "+message);
}

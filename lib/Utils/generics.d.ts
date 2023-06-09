/// <reference types="node" />
import { Logger } from 'pino';
import { proto } from '../../WAProto';
import { BaileysEventMap, CommonBaileysEventEmitter, WACallUpdateType, WAVersion } from '../Types';
import { BinaryNode } from '../WABinary';
export declare const Browsers: {
    ubuntu: (browser: any) => [string, string, string];
    macOS: (browser: any) => [string, string, string];
    baileys: (browser: any) => [string, string, string];
    /** The appropriate browser based on your OS & release */
    appropriate: (browser: any) => [string, string, string];
};
export declare const BufferJSON: {
    replacer: (k: any, value: any) => any;
    reviver: (_: any, value: any) => any;
};
export declare const writeRandomPadMax16: (msg: Uint8Array) => Buffer;
export declare const unpadRandomMax16: (e: Uint8Array | Buffer) => Uint8Array;
export declare const encodeWAMessage: (message: proto.IMessage) => Buffer;
export declare const generateRegistrationId: () => number;
export declare const encodeBigEndian: (e: number, t?: number) => Uint8Array;
export declare const toNumber: (t: Long | number) => any;
export declare function shallowChanges<T>(old: T, current: T, { lookForDeletedKeys }: {
    lookForDeletedKeys: boolean;
}): Partial<T>;
/** unix timestamp of a date in seconds */
export declare const unixTimestampSeconds: (date?: Date) => number;
export declare type DebouncedTimeout = ReturnType<typeof debouncedTimeout>;
export declare const debouncedTimeout: (intervalMs?: number, task?: () => void) => {
    start: (newIntervalMs?: number, newTask?: () => void) => void;
    cancel: () => void;
    setTask: (newTask: () => void) => () => void;
    setInterval: (newInterval: number) => number;
};
export declare const delay: (ms: number) => Promise<void>;
export declare const delayCancellable: (ms: number) => {
    delay: Promise<void>;
    cancel: () => void;
};
export declare function promiseTimeout<T>(ms: number, promise: (resolve: (v?: T) => void, reject: (error: any) => void) => void): Promise<T>;
export declare const generateMessageID: () => string;
export declare function bindWaitForEvent<T extends keyof BaileysEventMap<any>>(ev: CommonBaileysEventEmitter<any>, event: T): (check: (u: BaileysEventMap<any>[T]) => boolean, timeoutMs?: number) => Promise<void>;
export declare const bindWaitForConnectionUpdate: (ev: CommonBaileysEventEmitter<any>) => (check: (u: Partial<import("../Types").ConnectionState>) => boolean, timeoutMs?: number) => Promise<void>;
export declare const printQRIfNecessaryListener: (ev: CommonBaileysEventEmitter<any>, logger: Logger) => void;
/**
 * utility that fetches latest baileys version from the master branch.
 * Use to ensure your WA connection is always on the latest version
 */
export declare const fetchLatestBaileysVersion: () => Promise<{
    version: WAVersion;
    isLatest: boolean;
    error?: undefined;
} | {
    version: WAVersion;
    isLatest: boolean;
    error: any;
}>;
/** unique message tag prefix for MD clients */
export declare const generateMdTagPrefix: () => string;
/**
 * Given a type of receipt, returns what the new status of the message should be
 * @param type type from receipt
 */
export declare const getStatusFromReceiptType: (type: string | undefined) => proto.WebMessageInfo.WebMessageInfoStatus;
/**
 * Stream errors generally provide a reason, map that to a baileys DisconnectReason
 * @param reason the string reason given, eg. "conflict"
 */
export declare const getErrorCodeFromStreamError: (node: BinaryNode) => {
    reason: string;
    statusCode: number;
};
export declare const getCallStatusFromNode: ({ tag, attrs }: BinaryNode) => WACallUpdateType;


export interface IChirp {
    id?: number;
    userid?: number;
    content: string;
    location: string;
    _created?: Date | string;
}

export interface IUser {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    _created?: Date | string;
}

export interface MysqlResponse {
    affectedRows?: number;
    insertId?: number;
}

export interface UsersTable {
    id?: number;
    email?: string;
    password?: string;
    _created?: Date;
}

import { Request } from 'express';

export interface ReqUser extends Request {
    user?: IUser | Payload;
}

export interface Payload extends UsersTable {
    userid?: number;
    role?: number;
}
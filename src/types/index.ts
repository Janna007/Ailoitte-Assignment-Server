import { Request } from 'express';

export type registerUserData = {
    id?: number;
    username: string;
    email: string;
    password: string;
    role: string;
};

export interface userData {
    username: string;
    email: string;
    password: string;
}

export interface userLoginData {
    email: string;
    password: string;
}
export interface RequestRegisterUser extends Request {
    body: userData;
}

export interface RequestLoginUser extends Request {
    body: userLoginData;
}

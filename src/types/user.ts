import {UserData} from '../types/user-data';

export type User = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type UserLogin = UserData & User;

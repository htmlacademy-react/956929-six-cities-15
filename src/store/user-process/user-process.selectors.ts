import { State } from '../../types/state';
import { TitleSpace, AuthorizationStatus } from '../../const';
import { UserLogin } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[TitleSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[TitleSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUser = (state: State): UserLogin | null => state[TitleSpace.User].user;

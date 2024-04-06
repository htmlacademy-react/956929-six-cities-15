import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/offer';
import { ApiRoute, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserLogin } from '../types/user';
import { Review } from '../types/review';
import { Comments } from '../types/comments';
import { redirectToRoute } from './action';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchOffer',
    async (_arg, { extra: api }) => {
      const id = _arg;
      const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);
      return data;
    },
  );

export const fetchNearOffersAction = createAsyncThunk<Offer[], number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'fetchNearPlacesAction', async (_arg, { extra: api }) => {
      const id = _arg;
      const { data } = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);
      return data;
    });

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(ApiRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserLogin, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {data} = await api.post<UserLogin>(ApiRoute.Login, {email, password});
    const {token} = data;

    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], number | string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReview',
  async (_arg, { extra: api }) => {
    const id = _arg;
    const {data} = await api.get<Review[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  });

export const submitCommentAction = createAsyncThunk<Review, Comments, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'submitComment',
  async ({ id, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review>(`${ApiRoute.Comments}/${id}`, {
      comment: comment,
      rating: rating,
    });

    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  },
);
